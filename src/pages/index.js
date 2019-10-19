import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const IndexPage = () => {
    return (
        <Layout>
            <Head title="Home" />
            <h3>Hi, I'm rsapkf, currently self-learning Computer Science and Full-Stack Web Development.</h3>
            <p>I mostly work with [<a href="https://github.com/django/django">Python3/Django2</a>] and [<a href="https://github.com/facebook/react">JavaScript/React</a>]. I also work with the [<a href="https://www.startpage.com/do/metasearch.pl?query=mern%20stack">MERN Stack]</a>, [<a href="https://github.com/pallets/flask">Python/Flask</a>], and a few other CSS and JavaScript Libraries and JAMstack Technologies- [<a href="https://github.com/twbs/bootstrap">Bootstrap4</a>], [<a href="https://github.com/gatsbyjs/gatsby">GatsbyJS</a>].</p>
            <br></br>
            <p>Please see [<Link to="/technologies">Technologies</Link>] section for more info!</p>
            <hr></hr>
            <p>Need a developer? <Link to="/contact">Contact me</Link>.</p>
        </Layout>
    )
}

export default IndexPage