import React, { useState, useEffect } from "react"
import githubProjectDataStyles from "./githubprojectdata.module.scss"
import { fetchData } from "../services/githubAPI"

const GITHUB_USERNAME = "rsapkf"

const GitHubProjectData = ({ project }) => {
  const [starsCount, setStarsCount] = useState(0)
  const [forksCount, setForksCount] = useState(0)
  const [description, setDescription] = useState("")
  const [projectHomepage, setProjectHomepage] = useState("")

  const starsgazersURL = `https://github.com/${GITHUB_USERNAME}/${project.name}/stargazers`
  const forksURL = `https://github.com/${GITHUB_USERNAME}/${project.name}/network/members`

  useEffect(() => {
    const fetchGitHubData = async () => {
      const res = await fetchData(project)

      setDescription(res.description)
      setProjectHomepage(res.homepage)
      setStarsCount(res.stargazers_count)
      setForksCount(res.forks_count)
    }

    fetchGitHubData(project)
  }, [])

  return (
    <>
      [
      <a href={`https://github.com/${GITHUB_USERNAME}/${project.name}`}>
        {`${GITHUB_USERNAME}/${project.name}`}
      </a>
      ]: {description}
      <br />
      {projectHomepage && [
        <>
          Homepage: <a href={projectHomepage}>{projectHomepage}</a>
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
