import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "./index.module.scss"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <h3 className={styles.intro}>
        Developer, Autodidact, Open Source Advocate & GNU/Linux Aficionado.
      </h3>
      <hr />
      <p>
        Hey, I'm <Link to="/about">Rey</Link>. You’ve reached my homepage on the
        World Wide Web.
        <br />
        <br />I make full-stack web applications with modern{" "}
        <a href="https://developer.mozilla.org/en-US/">ES6</a> ,{" "}
        <a href="https://www.startpage.com/do/metasearch.pl?query=mern%20stack">
          MERN Stack
        </a>
        , <a href="https://github.com/django/django">Django</a>, and the{" "}
        <a href="https://jamstack.org/">JAMstack</a>.
        <br /> Please see <Link to="/technologies">Technologies</Link> page for
        details of my technical skills.
        <br />
        <br />
        Read my <Link to="/blog">Blog</Link> for programming articles.
        <br />
        <br />
        Check out <Link to="/thoughts">Thoughts</Link> page for opinions.
        <br />
        <br />I occasionally write about speedcubing and recreational
        mathematics on the <Link to="/hobbies">Hobbies</Link> page.
        <br />
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
