import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import Layout from "./Layout"
import Head from "./Head"
import Spinner from "./Spinner"

import { fetchData } from "../services/mastodon-api"
import { formatDate } from "../utils/format-date"
import { capitalizeString } from "../utils/capitalize-string"

const MastodonData = ({ tag }) => {
  const [response, setResponse] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const capitalizedTag = capitalizeString(tag)

  useEffect(() => {
    const fetchMastodonData = async () => {
      const res = await fetchData()
      setResponse(res)
      setIsLoading(false)
    }

    fetchMastodonData()
  }, [])

  return (
    <Layout>
      <Head title={capitalizedTag} />
      <h3>{capitalizedTag}</h3>
      <p
        style={{
          color: "#d6133d",
          fontSize: "1rem",
          fontFamily: "monospace",
        }}
      >
        This is an experimental page.
      </p>
      <p>
        These {tag} items are sourced from my{" "}
        <a href="https://mastodon.social/@rsapkf">Mastodon toots</a> (tagged
        with #{tag}). If there's any error on this site, check out my Mastodon
        profile.
      </p>
      {isLoading ? (
        <Spinner />
      ) : // check to see if statuses got returned or error message
      response.constructor === Array ? (
        <ul>
          {response.map(
            item =>
              item.tags[0] &&
              item.tags[0].name.includes(tag) && (
                <li key={item.id}>
                  <a href={item.url}>{formatDate(item.created_at)}</a>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: item.content.replace(/<br \/>.*/gi, ""),
                    }}
                  />
                </li>
              )
          )}
        </ul>
      ) : (
        <div
          style={{
            border: "1px solid #d6133d",
            borderRadius: "5px",
            padding: "20px",
          }}
        >
          <p
            style={{
              color: "#d6133d",
              fontSize: "1.2rem",
              fontFamily: "monospace",
            }}
          >
            {response}. Guru Meditation.
          </p>
          <p>
            Oops. There seems to be a problem loading resources. If you're still
            connected to the internet, one of these things happened:
          </p>
          <ul>
            <li>There is a problem with Mastodon API (Rate limit exceeded?)</li>
            <li>My code broke.</li>
          </ul>
          <p>
            <Link to="/contact">Help me fix this?</Link>
          </p>
        </div>
      )}
    </Layout>
  )
}

export default MastodonData
