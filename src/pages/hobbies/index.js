import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../../components/Layout"
import Head from "../../components/Head"

import blogStyles from "../blog.module.scss"
import {
  CopyToClipboard,
  CopyToClipboardIcon,
} from "../../components/CopyToClipboard"

const HobbiesPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { frontmatter: { type: { eq: "hobbies" } } }
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
      <Head title="Hobbies" />
      <h3>Hobbies</h3>
      <span style={{ marginBottom: "0.5rem" }}>
        <Link to="/hobbies/tags">Tags</Link> |{" "}
        <Link to="/hobbies/rss.xml">RSS</Link> |{" "}
        <Link to="/discussions">Discussions</Link>
      </span>
      <span style={{ marginBottom: "1.1rem" }}>
        Filter: <Link to="/hobbies/tags/cubing">Cubing</Link> |{" "}
        <Link to="/hobbies/tags/chess">Chess</Link>
      </span>
      <ol className={blogStyles.articles}>
        {data.allMarkdownRemark.edges.map((edge, idx) => {
          const { title, date } = edge.node.frontmatter
          const permalink = `${data.site.siteMetadata.siteUrl}/hobbies/${edge.node.fields.slug}`

          return (
            <li className={blogStyles.article} key={idx}>
              <Link to={`/hobbies/${edge.node.fields.slug}`}>
                <span>{title}</span>
              </Link>
              <br />
              <span className={blogStyles.description}>
                <small>
                  {date} &bull; {edge.node.timeToRead} min read{" "}
                  <span className={blogStyles.clipboardSpan}>
                    <CopyToClipboard link={permalink} />
                  </span>
                </small>
              </span>
              <span className={blogStyles.clipboardIcon}>
                <CopyToClipboardIcon link={permalink} />
              </span>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default HobbiesPage
