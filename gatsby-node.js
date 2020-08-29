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

async function createBlogPages({ graphql, actions }) {
  const { createPage } = actions
  const blogTemplate = path.resolve("./src/templates/blog.js")
  const tagTemplate = path.resolve("./src/templates/blog-tags.js")
  const res = await graphql(`
    query {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { frontmatter: { type: { eq: "article" } } }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              type
            }
          }
        }
      }
      tagsGroup: allMarkdownRemark(
        limit: 2000
        filter: { frontmatter: { type: { eq: "article" } } }
      ) {
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

    createPage({
      component: blogTemplate,
      path: "/blog/" + edge.node.fields.slug,
      context: {
        slug: edge.node.fields.slug,
        prev,
        next,
      },
    })
  })

  // Blog Tags
  const tags = res.data.tagsGroup.group
  tags.forEach(tag => {
    createPage({
      path: "/blog" + "/tags/" + _.kebabCase(tag.fieldValue),
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    })
  })
}

async function createThoughtsPages({ graphql, actions }) {
  const { createPage } = actions
  const thoughtsTemplate = path.resolve("./src/templates/thoughts.js")
  const tagTemplate = path.resolve("./src/templates/thoughts-tags.js")
  const res = await graphql(`
    query {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { frontmatter: { type: { eq: "thought" } } }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              type
            }
          }
        }
      }
      tagsGroup: allMarkdownRemark(
        limit: 2000
        filter: { frontmatter: { type: { eq: "thought" } } }
      ) {
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

    createPage({
      component: thoughtsTemplate,
      path: `/thoughts/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug,
        prev,
        next,
      },
    })
  })

  // Thoughts Tags
  const tags = res.data.tagsGroup.group
  tags.forEach(tag => {
    createPage({
      path: "/thoughts" + "/tags/" + _.kebabCase(tag.fieldValue),
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    })
  })
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  await Promise.all([
    createBlogPages({ graphql, actions }),
    createThoughtsPages({ graphql, actions }),
  ])
}
