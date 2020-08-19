import React from "react"

import { ThemeProvider } from "./src/context/ThemeContext"

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
)

// PrismJS Themes
require("prismjs/themes/prism-tomorrow.css")

// PrismJS Plugins
require("prismjs/plugins/command-line/prism-command-line.css")
require("prismjs/plugins/line-numbers/prism-line-numbers.css")
