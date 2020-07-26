import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"
import Head from "../components/Head"
import BlogNav from "../components/BlogNav"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        lastupdated(formatString: "MMMM DD, YYYY")
        tags
      }
      html
      timeToRead
    }
  }
`

const Blog = props => {
  const metadata = props.data.markdownRemark.frontmatter

  return (
    <Layout>
      <Head title={metadata.title} />
      <h3>{metadata.title}</h3>
      <small>
        <i className="far fa-calendar"></i> {metadata.date} |{" "}
        <i className="fas fa-stopwatch"></i>{" "}
        {props.data.markdownRemark.timeToRead} min read |{" "}
        <i className="fas fa-tags"></i>{" "}
        {metadata.tags.map((tag, i) =>
          metadata.tags[i + 1] ? (
            <span>
              <Link to={`/tags/${tag}`} style={{ borderBottom: "unset" }}>
                #{tag}
              </Link>
              ,{" "}
            </span>
          ) : (
            <Link to={`/tags/${tag}`} style={{ borderBottom: "unset" }}>
              #{tag}
            </Link>
          )
        )}
      </small>
      <hr />
      <div
        dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
      ></div>
      <small>
        <i>Last Updated: {metadata.lastupdated}</i>
      </small>
      <hr />
      <BlogNav prev={props.pageContext.prev} next={props.pageContext.next} />
      <br />
      <span style={{ marginTop: "20px" }}>
        Got suggestions or feedback ? <Link to="/contact">Contact</Link> me!
      </span>
    </Layout>
  )
}

export default Blog
