import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/Layout"
import Head from "../components/Head"

import blogStyles from "./blog.module.scss"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            frontmatter {
              title
              date(formatString: "MMMM DD, YYYY")
              spoiler
              tags
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
      <span>
        <Link to="/tags">Tags</Link>
      </span>
      <ol className={blogStyles.articles}>
        {data.allMarkdownRemark.edges.map((edge, idx) => {
          const { title, date, spoiler, tags } = edge.node.frontmatter

          return (
            <li className={blogStyles.article} key={idx}>
              <Link to={`/blog/${edge.node.fields.slug}`}>
                <span>{title}</span>
              </Link>
              <br />
              <span className={blogStyles.description}>
                <small>
                  <i className="far fa-calendar"></i> {date} |{" "}
                  <i className="fas fa-stopwatch"></i> {edge.node.timeToRead}{" "}
                  min read | <i className="fas fa-tags"></i>{" "}
                  {tags.map((tag, i) =>
                    tags[i + 1] ? `#${tag}, ` : `#${tag}`
                  )}
                  <br />
                  {spoiler}
                </small>
              </span>
              <hr />
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
