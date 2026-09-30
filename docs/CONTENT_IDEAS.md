# What to put on the site

## What this list is based on

- **Your book's repository and your CV.** Everything below comes from `FromAbsoluteZero/CodeBase` and from `Shanmukh_Behara_CV_Updated_v3.docx`, the only sources of your work that I could read.
- **Not your past conversations.** I cannot see earlier chats with Claude. Only the current session was available to me. Nothing here is drawn from them.
- **tedt.org, from the files you uploaded.** The session's network policy blocked the live site, so I worked from its saved page source. I took the layout pattern only. None of its text, images or scripts is used here.

The section at the end says how to bring the conversations in.

## Already on the site

| Section | Source |
|---|---|
| About, Work | Your CV, and `docs/AUTHOR_BIO.md` in the book repository |
| Book facts | `docs/BOOK_METADATA.md`, `README.md` |
| Chapter map | `docs/CHAPTER_MAP.md`, cross-checked against `notebooks/` |
| Portfolio | Your CV, your GaP-Solution repository for the Southern California Edison pipeline, your final internship deck and the Taksy Kraft pitch deck |
| Interests | The chapters and roles above |

## Add next, from the repository

1. **Three original projects.** Your own Appendix B says a portfolio built on the book's datasets reads as a finished tutorial. It recommends an analysis, a model evaluated honestly, and something in production, on data nobody else has picked. `reference/portfolio/project-ideas.md` has fifteen framings. This is the biggest gap on the site.
2. **More Southern California Edison case studies.** The pipeline replacement is now on the site. The twenty-two validation checks and the glossary work each deserve their own short write-up. Use `reference/templates/README_TEMPLATE.md`: the finding first, then the decision it informs. Check with your employer before publishing anything beyond what your CV already says.
3. **Fuller Grocery Outlet, Uber and Swiggy stories.** The Swiggy cloud kitchen project is now a full case study. The Grocery Outlet entry still rests on lines from your CV. Add the fraud views, the demand forecasts and the refund tool the same way, with only the numbers you are free to share.
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

- **The test count for the Southern California Edison pipeline.** Your CV says a 28-test suite. The GaP-Solution README says 354 tests. The site uses 354, from the repository, and no longer shows 28. Tell me if 28 belongs to a different suite, such as the Azure-native rebuild, and I will show both correctly.
- **Future projects.** The section now holds one suggested idea. Send your real plans and I will replace it.
- **Your JDIQ paper.** It is on the site as a general description, written from your working-state file. It leaves out the manuscript title, the manuscript number and the review history, and it reports no results because none exist. The entry is wrapped in a HOLD comment in `index.html`. Decide whether a page in your name should describe the manuscript while it is under review. Add the title and a link after acceptance or a preprint. Tell me if the paper grew out of your Southern California Edison validation work, and I will connect the two.
- **Summaries of your two articles.** I have their titles and links only, because I could not open Medium or Towards AI, and I do not have their text. If the Medium article is the long version of one of your LinkedIn posts, tell me which and I will connect them. Otherwise paste the text or export each page as a PDF.
- Your email address, if you want it public. LinkedIn and Medium are already linked.
- Any further LinkedIn posts you want covered. Three posts are in the Writing section and one, on volunteering with Young Professionals in Energy LA, is in About. The volunteering post came without a link.
- A headshot, if you want one.
- A decision on how much of the CV to publish. The Experience section repeats its results. Trim any your employer would not want public.
- **Taksy Kraft dates.** Your title is on the site as business strategist, on the founding team. The start and end dates are still missing. Add anything you did there that you can share, and I will add a line.
- **SOS system results.** The entry says a prototype was built. Send anything you can say about how it was tested and what happened, and I will add it. Also send the school and year.
- The start and expected end dates of your MBA, which are blank in the CV, if you want them shown.
- **Numbers for the cloud kitchen project**, only what you can share: the change in long-distance orders, the order lift in the test group, how many kitchens opened, and the size and length of the A/B test. The case study has none yet. A redacted My Maps screenshot would let me replace the schematic with the real map.
- **Grocery Outlet results.** The scorecard case study is written from your final internship deck. It has no results, because the deck has none. Send any outcome you can share, such as what was adopted. The internship now starts in June 2022, as the deck says.
- Your real future plans, to replace the two suggested ones.
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
