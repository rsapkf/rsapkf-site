import axios from "axios"

import { MASTODON_ID } from "../constants"
const baseUrl = "https://mastodon.social/api/v1/"

export const fetchData = async () => {
  try {
    const result = await axios.get(`${baseUrl}accounts/${MASTODON_ID}/statuses`)
    return result.data
  } catch (error) {
    return error.message
  }
}
