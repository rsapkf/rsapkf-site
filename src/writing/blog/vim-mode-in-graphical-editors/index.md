---
title: Enabling Vim Mode In All Major Graphical Text Editors
date: 2019-10-19
lastUpdated: 2019-10-19
spoiler: ""
tags: ["vim", "programming"]
type: blog
slug: vim-mode-in-graphical-editors
---

Make no mistake- I am normally a Vim / Emacs / Terminal advocate. But if you need to use full-featured graphical text editors or IDEs for development, there are ways around it. Almost all major editors with a plugin ecosystem today allow you to enable or install vim emulation. Here are some plugins for the major ones. Installation is fairly trivial.

#### 1. VSCode

Install [vscodevim](https://marketplace.visualstudio.com/items?itemName=vscodevim.vim) ([GitHub](https://github.com/VSCodeVim/Vim)) plugin from the Marketplace.

#### 2. Sublime Text

Go to user settings (Settings > Preferences) and remove `"Vintage"` from `"ignored_packages"` array.
Details can be found in the [Official Sublime Text Docs](https://www.sublimetext.com/docs/3/vintage.html).

#### 3. Atom

Install the [atom-vim-mode-plus](https://atom.io/packages/vim-mode-plus) ([GitHub](https://github.com/t9md/atom-vim-mode-plus)) plugin.

#### 4. PyCharm / IntelliJ IDEA

Install [IdeaVim](https://www.jetbrains.com/help/pycharm/using-product-as-the-vim-editor.html) ([GitHub](https://github.com/JetBrains/ideavim)) plugin from the Marketplace.

#### 5. Eclipse

Install [Vrapper](http://vrapper.sourceforge.net/home/) ([GitHub](https://github.com/vrapper/vrapper)) plugin from the Marketplace.
I found a few other options on the web but they are either completely dead or closed-source projects.
