#!/usr/bin/env python3
"""Update the CURRENT_PROJECT placeholder in dist/index.html with the repo
natarmr pushed to most recently (excluding this repo and forks when possible)."""

import html
import json
import os
import sys
import urllib.error
import urllib.request

USER = "natarmr"
PER_PAGE = 5
START = "<!--CURRENT_PROJECT_START-->"
END = "<!--CURRENT_PROJECT_END-->"
ANCHOR = '&gt;_ Ship it.<span class="cursor"></span>'
ANCHOR_REPLACEMENT = (
    '&gt;_ Currently building: '
    + START
    + "{content}"
    + END
    + "<br>\n                "
    + ANCHOR
)

THIS_REPO = os.environ.get("REPO", "natarmr/minimalme")


def fetch_repos():
    url = "https://api.github.com/users/%s/repos?sort=pushed&per_page=%d" % (USER, PER_PAGE)
    headers = {
        "User-Agent": "portfolio-update-bot",
        "Accept": "application/vnd.github+json",
    }
    token = os.environ.get("GH_TOKEN")
    if token:
        headers["Authorization"] = "Bearer %s" % token
    req = urllib.request.Request(url, headers=headers)
    with urllib.request.urlopen(req, timeout=30) as resp:
        return json.load(resp)


def main():
    target = sys.argv[1] if len(sys.argv) > 1 else "dist/index.html"

    try:
        repos = fetch_repos()
    except (urllib.error.URLError, urllib.error.HTTPError, json.JSONDecodeError) as exc:
        print("API fetch failed: %s" % exc)
        return 0

    candidates = [r for r in repos if r["full_name"] != THIS_REPO and not r["fork"]]
    if not candidates:
        candidates = [r for r in repos if r["full_name"] != THIS_REPO]
    if not candidates:
        print("No candidate repos found")
        return 0

    top = candidates[0]
    name = top["full_name"]
    html_url = top["html_url"]
    description = top.get("description") or ""

    link = '<a href="%s" target="_blank" rel="noopener noreferrer">%s</a>' % (
        html_url,
        html.escape(name),
    )
    line = "%s &mdash; %s" % (link, html.escape(description)) if description else link

    with open(target, encoding="utf-8") as fh:
        content = fh.read()

    replacement = START + line + END
    if START in content and END in content:
        head = content[: content.index(START)]
        tail = content[content.index(END) + len(END):]
        updated = head + replacement + tail
    elif ANCHOR in content:
        updated = content.replace(ANCHOR, ANCHOR_REPLACEMENT.format(content=line), 1)
    else:
        print("Placeholder markers and anchor line not found in %s" % target)
        return 0

    if updated == content:
        print("No change needed")
        return 0

    with open(target, "w", encoding="utf-8", newline="") as fh:
        fh.write(updated)
    print("Updated %s to %s" % (target, name))
    return 0


if __name__ == "__main__":
    sys.exit(main())
