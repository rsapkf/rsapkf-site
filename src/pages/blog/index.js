import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import {
  CopyPermalink,
  CopyPermalinkIcon,
} from "../../components/copy-permalink"
import styles from "../blog.module.scss"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { frontmatter: { type: { eq: "blog" } } }
      ) {
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
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Blog" />
      <h3>Articles</h3>
      <span style={{ marginBottom: "0.5rem" }}>
        <Link to="/blog/tags">Tags</Link> | <Link to="/blog/rss.xml">RSS</Link>{" "}
        | <Link to="/discussions">Discussions</Link>
      </span>
      <span style={{ marginBottom: "1.1rem" }}>
        Filter: <Link to="/blog/tags/programming">Programming</Link> |{" "}
        <Link to="/blog/tags/linux">Linux</Link> |{" "}
        <Link to="/blog/tags/privacy">Privacy</Link>
      </span>
      <div className={styles.container}>
        <ol className={styles.articles}>
          {data.allMarkdownRemark.edges.map((edge, idx) => {
            const { title, date, spoiler, tags } = edge.node.frontmatter
            const permalink = `${data.site.siteMetadata.siteUrl}/blog/${edge.node.fields.slug}`

            return (
              <li className={styles.article} key={idx}>
                <Link to={`/blog/${edge.node.fields.slug}`}>
                  <span>{title}</span>
                </Link>
                <br />
                <span className={styles.description}>
                  <small>
                    {date} &bull; {edge.node.timeToRead} min read &bull;{" "}
                    {tags.slice(0, 4).map(tag => `#${tag} `)}
                    <span className={styles.clipboardSpan}>
                      <CopyPermalink link={permalink} />
                    </span>
                    <br />
                    {spoiler}
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

export default BlogPage
