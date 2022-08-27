import './App.css';
import Footer from './Footer';
import Header from './Header';

import SiteContext from './context/SiteContext'
import { useState } from 'react';
import Home from './Home';

function App() {
  const [theme, setTheme] = useState('light')
  const [lang, setLang] = useState('tr')

  const data = {
    theme,
    setTheme,
    lang,
    setLang
  }

  return (
    <SiteContext.Provider value={data} className="App">
      <Home />
    </SiteContext.Provider>
  );
}

export default App;
