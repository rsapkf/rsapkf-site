const path = require("path")
const _ = require("lodash")

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md")

    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve("./src/templates/blog.js")
  const thoughtsTemplate = path.resolve("./src/templates/thoughts.js")
  const tagTemplate = path.resolve("./src/templates/tags.js")
  const res = await graphql(`
    query {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              posttype
            }
          }
        }
      }
      tagsGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `)

  const posts = res.data.allMarkdownRemark.edges

  posts.forEach((edge, i) => {
    const prev = posts[i + 1]
    const next = posts[i - 1]

    if (edge.node.frontmatter.posttype === "thought") {
      createPage({
        component: thoughtsTemplate,
        path: `/thoughts/${edge.node.fields.slug}`,
        context: {
          slug: edge.node.fields.slug,
        },
      })
    } else {
      createPage({
        component: blogTemplate,
        path: `/blog/${edge.node.fields.slug}`,
        context: {
          slug: edge.node.fields.slug,
          prev,
          next,
        },
      })
    }
  })

  // Extract tag data from query
  const tags = res.data.tagsGroup.group
  // Make tag pages
  tags.forEach(tag => {
    createPage({
      path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    })
  })
}
