import axios from "axios"

const GITHUB_USERNAME = "rsapkf"
const baseUrl = "https://api.github.com/"

export const fetchData = async project => {
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
