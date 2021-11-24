import React from 'react'
import { useState, useEffect } from 'react'

function About() {

    const [title, setTitle] = useState(null)
    //const [key, setKey] = useState("")

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(result => {

            setTitle((result))
            //setTitle(JSON.stringify(result, ['title']));
            //setKey(JSON.stringify(result, ['id']));


            /* console.log(`the value of result is ${JSON.stringify(result)}`);
            console.log(`the value of title is ${JSON.stringify(title)}`);

            console.log(`the typeof 'result' is ${typeof(result)}`)
            console.log(`the typeof 'title' is ${typeof(title)}`) */

        }
    )}, [])

    //console.log(`the value of result is ${JSON.stringify(result)}`);



    //console.log(`the value of title is ${JSON.stringify(title)}`);

    //console.log(`the typeof 'result' is ${typeof(result)}`)


    //console.log(`the typeof 'title' is ${typeof(title)}`)


    /* jesus this took me fckng forever to fix :(((( */
    /* https://stackoverflow.com/questions/54609282/typeerror-cannot-read-property-map-of-null/54609332 */

    let listItems = []

    if (title)
    {
        listItems = title.map((listItem) => <li key={ listItem.id }> { listItem.title } </li>)
    }

    return (
        <div>
            <h2> About page </h2>
            <ul>
                { listItems } 

            {/*
                { title}
                <li> { title } </li>
            */}
            { /* <li> {title} </li> */ }

            { /*   { title.map(title => <> key={title.id} title={title.title} </>) }   */ }

            </ul>
        </div>
    )
}

export default About
