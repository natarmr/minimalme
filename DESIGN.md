---
name: The Editorial Chronicle
colors:
  surface: '#fbf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fbf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae8e7'
  surface-container-highest: '#e4e2e1'
  on-surface: '#1b1c1c'
  on-surface-variant: '#4c463d'
  inverse-surface: '#303030'
  inverse-on-surface: '#f3f0f0'
  outline: '#7d766c'
  outline-variant: '#cec5b9'
  surface-tint: '#6b5d43'
  primary: '#6b5d43'
  on-primary: '#ffffff'
  primary-container: '#c5b395'
  on-primary-container: '#52452e'
  inverse-primary: '#d7c4a5'
  secondary: '#5f5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e2dfde'
  on-secondary-container: '#636262'
  tertiary: '#b52424'
  on-tertiary: '#ffffff'
  tertiary-container: '#ff9a90'
  on-tertiary-container: '#92030f'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#f4e0c0'
  primary-fixed-dim: '#d7c4a5'
  on-primary-fixed: '#241a06'
  on-primary-fixed-variant: '#52452e'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474746'
  tertiary-fixed: '#ffdad6'
  tertiary-fixed-dim: '#ffb4ac'
  on-tertiary-fixed: '#410003'
  on-tertiary-fixed-variant: '#92030f'
  background: '#fbf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e1'
typography:
  headline-xl:
    fontFamily: Newsreader
    fontSize: 72px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Newsreader
    fontSize: 42px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Newsreader
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Newsreader
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Newsreader
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-sm:
    fontFamily: Work Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.1em
  meta-info:
    fontFamily: Work Sans
    fontSize: 11px
    fontWeight: '400'
    lineHeight: '1.4'
spacing:
  margin-page: 2rem
  gutter-column: 1.5rem
  rule-thin: 1px
  rule-thick: 4px
  section-padding: 3rem
---

## Brand & Style

This design system is an exercise in **Intellectual Brutalism** mixed with **Tactile Retro** sensibilities. It is designed to evoke the authority of a 1920s broadsheet newspaper while maintaining the functional efficiency of a modern technical portfolio. The target audience includes tech recruiters, engineering managers, and design purists who appreciate narrative-driven interfaces.

The aesthetic relies on high-density information layouts, physical metaphors like "breaking news" tickers, and a strict adherence to a multi-column print grid. It rejects the fluidity of modern "app-like" interfaces in favor of a structured, literary experience that demands attention and rewards deep reading.

## Colors

The palette is anchored by a weathered parchment background (#c5b395) that provides a low-strain, tactile base. Typography is rendered in near-blacks and deep greys to simulate ink-on-paper, avoiding the harshness of pure #000000. 

High-contrast accents are used sparingly for emphasis:
- **Tertiary (Oxblood Red):** Used for urgent notifications, "Breaking News" tags, and critical calls to action.
- **Accent (Newsprint Yellow):** Used for "highlighted" text or background fills behind specific labels to simulate a physical highlighter pen.
- **Secondary (Ink Black):** Used for heavy structural elements like thick rules and header backgrounds.

## Typography

This design system uses a strictly editorial typographic scale. **Newsreader** serves as the primary serif for both headlines and body text, providing the "broadsheet" authority required. Headlines should use tight tracking and high weights to mimic old-school printing presses.

**Work Sans** is introduced as a functional companion for meta-information, labels, and technical data points, ensuring that while the look is retro, the readability remains modern and accessible. Use "Drop Caps" (4 lines high) for the start of major articles to reinforce the newspaper aesthetic.

## Layout & Spacing

The layout follows a **12-column fixed grid** with a maximum container width of 1280px. Content is organized into distinct vertical columns reminiscent of traditional newsprint. 

Spacing is governed by horizontal rules rather than white space. Use thin (1px) rules to separate items within a list and thick (4px) rules to separate major page sections. Margins are generous at the page edge but tight between columns to maximize information density. "Breaking News" tickers should span the full width of the grid, breaking the column flow to create visual tension.

## Elevation & Depth

This system rejects shadows and blurs entirely. Hierarchy is achieved through **Bold Borders** and **Tonal Layering**. 

Elements do not "float" above the page; they are "printed" onto it. To create depth, use inset borders or secondary background colors (like a slightly darker tan or a full black block with white text). High-contrast blocks (black backgrounds with parchment text) signify the highest level of importance, such as "Featured" sections or contact footers.

## Shapes

The design system utilizes a **Sharp (0px)** roundedness strategy. Every element—buttons, cards, input fields, and image containers—must have perfectly square corners. This reinforces the "cut and paste" layout style of traditional print media. Soft corners are inconsistent with the technical and archival nature of the design.

## Components

### Buttons & Inputs
Buttons should be styled as high-contrast blocks. Use a solid black background with parchment text for primary actions. On hover, the button should invert (parchment background, black text/border). Input fields are simple 1px black underlines or 1px black boxes with no rounded corners.

### Cards & 'Featured Developer' Blocks
Featured cards must include a monochrome or grainy greyscale filter on all images (10% noise overlay). The card should be enclosed in a 1px or 2px black border, often with a "caption" style label underneath in italics.

### Breaking News Ticker
A full-width horizontal bar with a solid black background. Text should be white or yellow, scrolling slowly from right to left, utilizing the `label-sm` typographic style.

### Rules & Dividers
Dividers are a core component. Use a "Double Rule" (one thick line above one thin line) for the primary site header and "Single Thin Rules" for separating list items in the "Technical Arsenal" or "Experience" sections.

### Chips & Tags
Style tags as simple italicized text strings separated by bullets (•) or pipes (|), rather than contained "pill" shapes, to maintain the literary feel.