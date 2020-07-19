import React from "react"
import spinner from "../assets/grid.svg"

import ThemeContext from "../context/ThemeContext"

const Spinner = () => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <div>
          <img
            src={spinner}
            style={{
              width: "35px",
              margin: "auto",
              display: "block",
              filter: !theme.dark ? "invert(1)" : null,
            }}
            alt="Loading..."
          />
        </div>
      )}
    </ThemeContext.Consumer>
  )
}

export default Spinner
