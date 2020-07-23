import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Head from "../components/Head"
import GitHubProjectData from "../components/GitHubProjectData"

import { personalProjects, softwareProjects } from "../data/projects"

const ProjectsPage = () => {
  return (
    <Layout>
      <Head title="Projects" />
      <h3>Projects</h3>
      <p>
        I'm working on a few projects that aren't yet ready to be launched. All
        projects will be open sourced upon release. Please follow via{" "}
        <Link to="/rss.xml">RSS</Link> to get notified.
      </p>
      <p>
        For other smaller projects that I'm working on, see my{" "}
        <a href="https://github.com/rsapkf">GitHub</a> and{" "}
        <a href="https://gist.github.com/rsapkf">GitHub Gist</a> profile:
      </p>
      <ul>
        <li>
          <h4>Personal:</h4>
          <ul>
            {personalProjects.map((project, idx) => (
              <li key={idx}>
                <GitHubProjectData project={project} />
              </li>
            ))}
          </ul>
        </li>
        <br />
        <hr />
        <li>
          <h4>Software:</h4>
          <ul>
            {softwareProjects.map((project, idx) => (
              <li key={idx}>
                <GitHubProjectData project={project} />
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </Layout>
  )
}

export default ProjectsPage
