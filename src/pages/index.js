import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Head from "../components/Head"
import indexStyles from "./index.module.scss"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h3>
        <u>Welcome to </u>
        <span className={indexStyles.title}>rsapkf</span>
        <u>'s Home Page</u>!
      </h3>
      <p>
        I mostly work with [
        <a href="https://github.com/django/django">Python / Django</a>] and the
        [
        <a href="https://www.startpage.com/do/metasearch.pl?query=mern%20stack">
          MERN Stack
        </a>
        ]. I also work with [
        <a href="https://github.com/pallets/flask">Python / Flask</a>], and a
        few other CSS and JavaScript Frameworks / Libraries and the{" "}
        <a href="https://jamstack.org/">JAMstack</a>.
      </p>
      <br />
      <p>
        Please see [<Link to="/technologies">Technologies</Link>] page for
        details.
      </p>
      <hr />
      <p>
        Need a developer? <Link to="/contact">Contact me</Link>.
      </p>
    </Layout>
  )
}

export default IndexPage
