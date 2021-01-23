import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../../components/Layout"
import Head from "../../components/Head"

import blogStyles from "../blog.module.scss"

const HobbiesPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { frontmatter: { type: { eq: "hobby" } } }
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

          return (
            <li className={blogStyles.article} key={idx}>
              <Link to={`/hobbies/${edge.node.fields.slug}`}>
                <span>{title}</span>
              </Link>
              <br />
              <span className={blogStyles.description}>
                <small>
                  <i className="far fa-calendar"></i> {date} |{" "}
                  <i className="fas fa-stopwatch"></i> {edge.node.timeToRead}{" "}
                  min read | <i className="fas fa-link"></i>{" "}
                  <a
                    href={`${data.site.siteMetadata.siteUrl}/hobbies/${edge.node.fields.slug}`}
                    style={{ borderBottom: "unset" }}
                  >
                    permalink
                  </a>
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

export default HobbiesPage
