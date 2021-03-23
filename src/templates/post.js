import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"
import Head from "../components/Head"
import PostNav from "../components/PostNav"

import { CopyToClipboard } from "../components/CopyToClipboard"
import postStyles from "./post.module.scss"

import { capitalizeString } from "../utils/capitalize-string"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        lastUpdated(formatString: "MMMM DD, YYYY")
        tags
      }
      html
      timeToRead
      fields {
        slug
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`

const Posts = props => {
  const postType = props.pageContext.postType
  const {
    title,
    date,
    lastUpdated,
    tags,
  } = props.data.markdownRemark.frontmatter
  const permalink = `${props.data.site.siteMetadata.siteUrl}/${postType}/${props.data.markdownRemark.fields.slug}`

  return (
    <Layout>
      <Head title={`${title} • ${capitalizeString(postType)}`} />
      <h2 className={postStyles.title}>{title}</h2>
      <small>
        {date} &bull; {props.data.markdownRemark.timeToRead} min read &bull;{" "}
        {postType === "blog" || postType === "hobbies"
          ? tags.slice(0, 4).map((tag, idx) => (
              <span key={idx}>
                <Link
                  to={`/${postType}/tags/${tag}`}
                  style={{ borderBottom: "unset" }}
                >
                  #{tag}
                </Link>{" "}
              </span>
            ))
          : ""}
        <CopyToClipboard link={permalink} />
      </small>
      <hr />
      <div
        dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
      ></div>
      <small>
        <i>Last Updated: {lastUpdated}</i>
      </small>
      <hr />
      <PostNav
        prev={props.pageContext.prevPost}
        next={props.pageContext.nextPost}
        postType={`${postType}`}
      />
      <br />
      <span style={{ marginTop: "20px" }}>
        Got suggestions or feedback ? <Link to="/contact">Contact</Link> me!
      </span>
    </Layout>
  )
}

export default Posts
