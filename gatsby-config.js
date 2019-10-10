module.exports = {
    siteMetadata: {
        title: 'rsapkf',
        author: 'rsapkf',
        description: 'rsapkf-site',
        siteUrl: 'https://rsapkf.netlify.com/',
        social: {
            mastodon: '@SecretAgentRandyBeans',
        }
    },
    // pathPrefix: '/',
    plugins: [
        `gatsby-plugin-feed`,
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
                    }
                ],
            }
        }
    ]
}
