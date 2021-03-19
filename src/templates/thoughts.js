import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"
import Head from "../components/Head"
import PostNav from "../components/PostNav"

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

  return (
    <Layout>
      <Head title={`${title} • Thoughts`} />
      <h2 className={postTemplateStyles.title}>{title}</h2>
      <small>
        {date} &bull; {props.data.markdownRemark.timeToRead} min read &bull;{" "}
        <a
          href={`${props.data.site.siteMetadata.siteUrl}${props.location.pathname}`}
          style={{ borderBottom: "unset" }}
        >
          permalink
        </a>
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
        prev={props.pageContext.prevThought}
        next={props.pageContext.nextThought}
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
