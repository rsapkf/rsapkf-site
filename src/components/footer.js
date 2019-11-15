import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import footerStyles from './footer.module.scss'

const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `)

    return (
        <footer className={footerStyles.footer}>
            <div style={{ float: 'right', fontFamily: 'Source Code Pro'}}>
            {/* <a
            href="https://keybase.io/rsapkf"
            target="_blank"
            rel="noopener noreferrer"
            >
            keybase
            </a>{' '}
            &bull;{' '}
            <a
            href="https://news.ycombinator.com"
            target="_blank"
            rel="noopener noreferrer"
            >
            hn
            </a>{' '}
            &bull;{' '} */}
            {/* <a
            href="https://github.com/rsapkf/rsapkf-site"
            target="_blank"
            rel="noopener noreferrer"
            style={{ pointerEvents: 'none' }}
            >
            source
            </a>{' '}
            &bull;{' '} */}
            <a
            href="https://github.com/rsapkf"
            target="_blank"
            rel="noopener noreferrer"
            >
            github
            </a>{' '}
            &bull;{' '}
            <a href="/rss.xml" target="_blank" rel="noopener noreferrer">
                rss
            </a>{' '}
            &bull;{' '}
            <a
            href="https://github.com/rsapkf/rsapkf-site"
            target="_blank"
            rel="noopener noreferrer"
	    // style={{ pointerEvents: 'none' }}
            >
            source
            </a>
            </div>
            <p>© 2019 {data.site.siteMetadata.author}</p>
        </footer>
    )
}

export default Footer
