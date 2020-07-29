import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/Layout"
import Head from "../components/Head"

import blogStyles from "./blog.module.scss"

const ThoughtsPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { frontmatter: { posttype: { eq: "thought" } } }
      ) {
        edges {
          node {
            frontmatter {
              title
              date(formatString: "MMMM DD, YYYY")
              posttype
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
      <h3>Thoughts</h3>
      <p>
        The ideas / opinions here are my own. These might not be objectively
        true.
      </p>
      <span>
        <Link to="/thoughts/rss.xml">RSS</Link>
        <details style={{ marginTop: "0.5rem" }}>
          <summary className={blogStyles.summary}>Discussions</summary>
          <div>
            <a href="https://news.ycombinator.com/from?site=rsapkf.xyz">
              Hacker News
            </a>
            ,{" "}
            <a href="https://news.ycombinator.com/from?site=rsapkf.netlify.com">
              2
            </a>
            ,{" "}
            <a href="https://news.ycombinator.com/from?site=rsapkf.netlify.app">
              3
            </a>
            <br />
            <a href="https://reddit.com/domain/rsapkf.xyz">Reddit</a>,{" "}
            <a href="https://reddit.com/domain/rsapkf.netlify.com">2</a>,{" "}
            <a href="https://reddit.com/domain/rsapkf.netlify.app">3</a>
          </div>
        </details>
      </span>
      <ol className={blogStyles.articles}>
        {data.allMarkdownRemark.edges.map((edge, idx) => {
          const { title, date, posttype } = edge.node.frontmatter

          return (
            <li className={blogStyles.article} key={idx}>
              <Link to={`/thoughts/${edge.node.fields.slug}`}>
                <span>{title}</span>
              </Link>
              <br />
              <span className={blogStyles.description}>
                <small>
                  <i className="far fa-calendar"></i> {date} |{" "}
                  <i className="fas fa-stopwatch"></i> {edge.node.timeToRead}{" "}
                  min read | <i className="fas fa-link"></i>{" "}
                  <Link
                    to={`${data.site.siteMetadata.siteUrl}/thoughts/${edge.node.fields.slug}`}
                    style={{ borderBottom: "unset" }}
                  >
                    permalink
                  </Link>
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

export default ThoughtsPage
