const path = require("path")
const _ = require("lodash")

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const slug = node.frontmatter.slug
      ? `${node.frontmatter.slug}`
      : path.basename(node.fileAbsolutePath, ".md")

    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

// Posts
async function createPostPages({ graphql, actions }, postType) {
  const { createPage } = actions
  const postTemplate = path.resolve(`./src/templates/post.js`)
  const tagTemplate = path.resolve(`./src/templates/tag.js`)
  const res = await graphql(`
    query {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { frontmatter: { type: { eq: "${postType}" } } }
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
        filter: { frontmatter: { type: { eq: "${postType}" } } }
      ) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `)

  const posts = res.data.allMarkdownRemark.edges
  posts.forEach((edge, i) => {
    const prevPost = posts[i + 1]
    const nextPost = posts[i - 1]

    createPage({
      component: postTemplate,
      path: `/${postType}/` + edge.node.fields.slug,
      context: {
        slug: edge.node.fields.slug,
        prevPost,
        nextPost,
        postType,
      },
    })
  })

  // Tags
  const tags = res.data.tagsGroup.group
  tags.forEach(tag => {
    createPage({
      path: `/${postType}/` + "tags/" + _.kebabCase(tag.fieldValue),
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
        postType,
      },
    })
  })
}

exports.createPages = async ({ graphql, actions }) => {
  await Promise.all([
    createPostPages({ graphql, actions }, "blog"),
    createPostPages({ graphql, actions }, "thoughts"),
    createPostPages({ graphql, actions }, "hobbies"),
  ])
}
