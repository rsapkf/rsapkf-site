import React, { useState, useEffect } from "react"
import axios from "axios"
import githubProjectDataStyles from "./githubprojectdata.module.scss"

const GITHUB_USERNAME = "rsapkf"

const GitHubProjectData = ({ project }) => {
  const [starsCount, setStarsCount] = useState(0)
  const [forksCount, setForksCount] = useState(0)
  const [description, setDescription] = useState("")
  const [projectWebsite, setProjectWebsite] = useState("")

  const starsgazersURL = `https://github.com/${GITHUB_USERNAME}/${project.name}/stargazers`
  const forksURL = `https://github.com/${GITHUB_USERNAME}/${project.name}/network/members`

  useEffect(() => {
    const fetchData = project => {
      axios
        .get(`https://api.github.com/repos/${GITHUB_USERNAME}/${project.name}`)
        .then(result => {
          setStarsCount(result.data.stargazers_count)
          setForksCount(result.data.forks_count)
          setDescription(result.data.description)
          setProjectWebsite(result.data.homepage)
        })
        .catch(error => {
          // uses data from projectsBackup (../pages/projects) array if API is down
          setStarsCount(project.stargazers_count)
          setForksCount(project.forks_count)
          setDescription(project.description)
          setProjectWebsite(project.homepage)
        })
    }

    fetchData(project)
  }, [])

  return (
    <>
      [
      <a href={`https://github.com/${GITHUB_USERNAME}/${project.name}`}>
        <b>{`${GITHUB_USERNAME}/${project.name}`}</b>
      </a>
      ]: {description}
      <br />
      {projectWebsite && [
        <>
          Homepage: <a href={projectWebsite}>{projectWebsite}</a>
          <br />
        </>,
      ]}
      {starsCount > 0 && (
        <div className={githubProjectDataStyles.metrics}>
          <span className={githubProjectDataStyles.metric}>Stars</span>:{" "}
          <a
            href={starsgazersURL}
            className={githubProjectDataStyles.metricCount}
          >
            {" "}
            {starsCount}
          </a>{" "}
          • <span className={githubProjectDataStyles.metric}>Forks</span>:{" "}
          <a href={forksURL} className={githubProjectDataStyles.metricCount}>
            {" "}
            {forksCount}
          </a>
        </div>
      )}
    </>
  )
}

export default GitHubProjectData
