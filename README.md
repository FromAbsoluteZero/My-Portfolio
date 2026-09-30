# Shanmukh Behara: portfolio site

A single-page portfolio in plain HTML and CSS. No build step, no framework, no dependencies to install.

It covers who I am, my work, the projects I would show, my book *From Absolute Zero*, small tools, what comes next, and what I keep coming back to.

## Files

| Path | What it holds |
|---|---|
| `index.html` | The whole page. Each section is one `<section>` with its own `id`. |
| `assets/style.css` | Design tokens at the top (light and dark), then the components. |
| `assets/site.js` | The auto, light and dark switch, the card rail, the hero artwork, the chapter map readout and the nav highlight. The page reads correctly without it, apart from the hero artwork. |
| `assets/img/` | Two book figures, reduced to 1500 px wide. |
| `assets/favicon.svg` | The origin point and a curve. |
| `docs/CONTENT_IDEAS.md` | What to add next, and what I still need from you. |

## Design

The layout follows the pattern of [tedt.org](https://tedt.org/): a dark navbar with a colour-scheme switch, a full-width hero, a carousel of topic cards, and a profile card in the footer. Everything else is original. The text, the artwork and the code are new. The hero is drawn on a canvas from a seeded random generator, so it looks the same on every load. The card illustrations are inline SVG. No image, logo, text or tracking script was copied from that site.

## Run it locally

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000>. Opening `index.html` straight from disk also works.

The page loads two typefaces, Literata and IBM Plex Mono, from Google Fonts. Offline it falls back to Georgia and the system monospace font.

## Publish it

**GitHub Pages.** In the repository settings, open Pages, choose "Deploy from a branch", then pick `main` and `/ (root)`. The site appears at `https://<owner>.github.io/<repo>/`. All paths are relative, so it works under that sub-path.

**Custom domain.** Add a file named `CNAME` containing the domain, then point the domain's DNS at GitHub Pages as described in GitHub's documentation.

## Edit it

- **Copy.** Change the text in `index.html`. Sections are in the order they appear on the page.
- **Colours and type.** Change the custom properties at the top of `assets/style.css`. The dark values appear twice on purpose: once for the system setting and once for the manual toggle.
- **Chapter map.** Each square is a `<button>` with `data-` attributes for the title, code blocks, figures and practice questions, and a `data-kind` of `nb`, `code` or `none`. Edit them by hand.
- **Cards in the Explore rail.** Each card is a `<li class="card">` with two colours set in its `style` attribute, `--c1` and `--c2`. Its link must match a section `id`.
- **Hero artwork.** The `drawSky` function in `assets/site.js` sets where the origin sits, how many points there are and how far they spread.
- **Nav.** The links at the top must match the section `id`s.

## Open items

Search `index.html` for `TODO` and `DRAFT`.

- **Contact.** LinkedIn, Medium and GitHub are linked. Your email is commented out and your phone number is not on the page, on purpose.
- **Employer review.** The Experience section repeats the results from your CV, such as percentages and dollar savings. Check them against your employer's policy before you publish. Internal project names and architecture-review findings were left out.
- **Future projects.** The first item is documented in the book's repository. The other two are suggestions. Replace them with your real plans.
- **Cover.** The book's cover image is not on the page. If you add it, keep the credit the artwork requires: NASA, ESA, CSA, STScI, A. Pagan (STScI), CC BY 4.0.

## Where the facts come from

Dates, roles and results come from your CV, which is not stored in this repository. Every claim about the book and its code was taken from the companion repository, [FromAbsoluteZero/CodeBase](https://github.com/FromAbsoluteZero/CodeBase): `docs/AUTHOR_BIO.md`, `docs/BOOK_METADATA.md`, `docs/CHAPTER_MAP.md`, `bridges/README.md` and `practice/README.md`. Counts were checked against the files themselves, for example 34 chapters with code and 28 notebooks.

## Rights

The text on the site is the author's. The two figures are from *From Absolute Zero*, whose text and figures are all rights reserved by the author.
