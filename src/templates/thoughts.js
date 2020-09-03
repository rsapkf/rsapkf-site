import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"
import Head from "../components/Head"
import PostNav from "../components/PostNav"

import blogTemplateStyles from "./post.module.scss"

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
      <h3 className={blogTemplateStyles.title}>{title}</h3>
      <small>
        <i className="far fa-calendar"></i> {date} |{" "}
        <i className="fas fa-stopwatch"></i>{" "}
        {props.data.markdownRemark.timeToRead} min read |{" "}
        <i className="fas fa-link"></i>{" "}
        <Link
          to={`${props.data.site.siteMetadata.siteUrl}${props.location.pathname}`}
          style={{ borderBottom: "unset" }}
        >
          permalink
        </Link>
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
