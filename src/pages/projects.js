import React from 'react'
import { Link } from 'gatsby'

import Layout from "../components/layout"
import Head from '../components/head'

const ProjectsPage = () => {
    return (
        <Layout>
            <Head title="Projects"/>
            <h3>Projects</h3>
            I'm working on a few projects that aren't yet ready to be launched. All projects will be open sourced upon release. Please follow via <a href="/rss.xml">RSS</a> to get notified.
            <br /><br />
            <p>For other smaller projects that I'm working on, see my <a href="https://github.com/rsapkf">GitHub</a> profile:</p>
            <ul style={{ 
                fontFamily: 'Yeon Sung',
                fontSize: '1.0rem',
             }}>
                <li>goodies: personal knowledge base <br /><object data="https://img.shields.io/github/stars/rsapkf/goodies?label=Star&amp;style=social"></object></li>
                <li>dotfiles: my dev environment <br /><object data="https://img.shields.io/github/stars/rsapkf/dotfiles?label=Star&amp;style=social"></object></li>
            </ul>
        </Layout>
    )
}

export default ProjectsPage