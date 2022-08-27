import React from 'react'

import { useContext } from 'react';
import SiteContext, { Context } from './context/SiteContext'

export default function SwitchLang() {

    const { lang, setLang } = useContext(Context);

    return (
        <div>
            <h1>Language - {lang} </h1>
            <button onClick={() => setLang(lang === 'tr' ? 'eng' : 'tr')}>Switch lang</button>
        </div>
    )
}
