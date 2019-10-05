import React from 'react'
import { Link } from 'gatsby'

import Layout from "../components/layout"
import Head from '../components/head'

const ProjectsPage = () => {
    return (
        <Layout>
            <Head title="Projects"/>
            <h1>Projects</h1>
            <p>See my <a href="https://github.com/rsapkf">GitHub</a> profile for more!</p>
        </Layout>
    )
}

export default ProjectsPage