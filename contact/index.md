---
title: Contact
nav:
  order: 6
  tooltip: Email, address, and location
---

# {% include icon.html icon="fa-regular fa-envelope" %}Contact

{%
  include button.html
  type="email"
  text="kcheung@ece.ubc.ca"
  link="kcheung@ece.ubc.ca"
%}
{%
  include button.html
  type="phone"
  text="604 827 4114"
  link="+1-604-827-4114"
%}
{%
  include button.html
  type="address"
  text="Map"
  tooltip="Our location on Google Maps"
  link="https://www.google.com/maps/search/?api=1&query=2355+East+Mall,+Vancouver,+BC+V6T+1Z4"
%}

{% include section.html %}

{% capture col1 %}
<div class="address" markdown="1">
**Prof. Karen Cheung**  
Department of Electrical and Computer Engineering  
University of British Columbia  
146A Brimacombe Building (AMPEL)  
2355 East Mall  
Vancouver, BC V6T 1Z4  
Canada
</div>
{% endcapture %}

{% capture col2 %}
**Visiting the lab?**
Contact a member of our [team](team) to arrange a visit.
Visitor parking is available on campus; see [UBC Parking](https://parking.ubc.ca/).
{% endcapture %}

{% include cols.html col1=col1 col2=col2 %}
