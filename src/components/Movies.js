import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from 'antd'

export const Movies = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(
                "https://the-one-api.herokuapp.com/v1/movie",
                { headers: { Authorization: "Bearer LfbRLQWWIRQ1Gbi755js" } }
            )
            setMovies(response.data.docs)
            console.log(response.data.docs)
        }
        fetchData()
    }, [])

    return (
        <div style={{ background: '#ECECEC', padding: '30px' }}>
            <Card title="Card title" bordered={false} style={{ width: 300 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
            </Card>
        </div>
    )
}