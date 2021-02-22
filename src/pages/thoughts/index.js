import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../../components/Layout"
import Head from "../../components/Head"

import blogStyles from "../blog.module.scss"

const ThoughtsPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { frontmatter: { type: { eq: "thought" } } }
      ) {
        edges {
          node {
            frontmatter {
              title
              date(formatString: "MMMM DD, YYYY")
            }
            timeToRead
            fields {
              slug
            }
          }
        }
      }
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Thoughts" />
      <h3>Thoughts and Ideas</h3>
      <span style={{ marginBottom: "0.5rem" }}>
        <Link to="/thoughts/tags">Tags</Link> |{" "}
        <Link to="/thoughts/rss.xml">RSS</Link> |{" "}
        <Link to="/discussions">Discussions</Link>
      </span>
      <span style={{ marginBottom: "1.1rem" }}>
        Filter: <Link to="/thoughts/tags/essay">Essays</Link> |{" "}
        <Link to="/thoughts/tags/book">Books</Link> |{" "}
        <Link to="/thoughts/tags/movie">Movies</Link> |{" "}
        <Link to="/thoughts/tags/tv-show">TV Shows</Link>
      </span>
      <ol className={blogStyles.articles}>
        {data.allMarkdownRemark.edges.map((edge, idx) => {
          const { title, date } = edge.node.frontmatter

          return (
            <li className={blogStyles.article} key={idx}>
              <Link to={`/thoughts/${edge.node.fields.slug}`}>
                <span>{title}</span>
              </Link>
              <br />
              <span className={blogStyles.description}>
                <small>
                  {date} &bull; {edge.node.timeToRead} min read &bull;{" "}
                  <i className="fas fa-link"></i>{" "}
                  <a
                    href={`${data.site.siteMetadata.siteUrl}/thoughts/${edge.node.fields.slug}`}
                    style={{ borderBottom: "unset" }}
                  >
                    permalink
                  </a>
                </small>
              </span>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default ThoughtsPage
