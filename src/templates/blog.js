import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
      }
      html
      timeToRead
    }
  }
`

const Blog = (props) => {
    return (
        <Layout>
          <Head title={props.data.markdownRemark.frontmatter.title}/>
            <h3>{props.data.markdownRemark.frontmatter.title}</h3>
            <i><small><i className="far fa-calendar"></i> {props.data.markdownRemark.frontmatter.date} | <i class="fas fa-stopwatch"></i> {props.data.markdownRemark.timeToRead} min read</small></i><hr></hr>
            <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}></div>
        </Layout>
    )
}

export default Blog