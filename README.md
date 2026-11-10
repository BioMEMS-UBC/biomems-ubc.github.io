# BioMEMS Lab website

Website of the Bio-Medical Micro Devices Laboratory (Prof. Karen Cheung, UBC Electrical and Computer Engineering and School of Biomedical Engineering).

Visit **[biomems-ubc.github.io](https://biomems-ubc.github.io)** 🚀

Built with Jekyll and a custom theme (IBM Plex type, UBC colours), deployed to GitHub Pages by GitHub Actions.
The automatic citation and preview workflows come from the [Lab Website Template](https://github.com/greenelab/lab-website-template).
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
| Project blurbs and links | `_data/research.yaml` |
| Full project descriptions | `research/<project-slug>/index.md` |
| Project illustrations and captions | `images/research/*-concept.jpg` and `_data/research.yaml` (generation prompts in `_artwork/`) |
| Publications selected for each project | `_data/project-publications.yaml` (references existing citation IDs or titles) |
| Publication topics | `_data/topics.yml` (keywords matched against titles) |
| Page text | `_layouts/home.html`, `research/`, `team/`, `join/`, `contact/` |
| Site title, navigation, contact details | `_config.yaml` |
| Colours, fonts and layout | `assets/css/main.scss` |
| Interactive behaviour | `assets/js/site.js` |

### Add a person

Create `_members/first-last.md`:

```yaml
---
name: First Last
image: images/team/first-last.jpg
role: phd            # principal-investigator, research-facilitator, research-associate, postdoc, phd, masters, undergrad, staff, alumni
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

`type` is one of `journal`, `conference`, `preprint`, `chapter`, `patent` or `thesis`.
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

## Preview locally

```
bundle install
bundle exec jekyll serve
```

## GitHub Pages deployment

The production repository is `BioMEMS-UBC/biomems-ubc.github.io`, which serves
`https://biomems-ubc.github.io/` without a repository subpath.

In **Settings > Pages > Build and deployment**, set **Source** to **GitHub Actions**.
The built-in branch Jekyll builder uses Jekyll 3 and cannot build this Jekyll 4 site.
If the `github-pages` environment restricts deployment branches, allow `main`.

Push to `main` or manually run **build-site** from the Actions tab. The workflow
installs the locked Ruby dependencies, builds the site, stores generated files on
`gh-pages`, and explicitly uploads and deploys that branch using the Pages actions.
The branch also retains PR previews; preview updates republish the combined site.
Citation updates run separately so an external citation service failure does not
block production deployment.

## Known content gaps from the old site

- The team list was last updated in 2021, and publications stop in 2017.
- The Join us page is draft text that Karen should rewrite.
- Seven people have no photo and use a placeholder.
