import axios from "axios"

const MASTODON_ID = "942182"
const baseUrl = "https://mastodon.social/api/v1/"

export const fetchData = async () => {
  try {
    const result = await axios.get(`${baseUrl}accounts/${MASTODON_ID}/statuses`)
    return result.data
  } catch (error) {
    return error.message
  }
}
