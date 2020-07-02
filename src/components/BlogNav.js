import React from 'react';
import { Link } from 'gatsby'
import BlogNavStyles from './BlogNavStyles.module.scss'

export default function BlogNav({ prev, next }) {
    console.log(prev)
    return (
        <div className={BlogNavStyles.container}>
            {prev && (
                <div>
                    <Link to={`/blog/${prev.node.fields.slug}`}>
                        <span className={BlogNavStyles.prev} >← Previous</span><br />
                    </Link>
                    <span className={BlogNavStyles.title}>{prev.node.frontmatter.title}</span>
                </div>
            )}
            {
                next && (
                    <div>
                        <Link to={`/blog/${next.node.fields.slug}`}>
                            <span className={BlogNavStyles.next}>Next →</span><br />
                        </Link>
                        <span className={BlogNavStyles.title}>{next.node.frontmatter.title}</span>
                    </div>
                )
            }
        </div >
    );
}