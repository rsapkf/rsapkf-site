import React from 'react';
import { Link } from 'gatsby'
import blogNavStyles from './blognav.module.scss'

export default function BlogNav({ prev, next }) {
    console.log(prev)
    return (
        <div className={blogNavStyles.container}>
            {prev && (
                <div>
                    <Link to={`/blog/${prev.node.fields.slug}`}>
                        <span className={blogNavStyles.prev} >← Previous</span><br />
                    </Link>
                    <span className={blogNavStyles.title}>{prev.node.frontmatter.title}</span>
                </div>
            )}
            {
                next && (
                    <div>
                        <Link to={`/blog/${next.node.fields.slug}`}>
                            <span className={blogNavStyles.next}>Next →</span><br />
                        </Link>
                        <span className={blogNavStyles.title}>{next.node.frontmatter.title}</span>
                    </div>
                )
            }
        </div >
    );
}