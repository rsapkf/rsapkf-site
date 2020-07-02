import React from 'react'
import { Link } from 'gatsby'

import Layout from "../components/Layout"
import Head from '../components/Head'

const ThanksPage = () => {
    return (
        <Layout>
            <Head title="Thanks" />
            <h4>Thank you for contacting. Expect a response within 24 hours.</h4>
            <p><Link to="/">Home</Link></p>
        </Layout>
    )
}

export default ThanksPage