# BioMEMS Lab website

Website of the Bio-Medical Micro Devices Laboratory (Prof. Karen Cheung, UBC Electrical and Computer Engineering).

Visit **[gsathish.github.io/biomems-lab](https://gsathish.github.io/biomems-lab)** 🚀

Built with the [Lab Website Template](https://greene-lab.gitbook.io/lab-website-template-docs) (Jekyll, v1.4.0) and deployed to GitHub Pages by GitHub Actions.
Content was migrated in November 2026 from the old WordPress site at biomems.ece.ubc.ca.

## How to edit

Every change can be made in GitHub's web editor: open a file, click the pencil icon, edit, and commit.
The site rebuilds automatically in about two minutes.
For changes you want someone to check first, commit to a new branch and open a pull request; a preview link is posted on the pull request.

| To change | Edit |
|---|---|
| A person | `_members/<name>.md` (photo in `images/team/`) |
| Someone who left | set `role: alumni` in their file; don't delete it |
| Publications | `_data/sources.yaml` |
| News | add `_posts/YYYY-MM-DD-short-title.md` |
| Research areas | `_data/research.yaml` (images in `images/research/`) |
| Page text | `index.md`, `research/`, `team/`, `join/`, `contact/` |
| Site title, footer links | `_config.yaml` |
| Colours and fonts | `_styles/-theme.scss` |

### Add a person

Create `_members/first-last.md`:

```yaml
---
name: First Last
image: images/team/first-last.jpg
role: phd            # principal-investigator, postdoc, phd, masters, undergrad, alumni
links:
  email: first.last@ubc.ca
---

One or two sentences about their research.
```

### Add a publication

Add an entry at the top of `_data/sources.yaml`.
With a DOI, title, authors, journal and date are filled in automatically:

```yaml
- id: doi:10.1039/D4LC00123A
  type: journal      # or conference
```

Without a DOI, write the fields yourself:

```yaml
- type: conference
  title: Paper title
  authors:
    - First Author
    - Karen C. Cheung
  publisher: Proceedings of MicroTAS 2026, Seoul, Korea
  date: 2026-10-01
```

### Add a news item

Create `_posts/2026-11-04-short-title.md`:

```yaml
---
title: Short headline
image: images/news/short-title.jpg   # optional
tags: [award]
---

One or two paragraphs.
```

## Known content gaps from the old site

- The team list was last updated in 2021, and publications stop in 2017.
- The Join us page is draft text that Karen should rewrite.
- Seven people have no photo and use a placeholder.
- One SPIE Photonics West paper has no year in the old list.
