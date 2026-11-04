---
title: Publications
nav:
  order: 2
  tooltip: Journal and conference papers
---

# {% include icon.html icon="fa-solid fa-book-open" %}Publications

Journal articles, conference papers, preprints, book chapters and patents from the lab.
This list was last updated from [Google Scholar](https://scholar.google.ca/citations?user=ff8dRzkAAAAJ) in November 2026.

{% include search-box.html %}

{% include search-info.html %}

{% include section.html %}

## Journal articles

{% include list.html data="citations" component="citation" filter="type == 'journal'" %}

{% include section.html %}

## Conference papers

{% include list.html data="citations" component="citation" filter="type == 'conference'" %}

{% include section.html %}

## Preprints

{% include list.html data="citations" component="citation" filter="type == 'preprint'" %}

{% include section.html %}

## Books, chapters, patents and theses

{% include list.html data="citations" component="citation" filter="type == 'chapter' or type == 'patent' or type == 'thesis'" %}
