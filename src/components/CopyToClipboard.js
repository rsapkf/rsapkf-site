import React, { useState } from "react"

import { copyToClipboard } from "../utils/copy-to-clipboard"
import styles from "./CopyToClipboard.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const CopyToClipboard = ({ link }) => {
  const [permalinkButtonText, setPermalinkButtonText] = useState(
    "Copy permalink"
  )
  return (
    <button
      className={styles.clipboardSpan}
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
      className={styles.clipboardIcon}
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
