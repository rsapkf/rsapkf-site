import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"
import Head from "../components/Head"
import BlogNav from '../components/BlogNav'

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
  }
`

const Blog = (props) => {
  return (
    <Layout>
      <Head title={props.data.markdownRemark.frontmatter.title} />
      <h3>{props.data.markdownRemark.frontmatter.title}</h3>
      <i>
        <small>
          <i className="far fa-calendar"></i>{" "}
          {props.data.markdownRemark.frontmatter.date} |{" "}
          <i className="fas fa-stopwatch"></i>{" "}
          {props.data.markdownRemark.timeToRead} min read
        </small>
      </i>
      <hr />
      <div
        dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
      ></div>
      <small>
        <i>Last Updated: {props.data.markdownRemark.frontmatter.lastupdated}</i>
      </small>
      <hr />
      <BlogNav prev={props.pageContext.prev} next={props.pageContext.next} />
      <br />
      Got suggestions or feedback? <Link to="/contact">Contact</Link> me!
    </Layout>
  )
}

export default Blog
