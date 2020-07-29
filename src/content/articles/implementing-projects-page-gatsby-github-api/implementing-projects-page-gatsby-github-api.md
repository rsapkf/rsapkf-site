---
title: "Implementing /projects page on Gatsby site with GitHub API"
date: "2020-07-12"
lastupdated: "2020-07-13"
spoiler: "Basics of useEffect Hook and some ES6."
tags: ["gatsbyjs", "github"]
posttype: "article"
---

React lifecycle methods and Hooks work the same way in Gatsby as they do in React projects. In this article, we'll be using Hooks to make API calls to GitHub API. Hooks are available with a simple `import` statement.

On this site, I have three pages where I need to fetch data from APIs as of now- on [/projects](/projects) page, I fetch the stars count, forks count, description and homepage for my projects hosted on GitHub and on [/linklog](/linklog) and [/microblog](/microblog), I source content from my Mastodon toots that are tagged with #linklog and #microblog respectively. I will be describing how to implement the latter in a future blog post.

We'll be using functional components and as such React's `useEffect` and `useState` Hooks in this tutorial. Some other things you should be familiar with are `async / await`, template strings, destructuring and `try / catch`.

First, create a file named `githubAPI.js` in `src/services` directory and copy the following code into the file:

```javascript
import axios from "axios"

const GITHUB_USERNAME = "<YOUR_GITHUB_USERNAME>"
const baseUrl = "https://api.github.com/"

export const fetchData = async ({ project }) => {
  try {
    const {
      data: { description, homepage, stargazers_count, forks_count },
    } = await axios.get(`${baseUrl}repos/${GITHUB_USERNAME}/${project.name}`)
    return {
      description,
      homepage,
      stargazers_count,
      forks_count,
    }
  } catch (error) {
    return project
  }
}
```

Here, we'll be using a third-party library called `axios` to make requests to the API. We could use the native `fetch` API for this but axios makes it a lot easier to do advanced stuff like cancelling requests. Next, we are assigning required values to variables. Then, we are creating an asynchronous function called `fetchData` that takes in a `project` object as an argument and calls the API, then returns an object with `description`, `homepage`, `stargazers_count`, `forks_count` properties. These are the only values that we need from the data we get in return from the API. Hence, we destructure these values firsthand. If the request fails, the function will return the initial value for `project` that we can use as a fallback.

We will be importing the `fetchData` function in our component and call it inside the useEffect hook.

Now, create a component in `src/components` called `GitHubStats.js` and put the following code inside:

```javascript
import React, { useState, useEffect } from "react"
import { fetchData } from "../services/githubAPI"

const GITHUB_USERNAME = "<YOUR_GITHUB_USERNAME>"

const GitHubStats = ({ project }) => {
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
      {
        <div>
          <span>Stars</span>: <a href={starsgazersURL}> {starsCount}</a> •{" "}
          <span>Forks</span>: <a href={forksURL}> {forksCount}</a>
        </div>
      }
    </>
  )
}

export default GitHubStats
```

The GitHubStats component takes a `project` object as a prop and calls the fetchData function which returns an object with `description`, `homepage`, `stargazers_count` and `forks_count` keys. On a succesfull API call, these keys will be populated with latest data from GitHub. If the API call fails, these values will contain the respective values for keys in the `project` object that we pass.

Now, we can import the `GitHubStats` component in our `src/pages/projects.js` page:

```javascript
import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import GitHubStats from "../components/GitHubStats"

const projects = [
  {
    name: "project-one",
    description: "Project One description.",
    homepage: "https://project-one.org/",
    stargazers_count: 10,
    forks_count: 5,
  },
  {
    name: "project-two",
    description: "Project Two description.",
    homepage: "https://project-two.org/",
    stargazers_count: 5,
    forks_count: 2,
  },
]

const ProjectsPage = () => {
  return (
    <Layout>
      <ul>
        {projects.map((project, idx) => (
          <li key={idx}>
            <GitHubStats project={project} />
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default ProjectsPage
```

We create an array of objects with backup data to use if API call fails. Then, we map through each of the project and render `GitHubStats` component passing in the `project` as prop. And that's it!

Some things you could now try might be styling the page or separating the backup data into a directory for better [separation of concerns](https://en.wikipedia.org/wiki/Separation_of_concerns).
