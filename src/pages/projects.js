import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Head from "../components/Head"
import GitHubProjectData from "../components/GitHubProjectData"

const softwareProjects = [
  {
    name: "gnureadline-reference",
    description:
      "Comprehensive GNU Readline Shortcuts Guide for VI + Emacs Editing Modes.",
    homepage: "https://gnureadline-reference.herokuapp.com/",
    stargazers_count: 2,
    forks_count: 0,
  },
  {
    name: "invidious-playlist-duration",
    description:
      "Firefox add-on to view total duration of playlists on Invidio.us.",
    homepage:
      "https://addons.mozilla.org/en-US/firefox/addon/invidious-playlist-duration/",
    stargazers_count: 0,
    forks_count: 0,
  },
  {
    name: "tzinfo",
    description:
      "Tiny application to check and compare local times of major cities of the world.",
    homepage: "https://tzinfo.netlify.com/",
    stargazers_count: 0,
    forks_count: 0,
  },
]

const personalProjects = [
  {
    name: "42",
    description:
      "Collection of GitHub repos, blogs and websites to learn cool things.",
    homepage: "https://rsapkf.github.io/42/",
    stargazers_count: 1868,
    forks_count: 123,
  },
  {
    name: "notes",
    description:
      "Personal notes for Vim, tmux, GNU Bash, zsh, Linux, Programming...",
    homepage: "https://rsapkf.github.io/notes/",
    stargazers_count: 4,
    forks_count: 0,
  },
  {
    name: "dotfiles",
    description: "My Dev Environment.",
    stargazers_count: 0,
    forks_count: 0,
  },
  {
    name: "wallpapers",
    description: "Pesonal Wallpaper Collection.",
    stargazers_count: 0,
    forks_count: 0,
  },
]

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
