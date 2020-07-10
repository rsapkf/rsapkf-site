---
title: "Setting up this site"
date: "2020-07-02"
lastupdated: "2020-07-10"
spoiler: "GatsbyJS and Plugins + Netlify + GitHub."
tags: ["gatsbyjs", "netlify", "github"]
---

→ [Summary](#summary)

This site is powered by [GatsbyJS](https://github.com/gatsbyjs/gatsby), an open source static site generator built on top of [React](https://github.com/facebook/react) and [GraphQL](https://github.com/graphql/graphql-spec), two of the most popular modern web technologies. It is hosted on [Netlify](https://www.netlify.com/). For form submissions, I use [Netlify's Form Handling](https://docs.netlify.com/forms/setup/).
 The source code is available on my [Github](https://github.com/rsapkf/rsapkf-site).

I recommend you follow the official [Gatsby Tutorial](https://www.gatsbyjs.org/tutorial/) to learn Gatsby. Little knowledge of React and GraphQL will make it a lot easier.

There are multiple plugins I use for various functionalities in this site. Most of these are official plugins supported by Gatsby project:

- [gatsby-source-filesystem](https://www.gatsbyjs.org/packages/gatsby-source-filesystem/): Sources data into your Gatsby application from your local filesystem.

- [gatsby-plugin-react-helmet](https://www.gatsbyjs.org/packages/gatsby-plugin-react-helmet/): Provides drop-in support for server rendering data added with [React Helmet](https://github.com/nfl/react-helmet). With this plugin, attributes you add in their component, e.g. title, meta attributes, etc. will get added to the static HTML pages Gatsby builds.

- [gatsby-plugin-feed](https://www.gatsbyjs.org/packages/gatsby-plugin-feed/): Creates an RSS feed (or multiple feeds) for Gatsby sites.

- [gatsby-remark-prismjs](https://www.gatsbyjs.org/packages/gatsby-remark-prismjs/): Adds syntax highlighting to code blocks in markdown files using [PrismJS](https://github.com/PrismJS/prism). Requires [prismjs](https://github.com/PrismJS/prism).

- [gatsby-plugin-mdx](https://www.gatsbyjs.org/packages/gatsby-plugin-mdx/): [MDX](https://github.com/mdx-js/mdx) lets you write JSX embedded inside markdown. You can write, for example, `# heading` for the little things and JSX for more advanced components.

- [gatsby-plugin-sass](https://www.gatsbyjs.org/packages/gatsby-plugin-sass/): Handles [SCSS/Sass](https://sass-lang.com/) files. Requires [node-sass](https://github.com/sass/node-sass).

- [gatsby-transformer-remark](https://www.gatsbyjs.org/packages/gatsby-transformer-remark/): Parses Markdown files using [RemarkJS](https://github.com/remarkjs/remark).

- [gatsby-plugin-google-analytics](https://www.gatsbyjs.org/packages/gatsby-plugin-google-analytics/): This one is self-explanatory. I will eventually switch to a more privacy focused analytics system like [Plausible](https://www.gatsbyjs.org/packages/gatsby-plugin-plausible/) or [GoatCounter](https://www.gatsbyjs.org/packages/gatsby-plugin-goatcounter/) but this is what I'm using as of now.

---

#### <a href="#summary" id="summary">#</a> Summary
```
- Powered by: GatsbyJS (React and GraphQL)
- Hosting: Netlify
- Form Handling: Netlify's Form Handling
- Gatsby Plugins: [
    "gatsby-source-filesystem",
    "gatsby-transformer-remark",
    "gatsby-plugin-feed",
    "gatsby-plugin-mdx",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass" (requires "node-sass"),
    "gatsby-remark-prismjs" (requires "prismjs"),
    "gatsby-plugin-google-analytics",
    ...
]
- Source Code: https://github.com/rsapkf/rsapkf-site
```


















