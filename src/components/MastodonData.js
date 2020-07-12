import React, { useState, useEffect } from 'react'
import axios from 'axios';

import Layout from '../components/Layout'
import Head from '../components/Head'
import Spinner from './Spinner'

const MASTODON_ID = '942182'

const MastodonData = ({ tag }) => {

    const [response, setResponse] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {

        const fetchData = async () => {
            try {
                const res = await axios.get(`https://mastodon.social/api/v1/accounts/${MASTODON_ID}/statuses`)
                setResponse(res.data)
                setIsLoading(false)
            } catch (error) {
                setResponse('Error')
                setIsLoading(false)
            }
        }

        fetchData()
    }, [])

    return (
        <Layout>
            <Head title={tag === 'microblog' ? 'Microblog' : 'Linklog'} />
            <h3>{tag === 'microblog' ? 'Microblog' : 'Linklog'}</h3>
            <p>These {tag} items are sourced from my <a href="https://mastodon.social/@rsapkf">Mastodon toots</a> (tagged with #{tag}). If there's any error on this site, check out my Mastodon profile.</p>
            {isLoading ? (
                <Spinner />
            ) : response.constructor === Array ? (
                <ul>
                    {response.map(item => (
                        item.tags[0] && item.tags[0].name.includes(tag) &&
                        <li key={item.id}><a href={item.url}>{item.created_at}</a><div dangerouslySetInnerHTML={{ __html: item.content.replace(/\<br\ \/\>.*/gi, '') }} /></li>
                    ))}
                </ul>
            ) : (
                        <div style={{ border: '1px solid #d6133d', borderRadius: '20px', padding: '20px' }}>
                            <p>Oops, There seems to be a problem loading resources. One of these things happened:</p>
                            <ul>
                                <li>There is a problem with Mastodon API (Rate limit exceeded?)</li>
                                <li>My code broke.</li>
                            </ul>
                            <p><a href="/contact">Help me fix this?</a></p>
                        </div>
                    )}
        </Layout>
    )
}

export default MastodonData
