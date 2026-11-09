# Repository Guidelines

## Project Structure & Module Organization

This repository contains the BioMEMS Lab website, built with Jekyll and a custom theme. Page content lives in `research/`, `team/`, `publications/`, `news/`, `join/`, and `contact/`. Shared Liquid templates are in `_layouts/` and `_includes/`. Member profiles belong in `_members/`; dated news items belong in `_posts/`.

Use `_data/` for structured content, `images/` for photos and illustrations, `assets/css/main.scss` for styles, and `assets/js/site.js` for browser behavior. `_config.yaml` controls navigation and site metadata. `_cite/` generates citations; `.github/workflows/` handles citation updates, previews, and deployment. `_site/` is generated output.

## Build, Test, and Development Commands

Run commands from the repository root. CI uses Ruby 3.3 and Python 3.11.

- `bundle install`: install Jekyll and Ruby dependencies.
- `bundle exec jekyll serve`: build and preview locally at `http://localhost:4000`.
- `bundle exec jekyll build`: validate site generation and write `_site/`.
- `python -m pip install -r _cite/requirements.txt`: install citation dependencies.
- `python _cite/cite.py`: regenerate `_data/citations.yaml` from citation sources; may access external services.

## Coding Style & Naming Conventions

Follow surrounding formatting: two-space indentation in HTML/Liquid, SCSS, JavaScript, and nested YAML mappings; four spaces in Python. Keep JavaScript dependency-free. No formatter or linter is configured.

Use lowercase, hyphenated filenames, such as `_members/first-last.md` and `_posts/YYYY-MM-DD-short-title.md`. Preserve YAML front matter and existing permalink redirects. Use Liquid's `relative_url` filter for internal site paths to support deployment under a subdirectory.

## Testing Guidelines

There is no automated test suite or coverage threshold. Run the Jekyll build and inspect affected pages locally and in the pull request preview. For interface changes, check mobile navigation, light/dark themes, publication filters, and links. Check new images and member/news pages for correct rendering.

## Commit & Pull Request Guidelines

History uses short, imperative commit subjects, such as `Replace template theme with a custom Jekyll theme` and `Update citations`; no prefix convention is established. Keep commits focused.

Describe the change, affected pages, and validation in each PR. Link related issues when applicable and include screenshots for visual changes. Review the automatically posted preview before merging.

## Content & Configuration

Add publications to `_data/sources.yaml`; regenerate citations instead of editing generated entries directly. Set departed members to `role: alumni` rather than deleting profiles. Keep credentials in environment variables or GitHub secrets; never commit API keys or `.env` files.

## TRACKING UPDATES

The file last_updated.txt indicates the date of the last website update.

## FINDING CHANGES

If it has been more than 3 days since the last update (based on last_updated.txt), check if there are new publications on Google Scholar: https://scholar.google.com/citations?user=ff8dRzkAAAAJ&hl=en

Ask for confirmation about adding new publications to the website.

Follow the current formatting guidelines.
