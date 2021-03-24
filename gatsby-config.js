module.exports = {
  siteMetadata: {
    title: "rsapkf",
    author: "rsapkf",
    description: "rsapkf",
    siteUrl: "https://rsapkf.xyz",
    social: {
      mastodon: "@rsapkf",
    },
  },
  pathPrefix: "/",
  plugins: [
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
                {
                  site {
                    siteMetadata {
                      title
                      description
                      siteUrl
                      site_url: siteUrl
                    }
                  }
                }
              `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url:
                    site.siteMetadata.siteUrl +
                    "/blog/" +
                    edge.node.fields.slug,
                  guid:
                    site.siteMetadata.siteUrl +
                    "/blog/" +
                    edge.node.fields.slug,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                })
              })
            },
            query: `
                    {
                      allMarkdownRemark(
                        sort: { order: DESC, fields: [frontmatter___date] },
                        filter: {
                          frontmatter: { posttype: { eq: "article" } }
                        }
                      ) {
                        edges {
                          node {
                            excerpt
                            html
                            fields { slug }
                            frontmatter {
                              title
                              date
                            }
                          }
                        }
                      }
                    }
                  `,
            output: "/blog/rss.xml",
            title: "rsapkf's RSS Feed Blog",
          },
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url:
                    site.siteMetadata.siteUrl +
                    "/thoughts/" +
                    edge.node.fields.slug,
                  guid:
                    site.siteMetadata.siteUrl +
                    "/thoughts/" +
                    edge.node.fields.slug,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                })
              })
            },
            query: `
                    {
                      allMarkdownRemark(
                        sort: { order: DESC, fields: [frontmatter___date] },
                        filter: {
                          frontmatter: { posttype: { eq: "thought" } }
                        }
                      ) {
                        edges {
                          node {
                            excerpt
                            html
                            fields { slug }
                            frontmatter {
                              title
                              date
                              posttype
                            }
                          }
                        }
                      }
                    }
                  `,
            output: "/thoughts/rss.xml",
            title: "rsapkf's RSS Feed Thoughts",
          },
        ],
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve(`./src/components/Layout.js`),
        },
      },
    },
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: "gatsby-remark-prismjs",
            options: {
              inlineCodeMarker: "÷",
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-150101522-1",
      },
    },
  ],
}
