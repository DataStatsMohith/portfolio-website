---
layout: page
title: Blog
---

# Blog

Welcome to my blog! Here, I share insights and tutorials on **Data Science**, **Machine Learning**, and **Analytics**.

## Recent Posts
<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
      <small>{{ post.date | date: "%B %d, %Y" }}</small>
    </li>
  {% endfor %}
</ul>
