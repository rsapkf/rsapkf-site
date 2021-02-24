import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"
import Head from "../components/Head"
import PostNav from "../components/PostNav"

import postTemplateStyles from "./posttemplate.module.scss"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        lastupdated(formatString: "MMMM DD, YYYY")
        tags
      }
      html
      timeToRead
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`

const Hobby = props => {
  const {
    title,
    date,
    lastupdated,
    tags,
  } = props.data.markdownRemark.frontmatter

  return (
    <Layout>
      <Head title={`${title} • Hobbies`} />
      <h3 className={postTemplateStyles.title}>{title}</h3>
      <small>
        {date} &bull; {props.data.markdownRemark.timeToRead} min read &bull;{" "}
        <i className="fas fa-tags"></i>{" "}
        {tags.slice(0, 4).map((tag, i) => (
          <span>
            <Link to={`/hobbies/tags/${tag}`} style={{ borderBottom: "unset" }}>
              #{tag}
            </Link>{" "}
          </span>
        ))}{" "}
        &bull; <i className="fas fa-link"></i>
        <Link
          to={`${props.data.site.siteMetadata.siteUrl}${props.location.pathname}`}
          style={{ borderBottom: "unset" }}
        >
          permalink
        </Link>
      </small>
      <hr />
      <div
        dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
      ></div>
      <small>
        <i>Last Updated: {lastupdated}</i>
      </small>
      <hr />
      <PostNav
        prev={props.pageContext.prevHobby}
        next={props.pageContext.nextHobby}
        posttype="hobbies"
      />
      <br />
      <span style={{ marginTop: "20px" }}>
        Got suggestions or feedback ? <Link to="/contact">Contact</Link> me!
      </span>
    </Layout>
  )
}

export default Hobby
