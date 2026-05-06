# ramratan.in

**A brutalist, newspaper-style portfolio built for speed.** Single HTML file, zero JavaScript, zero external requests. Hosted on Cloudflare Pages.

🔗 **Live:** [ramratan.in](https://ramratan.in)

---

## Performance

| Metric | Value |
|---|---|
| **Transfer size (gzip)** | **6.2 KB** |
| **Uncompressed HTML** | 19.1 KB |
| **HTTP requests** | 1 (just the HTML) |
| **JavaScript** | 0 bytes |
| **External CSS** | 0 bytes |
| **External fonts** | 0 |
| **Images** | 0 |
| **DOM elements** | ~150 |
| **Total repo files** | 7 |

## Architecture

```
index.html          ← entire site (inlined CSS, zero JS)
robots.txt          ← AI crawler rules
llms.txt            ← structured context for LLMs
sitemap.xml         ← search engine sitemap
ramratan_resume.pdf ← downloadable resume
favicon.ico         ← browser icon
.gitignore
```

**Design philosophy:** everything ships in one HTTP response. No render-blocking resources, no layout shifts, no hydration. The browser parses HTML and paints — that's it.

## AEO (Agentic Engine Optimization)

Optimized for AI crawlers and LLM discoverability.

| Check | Status |
|---|---|
| `llms.txt` present | ✅ 3.4 KB, structured Markdown |
| `robots.txt` with AI bot rules | ✅ GPTBot, ClaudeBot, PerplexityBot, Google-Extended + 7 more |
| `sitemap.xml` with lastmod | ✅ Weekly changefreq, priority 1.0 |
| Token count (homepage) | ✅ ~4,900 tokens (well under 25K context limit) |
| Semantic HTML | ✅ Proper heading hierarchy, `<nav>`, `<main>`, `<section>`, `<footer>` |
| Meta tags | ✅ Description, canonical, robots |

### llms.txt Coverage

The `llms.txt` file provides structured context including:
- Bio, role, education, location
- All projects with tech stacks
- Work experience with descriptions
- Skills taxonomy (languages, tools, concepts)
- Published research
- Contact information and links

## Stack

- **Markup:** Semantic HTML5
- **Styling:** Vanilla CSS (inlined in `<style>`)
- **Fonts:** System font stack (`Georgia`, `Times New Roman`, `serif`)
- **Hosting:** Cloudflare Pages
- **Domain:** Cloudflare DNS
- **Build step:** None — static file, no compilation

## Design

Brutalist newspaper aesthetic inspired by [berzi.one](https://berzi.one) and [superminimalism](https://github.com/spirizeon/superminimalism):

- Warm paper tone (`#c5b395`) with black ink
- Newspaper masthead with volume/edition/date
- Grid layout with sidebar
- Project cards, experience timeline, skills grid
- Fully mobile-responsive (single-column collapse)

## License

© Ramratan Padhy. All rights reserved.
