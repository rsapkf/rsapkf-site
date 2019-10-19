module.exports = {
    siteMetadata: {
        title: 'rsapkf',
        author: 'rsapkf',
        description: 'rsapkf-site',
        siteUrl: 'https://rsapkf.netlify.com',
        social: {
            mastodon: '@SecretAgentRandyBeans',
        }
    },
    pathPrefix: '/',
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
                        url: site.siteMetadata.siteUrl + '/blog/' + edge.node.fields.slug,
                        guid: site.siteMetadata.siteUrl + '/blog/' + edge.node.fields.slug,
                        custom_elements: [{ "content:encoded": edge.node.html }],
                      })
                    })
                  },
                  query: `
                    {
                      allMarkdownRemark(
                        sort: { order: DESC, fields: [frontmatter___date] },
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
                  output: "/rss.xml",
                  title: "rsapkf's RSS Feed",
                },
              ],
            },
          },
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sass',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'src',
                path: `${__dirname}/src/`
            }
        },
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    'gatsby-remark-relative-images',
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            maxWidth: 750,
                            linkImagesToOriginal: false
                        }
                    },
                    {
                      resolve: 'gatsby-remark-prismjs',
                      options: {
                        inlineCodeMarker: '÷',
                      },
                    },
                ],
            }
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
              trackingId: "UA-150101522-1",
              // // Defines where to place the tracking script - `true` in the head and `false` in the body
              // head: false,
              // // Setting this parameter is optional
              // anonymize: true,
              // // Setting this parameter is also optional
              // respectDNT: true,
              // // Avoids sending pageview hits from custom paths
              // exclude: ["/preview/**", "/do-not-track/me/too/"],
              // // Delays sending pageview hits on route update (in milliseconds)
              // pageTransitionDelay: 0,
              // // Enables Google Optimize using your container Id
              // // optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
              // // Enables Google Optimize Experiment ID
              // // experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
              // // Set Variation ID. 0 for original 1,2,3....
              // // variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
              // // Any additional optional fields
              // sampleRate: 5,
              // siteSpeedSampleRate: 10,
              // cookieDomain: "example.com",
        },
      }
    ]
  }
