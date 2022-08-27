import React from 'react'

import { useContext } from 'react'
import SiteContext from './context/SiteContext'

export default function SwitchTheme() {

    const { theme, setTheme } = useContext(SiteContext);

    return (
        <div>
            <h2>Theme - {theme}</h2>
            <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Switch theme</button>
        </div>
    )
}
