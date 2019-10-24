import React from 'react'
import { Link } from 'gatsby'

import Layout from "../components/layout"
import Head from '../components/head'

const ProjectsPage = () => {
    return (
        <Layout>
            <Head title="Projects"/>
            <h3>Projects</h3>
            I'm working on a few projects that aren't yet ready to be launched. The projects will be open sourced once they are launched. Please follow via <a href="/rss.xml">RSS</a> to get notified.
            <br /><br />
            <p>For other smaller projects that I'm working on, see my <a href="https://github.com/rsapkf">GitHub</a> profile.</p>
        </Layout>
    )
}

export default ProjectsPage