---
title: "A Privacy Focused Note-Taking and PKM Setup"
date: "2020-06-17"
lastupdated: "2020-06-17"
spoiler: "PKM = Personal Knowledge Management."
tags: ["note-taking", "vim", "knowledge-base", "privacy"]
---

With an overwhelmingly increasing number of productivity tools and note-taking applications on the market, it is becoming more and more difficult to settle on one particular application / workflow for taking notes. Over the years, I've tried many many setups for this: from pen and paper (which still beats everything in my opinion) to completely offline solutions like txt files, [VimWiki](https://github.com/vimwiki/vimwiki), [Zettlr](https://github.com/zettlr/zettlr) and [MarkText](https://github.com/marktext/marktext), [Joplin](https://github.com/laurent22/joplin) and SaaS products like [this one](https://roamresearch.com/) and methods like [Zettelkasten](https://en.wikipedia.org/wiki/Zettelkasten) (this didn't work for my programming notes), I've tried a plethora of apps that are out there. For the past few months however, I've settled on a simple workflow that I'll explain below.

[TL;DR](#summary)

__Disclaimer__: I am not a researcher who has to read multiple academic papers everyday and annotate things for later use. I'm just a kid who still has a lot to learn and this is my __current__ note-taking setup that works for me.

First, let's look at the high level overview of what my notes consist of (yet). There are typically 3 kinds of notes that I take:

- links [websites (host names only), go-to guides / articles / blog posts / lists online]
- snippets of code or information [notes from books: programming mostly + non-fiction, courses, MOOCs, Mathematics, pieces of objective information]
- temporary stuff [project ideas, short term todos, grocery list, scratchpad, etc]

The first two kinds of notes are kind of permanent notes that I'd like to persist for as long as possible. The last kind consists of temporary information and tasks. For all types of notes, I like a simple and lightweight markup language, namely Markdown. Markdown is supported by all major static site generators (in case I want to turn my notes into websites for other folks to use) and learning Markdown takes virtually no time.

Secondly, here are the features I'm looking for in my workflow:

- I need to be able to edit notes quickly in Markdown, ideally within a Tmux pane on my terminal using Vim.
- I should be able to sync and edit all my data across devices.
- My private notes must be end-to-end encrypted if on cloud.

### 1. Links

- Public Links:

    I have a compulsive urge to collect any new website that I come across that sparks my curiosity and meets a few standards. As of now, there are more than 3000 websites in [my collection](https://github.com/rsapkf/42/). For this, I have a bunch of markdown files in a folder with filenames matching the top level category that each website goes into. Inside each of those files, there are sub-categories and nested hierarchies of lists with more and more specific criteria for categorization. I use [Neovim](https://github.com/neovim/neovim) / [Gedit](https://gitlab.gnome.org/GNOME/gedit) for writing Markdown because these editors don't auto-format my markdown files on save like [VSCode](https://github.com/Microsoft/vscode) does by default. This is a digital version of my collection from my notebook way back.
    
    This isn't an attempt to create another [alternativeTo.net](https://alternativeto.net). Just a personal thing.

    Anyway, This repo consists of what I like to call my "public" bookmarks. I put this on GitHub for everyone to take advantage of and explore what the internet has to offer. So, if you're interested, go check it out.

    A question I get asked a lot is isn't this time consuming to categorize and maintain a repo like this? Well, I don't do all the manual work of writing Markdown, and copy pasting links and descriptions for resources, etc. I have a few bookmarklets, vim macros, and scripts that do the formatting for me. I use an internal web extension that recursively exports a specific folder (in my case it's "//--todo-42"") from my bookmarks on Firefox to properly formatted Markdown (aside: I am working on publishing this addon with added functionality) and copy those links into whatever files they should go to. While browsing, I drag any new website to my Bookmarks Toolbar that I think I should add to the collection to that folder and at the end of the week, load the extension and export the data. This takes ~30 minutes per week. Then, I push the updates to GitHub and [Travis](https://travis-ci.org/) does all the work of building the [website](https://rsapkf.github.io/42/) (I use [mdbook](https://github.com/rust-lang/mdBook) for this) and deployment is done via [GitHub Pages](https://pages.github.com).

- Personal Links:

    I have always been a [Firefox](https://www.mozilla.org/en-US/firefox/new/) user. I use [Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/) as my primary browser. For links that I'd rather not share with the world, I use [Firefox Sync](https://support.mozilla.org/en-US/products/firefox/sync). There are multiple folders and hierarchies with weird names that I personally use to sort my bookmarks. For example, I use it to store:

    - YouTube Playlists + custom Playlists (as opposed to YouTube's "Save to Library" and "Liked videos" feature),
    - Reddit threads/memes (as apposed to Reddit's "save" feature,
    - IMDb links (instead of IMDb's "Lists"),
    - Twitter posts (instead of Twitter's "Likes"),
    - Bookmarklets,
    - interesting Instagram profiles (e.g. [@electricpants](https://www.instagram.com/electricpants/)),
    - Spotify / YouTube Music links (I gotta admit this is boring and painful.)
    - resources that I should check later,
    - other temporary links, tutorials to follow, etc).
    
    For outsiders, this approach might seem time-consuming and unnecessary but as a privacy conscious person, I find it to be the best solution that aligns with my personal threat model. I use an extension called [Invidition](https://codeberg.org/Booteille/Invidition) that redirects all requests to Twitter, YouTube and Instagram to their privacy friendly alternatives: [Nitter](https://github.com/zedeus/nitter), [Invidious](https://github.com/omarroth/invidious) and [Bibliogram](https://github.com/cloudrac3r/bibliogram), respectively. It also has added benefits like I can store my data in as many nested folders and tags as I can think of. I don't have to log into big corporate websites to view something and I can sync my bookmarks on all my devices in an end-to-end encrypted way in milliseconds. This method helps me decrease the [digital footprint](https://en.wikipedia.org/wiki/Digital_footprint) I leave on the Internet and less amount of data tied to big companies.
    
    If I want to export all my bookmarks to Markdown, I can use Firefox's Export Bookmarks to HTML feature and use a tool like [pandoc](https://github.com/jgm/pandoc) to convert HTML to Markdown.

    Also, I can self-host an instance of [Firefox Sync Server](https://github.com/mozilla-services/syncserver) on my own server if I want to. There are [other](https://github.com/go-shiori/shiori) [alternatives](https://github.com/awesome-selfhosted/awesome-selfhosted#bookmarks-and-link-sharing) to Firefox Sync, but for now, Firefox is good enough for me.

    But what about links that I want to check out later on my laptop while I'm browsing let's say, HN on my phone? I can use Firefox Sync for this as well but the experience isn't so good. I try to minimize my use of my phone for tasks that I'd like to do on my computer but for such use cases, I use a "Read It Later" service called [Pocket](https://getpocket.com) (This isn't open source, but it's owned by Mozilla and these folks seem to be more trustworthy than most other companies). I am thinking of eventually switching to a self-hosted alternative like [wallabag](https://github.com/wallabag/wallabag) but I'm not in a position to do so right now. I use tags to manage links in Pocket.

    I also use Pocket as an alternative to YouTube's "Watch Later" and IMDb's "Watchlist" features.

    __Aside__: I do use Twitter, not for microblogging but to follow interesting accounts (with a VPN). Their recommendation system is pretty good for this sort of thing. As for Spotify, I hate the fact that it is so closely tied to Facebook. They log all search queries even after deleting your search history. I have deleted all my Spotify Playlists (I can't delete them permanently) and exported the data to Firefox (using [Exportify](https://github.com/watsonbox/exportify)). I need to find a better solution for Music (I'm trying out [this service](https://audiomack.com/).).

---

### 2. Notes

These consist of information I extract from reading (non-fiction) books, articles, watching YouTube videos, quotes, etc.

- Public Notes:

    Again, I just have a folder with a bunch of Markdown files that I write my notes in. I currently publish these notes [here](https://rsapkf.github.io/notes) and use [Docusaurus](https://github.com/facebook/Docusaurus) for generating the website and [GitHub Pages](https://pages.github.com) for deployment. These notes consist small snippets of code, shell scripting and programming tips, Linux commands that I frequently use, IRC commands that I tend to forget all the time, etc. Essentially, these are little pieces of random information for personal use that aren't tied to me personally or summaries of books I read and that I think someone will benefit from reading.

- Private Notes:

    This is where my most personal data and notes reside. I use an open-source note-taking service called [Standard Notes](https://github.com/standardnotes/) for this. This provides automatic end-to-end encryption for my notes, free sync across my devices and the "Extended" tier has some amazing features like Code editor, vim mode, spreadsheet, etc. I don't pay for anything I use right now but this is a service (besides a VPN) that I'd happily pay for if I was in a position to do so. They have a [web app](https://github.com/standardnotes/web) that I open in a new browser window when I am reading an information-dense piece on the internet or non-fiction books. And they also have clients for Linux and other OSes. Their free tier has all the core features that I need. It is privacy focused, lightweight, has a simple intuitive interface and is a breeze to write my notes on.

    On my phone, I use Standard Notes for both public and private notes that I can later sort out on my computer.

    I am not a mathematics student right now, but I am currently learning advanced LaTeX and a cool vim + [UltiSnips](https://github.com/sirver/UltiSnips) + LaTeX + [Inskcape](https://gitlab.com/inkscape/inkscape) workflow for Mathematics notes from [Gilles Castel](https://castel.dev/post/lecture-notes-1/) for future use.

    I manage highly sensitive information like Recovery codes, Paper keys, API keys, etc with a password manager. I recommend [Bitwarden](https://github.com/bitwarden).

The other kinds of notes (well, these are what I consider to be notes) are my dotfiles and this blog. I try to document everything on my config files so I can understand what each line of configuration is doing. I store these on [GitHub](https://github.com/rsapkf/dotfiles) and use a [technique](https://news.ycombinator.com/item?id=11071754) I learned from HN to manage my config files.

For this blog, I use [GatsbyJS](https://github.com/gatsbyjs/gatsby) along with [gatsby-transformer-remark](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-transformer-remark) and [gatsby-source-filesystem](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-source-filesystem) plugins that allow me to read Markdown files from the filesystem and generate HTML pages from these files. I will write more on setting up this site in a future blog post.

---

### 3. Temporary Todos and Tasks

I use Standard Notes for these as well. A better solution for todos would be something like [Tasks.org](https://github.com/tasks/tasks) but this just adds one more application to my setup and phone. For temporary grocery list and stuff, I use the default Notes app that comes with my phone (in offline mode) and for long-term todos, I use Standard Notes and special tags. I append special characters to the start of each todo. For example, here's is an entry from one of those notes:

```
- $$$ add Plausible/Goatcounter analytics for website, remove Google Analytics.
```

This is something I'd like to do in the future (my apologies) but I am currently limited by costs (indicated by $$$). 

### <a href="#summary" id="summary">#</a> Summary
In a nutshell, most of my notes are stored in [Markdown](https://daringfireball.net/projects/markdown/syntax) files inside folders on my hard drive. I use [Neovim](https://github.com/neovim/neovim) and [Gedit](https://gitlab.gnome.org/GNOME/gedit) to edit these notes amd [Git](https://git-scm.com/) for version control and sync. I share [some](https://github.com/rsapkf/42/) [of](https://github.com/rsapkf/dotfiles) [them](https://github.com/rsapkf/notes) with the world, and for private notes, I use end-to-end encrypted services: [Firefox Sync](https://support.mozilla.org/en-US/products/firefox/sync), [Standard Notes](https://github.com/standardnotes/) and [Bitwarden](https://github.com/bitwarden). I use [Pocket](https://getpocket.com) to save and sync links that I want to read later.

By the way, I still carry a notepad and pen with me for cases when I don't have access to my phone or the Internet.

I might change anything anytime but this is basically what my note-taking setup looks like right now. This might seem like nothing new, too much organization / work, completely crazy or unnecessary. Please don't hesitate to contact me if you have anything to add.