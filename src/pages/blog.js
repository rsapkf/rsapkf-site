import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/Layout"
import blogStyles from "./blog.module.scss"
import Head from "../components/Head"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
        edges {
          node {
            frontmatter {
              title
              date(formatString: "MMMM DD, YYYY")
              spoiler
            }
            timeToRead
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Blog" />
      <h3>Articles</h3>
      <Link to="/tags">Tags</Link>
      <ol className={blogStyles.posts}>
        {data.allMarkdownRemark.edges.map(edge => {
          return (
            <li className={blogStyles.post}>
              <Link to={`/blog/${edge.node.fields.slug}`}>
                <h4>{edge.node.frontmatter.title}</h4>
                <span>
                  <small>
                    <i className="far fa-calendar"></i>{" "}
                    {edge.node.frontmatter.date} |{" "}
                    <i className="fas fa-stopwatch"></i> {edge.node.timeToRead}{" "}
                    min read
                  </small>
                </span>
                <br />
                <small>
                  <b>{edge.node.frontmatter.spoiler}</b>
                </small>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
