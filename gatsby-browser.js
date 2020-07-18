import React from "react"

import { ThemeProvider } from "./src/context/ThemeContext"

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
)

// PrismJS Themes
// require("prismjs/themes/prism.css")
// require("prismjs/themes/prism-dark.css")
// require("prismjs/themes/prism-funky.css")
// require("prismjs/themes/prism-okaidia.css")
// require("prismjs/themes/prism-twilight.css")
// require("prismjs/themes/prism-coy.css")
// require("prismjs/themes/prism-solarizedlight.css")
require("prismjs/themes/prism-tomorrow.css")

// PrismJS Plugins
require("prismjs/plugins/command-line/prism-command-line.css")
require("prismjs/plugins/line-numbers/prism-line-numbers.css")
