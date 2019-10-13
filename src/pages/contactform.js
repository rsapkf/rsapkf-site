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
                <form action= "/" name="contact" method="post" data-netlify="true">
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
                    <input type="submit" value="SEND"></input>
                </form>
            </div>
        </Layout>
    )
}

export default FormPage