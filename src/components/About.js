import React from 'react'
import { useState, useEffect } from 'react'

function About() {

    const [title, setTitle] = useState("")
    const [key, setKey] = useState("")

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(result => {

            setTitle(JSON.stringify(result.title))
            //setTitle(JSON.stringify(result, ['title']));
            //setKey(JSON.stringify(result, ['id']));


            //console.log(result);
            //console.log(`the value of title is ${title}`);
            //console.log(`the value of key is ${key}`);

        }
    )}, [])

    return (
        <div>
            <h2> About page </h2>
            <ul>


                <li> { title } </li>

            { /* <li> {title} </li> */ }

            { /*   { title.map(title => <> key={title.id} title={title.title} </>) }   */ }

            </ul>
        </div>
    )
}

export default About
