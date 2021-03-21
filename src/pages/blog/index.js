import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../../components/Layout"
import Head from "../../components/Head"

import blogStyles from "../blog.module.scss"

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
      <Head title="Blog" />
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
                  {date} &bull; {edge.node.timeToRead} min read &bull;{" "}
                  {tags.slice(0, 4).map(tag => `#${tag} `)} &bull;{" "}
                  <a
                    href={`${data.site.siteMetadata.siteUrl}/blog/${edge.node.fields.slug}`}
                    style={{ borderBottom: "unset" }}
                  >
                    permalink
                  </a>
                  <br />
                  {spoiler}
                </small>
              </span>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
