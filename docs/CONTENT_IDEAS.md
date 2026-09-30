# What to put on the site

## What this list is based on

- **Your book's repository.** Everything below comes from `FromAbsoluteZero/CodeBase`, the only source of your work that I could read.
- **Not your past conversations.** I cannot see earlier chats with Claude. Only the current session was available to me. Nothing here is drawn from them.
- **tedt.org, from the files you uploaded.** The session's network policy blocked the live site, so I worked from its saved page source. I took the layout pattern only. None of its text, images or scripts is used here.

The section at the end says how to bring the conversations in.

## Already on the site

| Section | Source |
|---|---|
| About, Work | `docs/AUTHOR_BIO.md` |
| Book facts | `docs/BOOK_METADATA.md`, `README.md` |
| Chapter map | `docs/CHAPTER_MAP.md`, cross-checked against `notebooks/` |
| Portfolio and mini projects | `bridges/README.md`, `practice/README.md`, and six files under `code/`, `scripts/`, `practice/` and `tests/` |
| Interests | The chapters and roles above |

## Add next, from the repository

1. **Three original projects.** Your own Appendix B says a portfolio built on the book's datasets reads as a finished tutorial. It recommends an analysis, a model evaluated honestly, and something in production, on data nobody else has picked. `reference/portfolio/project-ideas.md` has fifteen framings. This is the biggest gap on the site.
2. **Case studies from Southern California Edison.** The pipeline rebuilt as an Azure-native service, the twenty-two validation checks, and the glossary work are each a short write-up. Use `reference/templates/README_TEMPLATE.md`: the finding first, then the decision it informs. Check with your employer before publishing anything beyond the public bio.
3. **Uber and Swiggy stories.** One page each on the fraud views and the demand forecasts, with only the numbers you are free to share.
4. **A page for the book.** The table of contents, a sample chapter, the cover with its credit, the errata history, and a reading path by audience from `docs/HOW_TO_USE.md`. Add reviews once you have them.
5. **Notes.** Short posts, each built on something the repository already proves:
   - A CNN that scores below logistic regression, and still wins after a one-pixel shift (Figure 32.2).
   - The tied-scores bug: `argsort` broke ties differently on different machines and changed printed output (`tests/test_stable_sort_ties.py`).
   - Why every program in the book prints its real output, including the ones that undercut the chapter.
   - Moving the question bank out of print and into the repository (`practice/CHANGELOG.md`).
   - Making figures survive black-ink printing (`code/_greyscale_safe.py`).
6. **Free resources.** Link the cheat sheets, the AI-assistant prompt library and the CC0 templates in `reference/`. They are the most reusable things you have published.
7. **Practice.** A page for the 227 questions and 13 mock interviews, with the tracker and a sample exercise.
8. **A press kit.** Short and long bio, headshot, book facts, cover, and the ISBN.
9. **A uses page.** Your toolchain, taken from `requirements.txt` and your bio.

## Borrowed from how tedt.org is organised

That site is a blog with a page for each topic. The same shape suits you.

- **Notes, with categories.** Its carousel is a list of blog categories. Yours could be Data governance, Machine learning, Reproducibility and The book. Add a Jekyll or similar layer on GitHub Pages when you have four or five posts.
- **A career page with one anchor per role.** Its Profile menu lists each job and project. Yours could hold Uber, Swiggy and each Southern California Edison project.
- **Tools.** Small interactive pages that demonstrate an idea from the book: attention scaling, choosing a classification threshold, seeing leakage inflate a score.
- **Presentations.** Slides from any talks, workshops or internal sessions.
- **A reading list.** The papers and books behind each part of the book.

## I need from you

- Email address and LinkedIn URL, for the contact section.
- A headshot, if you want one.
- Start and end years for Uber, Swiggy and Southern California Edison.
- Your real future plans, to replace the two suggested ones.
- Any books beyond the first, finished or planned.
- Interests outside work.
- Any projects that live outside the book's repository.
- The domain you plan to use.

## Bringing in the conversations

I cannot read earlier conversations. Three ways to get them in:

1. **Export your history.** claude.ai has a data export in its settings. Put the file where a session can read it, and ask for themes, unfinished ideas, and projects you started.
2. **Paste the highlights.** A list of topics you asked about, ideas you shelved, and things you built is enough.
3. **Fill in these four lists** and I will place them on the site:
   - Interests I have talked about
   - Projects I have started or finished
   - Ideas I shelved
   - Books or courses I want to write
