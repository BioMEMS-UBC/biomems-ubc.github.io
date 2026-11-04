---
title: Research
nav:
  order: 1
  tooltip: Our research areas
redirect_from:
  - /projects/
---

# {% include icon.html icon="fa-solid fa-microscope" %}Research

Three-dimensional cell cultures reproduce the natural growth environment of cells far better than flat monolayers.
Our work combines microfluidics, biomaterials, optics and sensing to build and study these models under controlled conditions.

{% for area in site.data.research %}
- [{{ area.title }}](#{{ area.slug }})
{% endfor %}

{% for area in site.data.research %}
{% include section.html %}

<div class="research-area" markdown="1">

## {{ area.title }} {#{{ area.slug }}}

{{ area.summary }}

{% if area.image %}
{% include figure.html image=area.image caption=area.caption width="100%" %}
{% endif %}

{% for m in area.media %}
{% if m.kind == "video" %}
{% include youtube.html id=m.youtube caption=m.caption %}
{% elsif m.kind == "image" %}
{% include figure.html image=m.src caption=m.caption width="100%" %}
{% endif %}
{% endfor %}

</div>
{% endfor %}

{% include section.html %}

More videos are on our [YouTube playlist](https://www.youtube.com/playlist?list=PLFpEETyPCgTSJdhBpAsKbH3AR96cyLS7O).
