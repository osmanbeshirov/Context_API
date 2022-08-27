import './App.css';
import SiteContext from './context/SiteContext'
import Home from './Home';

function App() {

  return (
    <SiteContext>
      <Home />
    </SiteContext>
  );
}

export default App;
