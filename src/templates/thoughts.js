import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"
import Head from "../components/Head"
import PostNav from "../components/PostNav"

import { CopyToClipboard } from "../components/CopyToClipboard"
import postTemplateStyles from "./posttemplate.module.scss"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        lastupdated(formatString: "MMMM DD, YYYY")
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

const Thought = props => {
  const { title, date, lastupdated } = props.data.markdownRemark.frontmatter
  const permalink = `${props.data.site.siteMetadata.siteUrl}/blog/${props.data.markdownRemark.fields.slug}`

  return (
    <Layout>
      <Head title={`${title} • Thoughts`} />
      <h2 className={postTemplateStyles.title}>{title}</h2>
      <small>
        {date} &bull; {props.data.markdownRemark.timeToRead} min read{" "}
        <CopyToClipboard link={permalink} />
      </small>
      <hr />
      <div
        dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
      ></div>
      <small>
        <i>Last Updated: {lastupdated}</i>
      </small>
      <hr />
      <PostNav
        prev={props.pageContext.prevPost}
        next={props.pageContext.nextPost}
        posttype="thoughts"
      />
      <br />
      <span style={{ marginTop: "20px" }}>
        Got suggestions or feedback ? <Link to="/contact">Contact</Link> me!
      </span>
    </Layout>
  )
}

export default Thought
