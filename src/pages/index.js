import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Head from "../components/Head"
import indexStyles from "./index.module.scss"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h3 className={indexStyles.intro}>
        Welcome to <span className={indexStyles.title}>rsapkf</span>
        's Home Page !
      </h3>
      <p>
        I specialize in making full stack web applications with modern{" "}
        <a href="https://developer.mozilla.org/en-US/">HTML5 + CSS3 + ES6</a> ,{" "}
        <a href="https://github.com/django/django">Django</a> ,{" "}
        <a href="https://www.startpage.com/do/metasearch.pl?query=mern%20stack">
          MERN Stack
        </a>{" "}
        and the <a href="https://jamstack.org/">JAMstack</a>.
        <br /> Please see <Link to="/technologies">Technologies</Link> page for
        details.
        <br />
        <br />
        Read my <Link to="/blog">Blog</Link> for programming articles.
        <br />
        <br />
        Check out <Link to="/thoughts">Thoughts</Link> page for personal ideas,
        book and movie reviews. <br />
        Learn what I'm upto <Link to="/now">right now</Link>.
        <br />
      </p>
      <hr />
      <p>
        Need a developer? <Link to="/contact">Contact me</Link>.
      </p>
    </Layout>
  )
}

export default IndexPage
