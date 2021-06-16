---
title: A Privacy Focused Note-Taking and PKM Setup
date: 2020-06-17
lastUpdated: 2020-06-17
spoiler: PKM = Personal Knowledge Management.
tags: ["note-taking", "vim", "knowledge-base", "privacy"]
type: blog
slug: current-note-taking-setup
---

With an overwhelmingly increasing number of productivity tools and note-taking applications on the market, it is becoming more and more difficult to settle on one particular application / workflow for taking notes. Over the years, I've tried many many setups for this: from pen and paper (which still beats everything in my opinion) to completely offline solutions like txt files, [VimWiki](https://github.com/vimwiki/vimwiki), [Zettlr](https://github.com/zettlr/zettlr) and [MarkText](https://github.com/marktext/marktext), [Joplin](https://github.com/laurent22/joplin) and SaaS products like [this one](https://roamresearch.com/) and methods like [Zettelkasten](https://en.wikipedia.org/wiki/Zettelkasten) (this didn't work for my programming notes), I've tried a plethora of apps that are out there. For the past few months, however, I've settled on a simple workflow that I'll explain below.

→ [Summary](#summary)

**Disclaimer**: I am not a researcher who has to read multiple academic papers every day and annotate things for later use. This is just my **current** note-taking setup that works for me.

First, let's look at the high level overview of what my notes consist of (yet). There are typically 3 kinds of notes that I take:

- links \[websites (host names only), go-to guides / articles / blog posts / lists online\]
- snippets of code or information \[notes from books: programming mostly + non-fiction, courses, MOOCs, Mathematics, pieces of objective information\]
- temporary stuff \[project ideas, short term todos, grocery list, scratchpad, etc\]

For all types of notes, I like a simple and lightweight markup language, namely Markdown. Markdown is supported by all major static site generators making it easier to publish my notes to the web and learning Markdown takes virtually no time.

Secondly, here are the features I'm looking for in my workflow:

- I need to be able to edit notes quickly in Markdown, ideally within a Tmux pane on my terminal using Vim.
- I should be able to sync and edit all my data across devices.
- My private notes must be end-to-end encrypted if on cloud.

---

### 1. Links

- #### Public Links:

  I like collecting websites. As of now, there are more than 4000 websites in [my collection](https://github.com/rsapkf/42/).

  For this, I have a bunch of markdown files in a folder with filenames matching the top level category that each website goes into. Inside each of those files, there are sub-categories and nested hierarchies of lists with more and more specific criteria for categorization.

  I use [Neovim](https://github.com/neovim/neovim) / [Gedit](https://gitlab.gnome.org/GNOME/gedit) for writing Markdown because these editors don't auto-format my markdown files on save like [VSCode](https://github.com/Microsoft/vscode) does by default. This is a digital version of my collection from my notebook way back.

  This isn't an attempt to create another [alternativeTo.net](https://alternativeto.net) or one of those [awesome lists](https://github.com/topics/awesome). Just a personal thing.

  I have a few bookmarklets, vim macros, and scripts that do the formatting for me. I wrote an addon that recursively exports a specific folder from my bookmarks on Firefox to properly formatted Markdown (**aside**: I am working on publishing this addon with added functionality) and copy those links into whatever files they should go to. While browsing, I drag new websites to that folder on my Bookmarks Toolbar and at the end of the week, load the extension and export the data. Then, I push the updates to GitHub and [Travis](https://travis-ci.org/) does all the work of building the [website](https://rsapkf.github.io/42/) (I use [mdBook](https://github.com/rust-lang/mdBook) for this) and deployment is done via [GitHub Pages](https://pages.github.com).

- #### Personal Links:

  I have always been a [Firefox](https://www.mozilla.org/en-US/firefox/new/) user. I use [Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/) as my primary browser. For links that I'd rather not share with the world, I use [Firefox Sync](https://support.mozilla.org/en-US/products/firefox/sync). There are multiple folders and hierarchies with weird names that I personally use to sort my bookmarks. For example, I use it to store:

  - YouTube Playlists + custom Playlists (as opposed to YouTube's "Save to Library" and "Liked videos" feature),
  - Reddit threads / memes (as apposed to Reddit's "save" feature,
  - IMDb links (instead of IMDb's "Lists),
  - Twitter posts (instead of Twitter's "Likes),
  - Bookmarklets,
  - interesting Instagram profiles (e.g. [@electricpants](https://www.instagram.com/electricpants/)),
  - Spotify / YouTube Music links
  - resources that I should check later,
  - other temporary links, tutorials to follow, etc).

  For outsiders, this approach might seem time-consuming and unnecessary but as a privacy conscious person, I find it to be the best solution that aligns with my personal threat model.

  I use [Invidition](https://codeberg.org/Booteille/Invidition) that redirects all requests to Twitter, YouTube and Instagram to their privacy friendly alternatives: [Nitter](https://github.com/zedeus/nitter), [Invidious](https://github.com/omarroth/invidious) and [Bibliogram](https://github.com/cloudrac3r/bibliogram), respectively.

  This way, I don't have to log into big corporate websites to view something. I can store my data in as many nested folders and tags as I can think of, encrypted and synced across all my devices. This method helps me decrease the [digital footprint](https://en.wikipedia.org/wiki/Digital_footprint) I leave on the Internet and less amount of data tied to big companies.

  If I want to export all my bookmarks to Markdown, I can use Firefox's Export Bookmarks to HTML feature and use a tool like [pandoc](https://github.com/jgm/pandoc) to convert HTML to Markdown.

  Also, I can self-host an instance of [Firefox Sync Server](https://github.com/mozilla-services/syncserver) on my own server if I want to. There are [other](https://github.com/go-shiori/shiori) [alternatives](https://github.com/awesome-selfhosted/awesome-selfhosted#bookmarks-and-link-sharing) to Firefox Sync, but for now, Firefox is good enough for me.

  For links that I want to check out later on my laptop while on my phone, I use [Pocket](https://getpocket.com) (This isn't open source, but it's owned by Mozilla and these folks seem to be more trustworthy than most other companies). I am thinking of eventually switching to a self-hosted alternative like [wallabag](https://github.com/wallabag/wallabag). Some useful features of Pocket are Tagging and [Export](https://getpocket.com/export/) tool which allows me to import the links to Firefox with ease.

  I also use Pocket as an alternative to YouTube's "Watch Later" and IMDb's "Watchlist" features.

  _Update: I have deleted Pocket and moved to Firefox for temporary links as well._

  **Aside**: I do use Twitter, not for microblogging but to follow interesting accounts. Their recommendation system is pretty good for this sort of thing. As for Spotify, I hate the fact that they log your streaming history with no easy way to delete it and is so closely tied to Facebook[\*](https://youtube.com/watch?v=eAagtcAup0o&t=1072). I have deleted all my Spotify Playlists and exported the data to Firefox (using [Exportify](https://github.com/watsonbox/exportify)). I need to find a better solution for Music.

---

### 2. Notes

These consist of information I extract from reading (non-fiction) books, articles, watching YouTube videos, quotes, etc.

- #### Public Notes:

  Again, I just have a folder with a bunch of Markdown files that I write my notes in. I currently publish these notes [here](https://rsapkf.github.io/notes) and use [Docusaurus](https://github.com/facebook/Docusaurus) for generating the website and [GitHub Pages](https://pages.github.com) for deployment.

  These notes consist small snippets of code, shell scripting and programming tips, Linux commands that I frequently use, IRC commands that I tend to forget all the time, etc. Essentially, these are little pieces of random information for personal use that aren't tied to me personally or summaries of books I read and that I think someone will benefit from reading.

- #### Private Notes:

  This is where my most personal data and notes reside. I use an open-source note-taking service called [Standard Notes](https://github.com/standardnotes/) for this. This provides automatic end-to-end encryption for my notes, free sync across my devices and the "Extended" tier has some amazing features like Code editor, vim mode, spreadsheet, etc. I open [Standard Notes web](https://github.com/standardnotes/web) in a new browser window when I am reading an information-dense piece on the internet or non-fiction books. And they also have clients for Linux and other OSes. The free tier has all the core features. It is privacy focused, lightweight, has a simple intuitive interface and is a breeze to write my notes on.

  On my phone, I use Standard Notes for both public and private notes that I can later sort out on my computer.

  I am learning an advanced LaTeX and a cool vim + [UltiSnips](https://github.com/sirver/UltiSnips) + LaTeX + [Inskcape](https://gitlab.com/inkscape/inkscape) workflow for Mathematics notes from [Gilles Castel](https://castel.dev/post/lecture-notes-1/) for future use.

  I manage highly sensitive information like Recovery codes, Paper keys, API keys, etc with a password manager. I recommend [Bitwarden](https://github.com/bitwarden) or [KeePassXC](https://keepassxc.org/).

The other kinds of notes (well, these are what I consider to be notes) are my dotfiles and this blog. I try to document everything on my config files so I can understand what each line of configuration is doing. I store these on [GitHub](https://github.com/rsapkf/dotfiles) and use a [technique](https://news.ycombinator.com/item?id=11071754) I learned from HN to manage my config files.

For this blog, I use [GatsbyJS](https://github.com/gatsbyjs/gatsby) along with [gatsby-transformer-remark](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-transformer-remark) and [gatsby-source-filesystem](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-source-filesystem) plugins that allow me to read Markdown files from the filesystem and generate HTML pages from these files. I will write more on setting up this site in a future blog post.

---

### 3. Temporary Todos and Tasks

I use Standard Notes for these as well. A better solution for more ephemeral notes and todos would be something like [Tasks.org](https://github.com/tasks/tasks) but this just adds one more application to my setup and phone. For temporary grocery list and stuff, I use [todo.txt](https://github.com/todotxt/todo.txt-cli) and the default Notes app that comes with my phone (in offline mode) and for long-term todos, I use Standard Notes and special tags. I append special characters to the start of each todo. For example, here's is an entry from one of those notes:

```
- $$$ add Plausible/Goatcounter analytics for website, remove Google Analytics.
```

This is something I'd like to do in the future (my apologies) but I am currently limited by costs (indicated by \$\$\$).

### <a href="#summary" id="summary">#</a> Summary

In a nutshell, most of my notes are stored in [Markdown](https://daringfireball.net/projects/markdown/syntax) files inside folders on my hard drive. I use [Neovim](https://github.com/neovim/neovim) and [Gedit](https://gitlab.gnome.org/GNOME/gedit) to edit these notes and [Git](https://git-scm.com/) for version control and sync. I share [some](https://github.com/rsapkf/42/) [of](https://github.com/rsapkf/dotfiles) [them](https://github.com/rsapkf/notes) with the world, and for private notes, I use end-to-end encrypted services: [Firefox](https://www.mozilla.org/en-US/firefox/), [Standard Notes](https://github.com/standardnotes/) and [Bitwarden](https://github.com/bitwarden). I use [Firefox Sync](https://support.mozilla.org/en-US/products/firefox/sync) to save and sync links that I want to read later.
