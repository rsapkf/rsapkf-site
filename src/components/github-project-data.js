import React, { useState, useEffect } from "react"
import styles from "./github-project-data.module.scss"
import { fetchData } from "../services/github-api"

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
  })

  return (
    <>
      [
      <a href={`https://github.com/${GITHUB_USERNAME}/${project.name}`}>
        {`${GITHUB_USERNAME}/${project.name}`}
      </a>
      ]:{" "}
      {description
        .replace("@rsapkf's ", "")
        .replace(/^\w/, c => c.toUpperCase())}
      <br />
      {projectHomepage && [
        <>
          Homepage: <a href={projectHomepage}>{projectHomepage}</a>
          <br />
        </>,
      ]}
      {starsCount > 0 && (
        <div className={styles.metrics}>
          <span className={styles.metric}>Stars</span>:{" "}
          <a href={starsgazersURL} className={styles.metricCount}>
            {" "}
            {starsCount}
          </a>{" "}
          • <span className={styles.metric}>Forks</span>:{" "}
          <a href={forksURL} className={styles.metricCount}>
            {" "}
            {forksCount}
          </a>
        </div>
      )}
    </>
  )
}

export default GitHubProjectData
