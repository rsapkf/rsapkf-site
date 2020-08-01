---
title: "Targeting External Links using SCSS"
date: "2020-07-21"
lastupdated: "2020-07-25"
spoiler: ""
tags: ["css", "scss", "programming"]
type: "article"
---

Here is part of the snippet I use to target external links on this site:

Check out the source [here](https://github.com/rsapkf/rsapkf.xyz/blob/master/src/styles/index.scss#L46) (feel free to copy the entire thing).

```scss
a {
  // ... link styles

  // target external links
  // if you want to indicate websites with specific icons, make sure you add them here
  // if using FontAwesome icons, font-family and font-weight need to be set based on whether you are using Brand or Regular icons
  // https://fontawesome.com/v5.0.13/how-to-use/on-the-web/advanced/css-pseudo-elements
  &:not([href*="rsapkf.xyz"]):not([href^="/"]):not([href^="#"]):not([href*="mozilla.org"]):not([href*="github.com"])::after {
    content: "\f35d";
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
  }

  &::after {
    font-family: "Font Awesome 5 Brands";
    font-weight: 400;
    color: rgb(85, 78, 78);
    font-size: 0.7rem;
    padding: 0.15rem;
    position: relative;
    bottom: 0.2rem;
  }

  // now, add individual icons from FontAwesome (https://fontawesome.com/cheatsheet)
  &[href*="mozilla.org"]::after {
    content: "\f269";
  }

  &[href*="github.com"]::after {
    content: "\f09b";
  }
}
```

You'll also notice some links do a <a href="https://example.org/" target="_blank" rel="noopener noreferrer">bumpy animation</a> thing on hover. These are links with `target` attribute set to `_blank`. Here is how to do it:

```scss
a {
  // ... link styles

  // target links with target attribute
  &[target^="_blank"]:hover::after {
    content: "\f360";
    position: relative;
    bottom: 0.5rem;
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    transition: ease 0.1s;
  }
```

<br />

---

##### Learn more:

- [CSS-Tricks - Target Only External Links](https://css-tricks.com/snippets/jquery/target-only-external-links/)
- [w3.org - Substring matching attribute selectors](https://www.w3.org/TR/selectors/#attribute-substrings)
- [MDN - Attribute Selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors)
