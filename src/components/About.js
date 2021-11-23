import React from 'react'
import { useState, useEffect } from 'react'

function About() {

    const [data, setData] = useState("")

    console.log("->>- DEBUG: before useEffect")

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(text => setData(text.title))
    }, [])

    console.log("-<<- DEBUG: after useEffect")

    console.log(data)


    return (
        <div>
            <h2> About page </h2>
            <p> {data} </p>
        </div>
    )
}

export default About
