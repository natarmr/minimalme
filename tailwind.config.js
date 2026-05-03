/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  darkMode: "class",
  theme: {
    extend: {
      "colors": {
          "tertiary-fixed-dim": "#ffb4ac",
          "on-secondary": "#ffffff",
          "on-secondary-fixed-variant": "#474746",
          "on-primary": "#ffffff",
          "inverse-primary": "#d7c4a5",
          "on-secondary-fixed": "#1c1b1b",
          "on-surface": "#1b1c1c",
          "primary-fixed-dim": "#d7c4a5",
          "inverse-surface": "#303030",
          "on-background": "#1b1c1c",
          "on-error": "#ffffff",
          "surface-container-low": "#f6f3f2",
          "on-surface-variant": "#4c463d",
          "surface": "#fbf9f8",
          "on-primary-fixed-variant": "#52452e",
          "on-tertiary": "#ffffff",
          "inverse-on-surface": "#f3f0f0",
          "on-primary-container": "#52452e",
          "surface-container-lowest": "#ffffff",
          "primary-container": "#c5b395",
          "background": "#fbf9f8",
          "surface-container-high": "#eae8e7",
          "tertiary-container": "#ff9a90",
          "surface-container": "#f0eded",
          "tertiary-fixed": "#ffdad6",
          "surface-container-highest": "#e4e2e1",
          "error": "#ba1a1a",
          "outline-variant": "#cec5b9",
          "error-container": "#ffdad6",
          "on-tertiary-fixed-variant": "#92030f",
          "on-secondary-container": "#636262",
          "surface-tint": "#6b5d43",
          "outline": "#7d766c",
          "on-primary-fixed": "#241a06",
          "secondary-fixed": "#e5e2e1",
          "on-tertiary-fixed": "#410003",
          "secondary-container": "#e2dfde",
          "surface-variant": "#e4e2e1",
          "surface-dim": "#dcd9d9",
          "surface-bright": "#fbf9f8",
          "tertiary": "#b52424",
          "secondary": "#5f5e5e",
          "on-error-container": "#93000a",
          "primary-fixed": "#f4e0c0",
          "on-tertiary-container": "#92030f",
          "secondary-fixed-dim": "#c8c6c5",
          "primary": "#6b5d43"
      },
      "borderRadius": {
          "DEFAULT": "0.25rem",
          "lg": "0.5rem",
          "xl": "0.75rem",
          "full": "9999px"
      },
      "spacing": {
          "gutter-column": "1.5rem",
          "section-padding": "3rem",
          "margin-page": "2rem",
          "rule-thick": "4px",
          "rule-thin": "1px"
      },
      "fontFamily": {
          "headline-lg": ["Newsreader"],
          "label-sm": ["Work Sans"],
          "headline-md": ["Newsreader"],
          "meta-info": ["Work Sans"],
          "body-lg": ["Newsreader"],
          "headline-xl": ["Newsreader"],
          "body-md": ["Newsreader"]
      },
      "fontSize": {
          "headline-lg": ["42px", {"lineHeight": "1.2", "letterSpacing": "-0.01em", "fontWeight": "700"}],
          "label-sm": ["12px", {"lineHeight": "1", "letterSpacing": "0.1em", "fontWeight": "600"}],
          "headline-md": ["24px", {"lineHeight": "1.3", "fontWeight": "700"}],
          "meta-info": ["11px", {"lineHeight": "1.4", "fontWeight": "400"}],
          "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}],
          "headline-xl": ["72px", {"lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "800"}],
          "body-md": ["16px", {"lineHeight": "1.5", "fontWeight": "400"}]
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ],
}
