import React from 'react'

import { useTranslation } from 'react-i18next';
import { Suspense } from 'react';

import MyHOC from './MyHOC';



function MyContainer() {

    const { t, i18n } = useTranslation();

    const Component = ({ name }) => {
        return <div> Hello { name }! </div>;
    }



    //const wrappedWithName = MyHOC(Component, { name: "Miika"} );

    return (
        <div>
            <h2> MyContainer </h2>
            <p> {t('This is the front page')} </p>
            {/*<p> { MyHOC(Component, { name: "Miika"} ) } </p>*/}
            
        </div>
    )
}

//export default MyContainer

export default function App() {
    return(
        <Suspense fallback="Page is loading...">
            <MyContainer />
        </Suspense>
    )
}