import React, { useState } from "react"

import { copyToClipboard } from "../utils/copyToClipboard"
import CopyToClipboardStyles from "./CopyToClipboard.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const CopyToClipboard = ({ link }) => {
  const [permalinkButtonText, setPermalinkButtonText] = useState(
    "Copy permalink"
  )
  return (
    <button
      className={CopyToClipboardStyles.clipboardSpan}
      onClick={() => {
        copyToClipboard(link)
        setPermalinkButtonText("Copied")
        setTimeout(() => setPermalinkButtonText("Copy permalink"), 1500)
      }}
    >
      {permalinkButtonText}
    </button>
  )
}

export const CopyToClipboardIcon = ({ link }) => {
  const [permalinkButtonIcon, setPermalinkButtonIcon] = useState([
    "far",
    "clipboard",
  ])
  return (
    <button
      className={CopyToClipboardStyles.clipboardIcon}
      title={"Copy permalink to clipboard"}
      onClick={() => {
        copyToClipboard(link)
        setPermalinkButtonIcon(["fas", "check"])
        setTimeout(() => setPermalinkButtonIcon(["far", "clipboard"]), 1500)
      }}
    >
      <FontAwesomeIcon icon={permalinkButtonIcon} />
    </button>
  )
}
