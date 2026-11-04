---
title: Team
nav:
  order: 3
  tooltip: Current members and alumni
---

# {% include icon.html icon="fa-solid fa-users" %}Team

{% include list.html data="members" component="portrait" filter="role == 'principal-investigator'" %}

{% include section.html %}

## Current members

{% include list.html data="members" component="portrait" filter="role == 'postdoc'" %}
{% include list.html data="members" component="portrait" filter="role == 'phd'" %}
{% include list.html data="members" component="portrait" filter="role == 'masters'" %}
{% include list.html data="members" component="portrait" filter="role == 'undergrad'" %}

{% include section.html %}

## Alumni

{% include list.html data="members" component="portrait" filter="role == 'alumni'" style="small" %}

{% include section.html %}

{% include figure.html image="images/lab/karen-jonas.jpg" caption="Karen Cheung and Jonas Flückiger in the lab." width="100%" %}
