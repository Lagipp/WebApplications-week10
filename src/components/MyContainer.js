import React from 'react'

import { useTranslation } from 'react-i18next';
import { Suspense } from 'react';




function MyContainer() {

    const { t, i18n } = useTranslation();

    return (
        <div>
            <h2> MyContainer </h2>
            <p> {t('This is the front page')} </p>
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