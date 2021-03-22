import React from "react"
import { Link } from "gatsby"
import postNavStyles from "./PostNav.module.scss"

export default function PostNav({ prev, next, postType }) {
  return (
    <div className={postNavStyles.container}>
      {prev && (
        <div>
          <Link to={`/${postType}/${prev.node.fields.slug}`}>
            <span className={postNavStyles.prev}>← Previous</span>
            <br />
          </Link>
          <span className={postNavStyles.title}>
            {prev.node.frontmatter.title}
          </span>
        </div>
      )}
      {next && (
        <div style={{ float: "right" }}>
          <Link to={`/${postType}/${next.node.fields.slug}`}>
            <span className={postNavStyles.next}>Next →</span>
            <br />
          </Link>
          <span className={postNavStyles.title}>
            {next.node.frontmatter.title}
          </span>
        </div>
      )}
    </div>
  )
}
