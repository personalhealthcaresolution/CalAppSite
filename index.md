---
layout: home
permalink: /
image:
    feature: wood-texture-1600x800.jpg

scrollHighlight: true

posts:
    - image: post-image-1.png
      title: Built for Jekyll 3
      excerpt: Takes advantage of native Sass support and data files to make customizing your site easier.
    - image: post-image-2.png
      title: Content First
      excerpt: Designed to put the focus on you and your writing. Headers, navigation, sidebars, and footers have been purposely deemphasized.
    - image: post-image-3.png
      title: Customizable
      excerpt: Packed with layouts and modules. Include Disqus comments, social sharing buttons, and table of contents on one or all pages.
---

<div class="tiles">

    {% for post in page.posts %}

        <div class="tile">
            {% if post.image %}
                <img class="post-image" src="{{site.url}}/images/{{post.image}}" alt="images" />
            {% endif %}

            {% if post.title %}
                <h2 class="post-title">Built for Jekyll 3</h2>
            {% endif %}

            {% if post.excerpt %}
                <p class="post-excerpt">Takes advantage of native Sass support and data files to make customizing your site easier.</p>
            {% endif %}
        </div><!-- /.tile -->

    {% endfor %}

</div><!-- /.tiles -->