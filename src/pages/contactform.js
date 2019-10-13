import React from 'react'
import { Link } from 'gatsby'

import contactformStyles from './contactform.module.scss'
import Layout from "../components/layout"
import Head from '../components/head'

const FormPage = () => {
    return (
        <Layout>
            <Head title="Contact Form"/>
            <div className={contactformStyles.container}>
                <form action= "/" name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true">
                    <p class="hidden" style={{ visibility:"hidden"}}>
                    <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
                    </p>
                    <p>
                        <label for="name">NAME</label><br></br>
                        <input id="text" name="text" type="text" />
                    </p>
                    <p>
                        <label for="email">EMAIL</label><br></br>
                        <input id="text" name="text" type="text" />
                    </p>
                    <p>
                        <label for="subject">MESSAGE</label><br></br>
                        <textarea id="subject" name="subject" placeholder="Your Message..." style={{ height: '200px' }}></textarea>
                    </p>
                    <button type="submit">SEND</button>
                </form>
            </div>
        </Layout>
    )
}

export default FormPage