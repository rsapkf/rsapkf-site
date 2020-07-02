import React from "react"
import { navigate } from "gatsby-link"
import Layout from "../components/Layout"
import Head from "../components/Head"

import formStyles from "./form.module.scss"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export default function Contact() {
  const [state, setState] = React.useState({})

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }

  return (
    <Layout>
      <Head title="Contact Form" />
      <h3>Contact Form</h3>
      <form
        name="contact"
        method="post"
        action="/thanks"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out:{" "}
            <input name="bot-field" onChange={handleChange} />
          </label>
        </p>
        <p>
          <label>
            NAME
            <br />
            <input
              type="text"
              name="name"
              placeholder=""
              onChange={handleChange}
            />
          </label>
        </p>
        <p>
          <label>
            EMAIL
            <br />
            <input
              type="email"
              name="email"
              placeholder=""
              onChange={handleChange}
              required
            />
          </label>
        </p>
        <p>
          <label>
            MESSAGE
            <br />
            <textarea
              name="message"
              placeholder=""
              onChange={handleChange}
              required
            />
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </Layout>
  )
}
