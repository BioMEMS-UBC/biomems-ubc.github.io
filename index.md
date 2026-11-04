---
redirect_from:
  - /partnerships/
  - /profile/
---

# Bio-Medical Micro Devices Laboratory

{% capture lead %}
We build microfluidic and microfabricated devices that bring engineering control to biology.
Our tools let researchers grow, image and test 3-D tumour models under realistic conditions, so that early drug screening better predicts what happens in the body.
{% endcapture %}
<div class="lead">{{ lead | markdownify }}</div>

{%
  include button.html
  link="research"
  text="Our research"
  icon="fa-solid fa-arrow-right"
  flip=true
%}
{%
  include button.html
  link="join"
  text="Join the lab"
  icon="fa-solid fa-user-plus"
%}

{% include section.html %}

## Research areas

{% include list.html data="research" component="card" style="small" %}

{% include section.html %}

{% capture text %}
BioMEMS research at UBC miniaturizes systems and devices, such as implants and laboratory instruments.
Students in the lab work across disciplines, combining electrical engineering, materials science, chemistry and cell biology.
The lab is part of the Department of Electrical and Computer Engineering and is located in the Advanced Materials and Process Engineering Laboratory (AMPEL) on UBC's Vancouver campus.

{%
  include button.html
  link="team"
  text="Meet the team"
  icon="fa-solid fa-arrow-right"
  flip=true
  style="bare"
%}
{% endcapture %}

{%
  include feature.html
  image="images/lab/bench.jpg"
  link="team"
  title="Engineering meets cell biology"
  text=text
%}

{% include section.html %}

## News

{% for post in site.posts limit: 3 %}
  {% include post-excerpt.html lookup=post.slug %}
{% endfor %}

{%
  include button.html
  link="news"
  text="All news"
  icon="fa-solid fa-arrow-right"
  flip=true
  style="bare"
%}

{% include section.html %}

## Partners and funding {#partners}

<div class="partners" markdown="1">
<div markdown="1">
### Academic partners

[BC Cancer Research Centre](https://www.bccrc.ca/)
</div>
<div markdown="1">
### Industry partners

[Scienion AG](https://www.scienion.com/)
</div>
<div markdown="1">
### Funding

[NSERC](https://www.nserc-crsng.gc.ca/),
[CIHR](https://cihr-irsc.gc.ca/),
[Canada Foundation for Innovation](https://www.innovation.ca/),
[CMC Microsystems](https://www.cmc.ca/)
</div>
</div>
