---
title: "Deploying mdBook Site on Netlify"
date: "2020-07-29"
lastupdated: "2020-07-31"
spoiler: "Simple enough but Rust's not JavaScript."
tags: ["mdbook", "rust", "netlify"]
type: "article"
---

Now that I've got a domain, I thought of moving my project sites from GitHub Pages to Netlify so that I can serve them from subdomains right from Netlify using Netlify DNS. This is technically possible for sites hosted on GitHub Pages. You need to add a CNAME record to your DNS provider and CNAME file at the root of your project repository. Check out [GitHub's documentation](https://docs.github.com/en/github/working-with-github-pages/managing-a-custom-domain-for-your-github-pages-site) for details.

This is a simple enough task but I came across some quirks and information that might be useful:

- One of my sites is built using [mdBook](https://github.com/rust-lang/mdBook), a static site generator written in Rust but Netlify doesn't support Rust in its [build image](https://github.com/netlify/build-image) like Node, Python or Ruby. If you use `mdBook build` as build command, you'll get `mdBook : command not found` error in deploy log.

To solve this problem, use the following build command:

```bash
curl -L https://github.com/rust-lang/mdBook/releases/download/v0.3.7/mdbook-v0.3.7-x86_64-unknown-linux-gnu.tar.gz | tar xvz && ./mdbook build
```

Using Netlify's [File Based Configuration](https://docs.netlify.com/configure-builds/file-based-configuration/):

```toml
[build]
  command = "curl -L https://github.com/rust-lang/mdBook/releases/download/v0.3.7/mdbook-v0.3.7-x86_64-unknown-linux-gnu.tar.gz | tar xvz && ./mdbook build"
```

Use whatever version of mdBook you want to use. I used v0.3.7 because my previous Travis CI config used it and it's the last patch version of v0.3.

- mdbook puts generated HTML and CSS files in the `book` directory (like `build` dir used by npm) by default. So, use this dir (or whatever folder you have used in the configuration) as publish directory.

- I had problems with pages generated from [LICENSE] and [CONTRIBUTING.md] files. These files are located in root directory of the project. I had to disable Netlify's [Pretty URLs](https://docs.netlify.com/site-deploys/post-processing/#post-processing-features) (**Settings > Build & deploy > Post processing > Asset optimization**) to make this work.

- I couldn't get sidebar to resize. Disabling **Bundle CSS** on Netlify worked. This might not be necessary if using v0.4. I haven't tried it.

---

##### Learn more:

- [Semantic Versioning 2.0.0](https://semver.org/)
