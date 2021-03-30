import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import {
  CopyPermalink,
  CopyPermalinkIcon,
} from "../../components/copy-permalink"

import styles from "../blog.module.scss"

const ThoughtsPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { frontmatter: { type: { eq: "thoughts" } } }
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
      <SEO title="Thoughts" />
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
      <div className={styles.container}>
        <ol className={styles.articles}>
          {data.allMarkdownRemark.edges.map((edge, idx) => {
            const { title, date } = edge.node.frontmatter
            const permalink = `${data.site.siteMetadata.siteUrl}/thoughts/${edge.node.fields.slug}`

            return (
              <li className={styles.article} key={idx}>
                <Link to={`/thoughts/${edge.node.fields.slug}`}>
                  <span>{title}</span>
                </Link>
                <br />
                <span className={styles.description}>
                  <small>
                    {date} &bull; {edge.node.timeToRead} min read{" "}
                    <span className={styles.clipboardSpan}>
                      <CopyPermalink link={permalink} />
                    </span>
                  </small>
                </span>
                <span className={styles.clipboardIcon}>
                  <CopyPermalinkIcon link={permalink} />
                </span>
              </li>
            )
          })}
        </ol>
      </div>
    </Layout>
  )
}

export default ThoughtsPage
