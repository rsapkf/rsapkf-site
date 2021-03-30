import React from "react"
import PropTypes from "prop-types"

import kebabCase from "lodash/kebabCase"

import { Link, graphql } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

import styles from "../tags.module.scss"

const ThoughtsTagsPage = ({
  data: {
    allMarkdownRemark: { group },
  },
}) => (
  <Layout>
    <SEO title="Tags • Thoughts" />
    <div>
      <h3>Thoughts &gt;&gt; Tags</h3>
      <span className={styles.container}>
        {group.map(tag => (
          <Link
            to={`/thoughts/tags/${kebabCase(tag.fieldValue)}/`}
            key={tag.fieldValue}
            className={styles.tag}
          >
            {tag.fieldValue} ({tag.totalCount})
          </Link>
        ))}
      </span>
    </div>
  </Layout>
)

ThoughtsTagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}

export default ThoughtsTagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 2000
      filter: { frontmatter: { type: { eq: "thoughts" } } }
    ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
