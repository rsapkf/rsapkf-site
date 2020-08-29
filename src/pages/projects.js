import React from "react"

import Layout from "../components/Layout"
import Head from "../components/Head"
import GitHubProjectData from "../components/GitHubProjectData"

import { personalProjects, softwareProjects } from "../data/projects"

const ProjectsPage = () => {
  return (
    <Layout>
      <Head title="Projects" />
      <h3>Projects</h3>
      <div style={{ marginBottom: "25px" }}>
        <a href="https://github.com/rsapkf">GitHub</a> &bull;{" "}
        <a href="https://gist.github.com/rsapkf">Gists</a>
      </div>
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
