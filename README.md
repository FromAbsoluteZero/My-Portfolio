# Shanmukh Behara: portfolio site

A single-page portfolio in plain HTML, CSS and a little JavaScript. There is no build step, no framework and nothing to install.

## Files

| Path | What it holds |
|---|---|
| `index.html` | The whole page. Each section is a `<section>` with its own `id`, in the order it appears. |
| `assets/style.css` | The self-hosted font faces, then design tokens for light and dark, then the components and print rules. |
| `assets/site.js` | The auto, light and dark switch, the hero artwork, the chapter map, the email copy button and the nav highlight. The page reads correctly without it. |
| `assets/fonts/` | Latin subsets of Literata and IBM Plex Mono, with their SIL Open Font License files. |
| `assets/img/` | Two figures from *From Absolute Zero*. |
| `assets/og-card.png` | The 1200 × 630 image shown when the site is shared on LinkedIn and elsewhere. |
| `assets/favicon.svg`, `assets/apple-touch-icon.png` | Browser and home-screen icons. |
| `assets/Shanmukh-Behara-Resume.pdf` | The one-page résumé linked from the hero and Contact. It is text-based, so applicant tracking systems can read it. |
| `resume/resume.html`, `resume/resume.css` | The source of that PDF and its stylesheet. |

## Run it locally

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000>. Opening `index.html` straight from disk also works, although the browser then blocks the font preload.

## Publish it

**GitHub Pages.** In the repository settings, open Pages, choose "Deploy from a branch", then pick `main` and `/ (root)`. The site appears at `https://fromabsolutezero.github.io/My-Portfolio/`. On a free GitHub plan, Pages needs the repository to be public.

**Custom domain.** Add a file named `CNAME` containing the domain, and point the domain's DNS at GitHub Pages. Then change the four absolute addresses in the `<head>` of `index.html` (`canonical`, `og:url`, `og:image` and the JSON-LD `@id` values) to the new domain.

## Edit it

- **Text.** Edit `index.html` directly.
- **Colours and type.** Change the custom properties at the top of `assets/style.css`. The dark values appear twice on purpose: once for the device setting and once for the manual switch.
- **Chapter map.** Each square is a `<button>` whose `data-` attributes hold the chapter's title, code blocks, figures and interview-bank count, with a `data-kind` of `nb`, `code` or `none`. The ordered list below it holds the same titles as text.
- **Selected work cards.** Each card is a `<li class="card">` with two colours in its `style` attribute, `--c1` and `--c2`, and a link to a case study `id`.
- **Share image.** If the hero line changes, regenerate `assets/og-card.png` to match.
- **Résumé.** Edit `resume/resume.html`, serve the folder over http, open `/resume/resume.html` in Chrome and print it to PDF on Letter paper with margins set to Default and background graphics on. Save it over `assets/Shanmukh-Behara-Resume.pdf`, and keep it to one page.

## Checks run before publishing

- axe-core accessibility rules (WCAG 2.2 AA and best practice) in light, dark and phone renders: no violations.
- html-validate with its recommended rules: no problems.
- No horizontal scrolling at widths from 320 to 1600 pixels.
- No console errors when served over http.

## Credits

The layout takes its pattern from tedt.org: a dark navbar with a colour-scheme switch, a full-width hero and a profile footer. The text, artwork and code are original. The fonts are Literata and IBM Plex Mono, under the SIL Open Font License. The two figures are from *From Absolute Zero* and are all rights reserved by the author.
