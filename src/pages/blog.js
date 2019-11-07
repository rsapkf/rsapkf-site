import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import blogStyles from './blog.module.scss'
import Head from '../components/head'

const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            date(formatString: "MMMM DD, YYYY")
                        }
                        timeToRead
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)

    return (
        <Layout>
            <Head title="Blog"/>
            <u><h3>Articles</h3></u>
            <ol className={blogStyles.posts}>
                {data.allMarkdownRemark.edges.map((edge) => {
                    return (
                        <li className={blogStyles.post}>
                            <Link to={`/blog/${edge.node.fields.slug}`}>
                                <h4>{edge.node.frontmatter.title}</h4>
                                <span><small><i className="far fa-calendar"></i> {edge.node.frontmatter.date} | <i class="fas fa-stopwatch"></i> {edge.node.timeToRead} min read</small></span>
                            </Link>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

export default BlogPage
