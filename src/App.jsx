import {React, useState} from 'react'
import './App.css'
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx'
import Home from './components/Home.jsx';
import Donate from './components/Donate.jsx';

function App() {

  const [activePage, setActivePage] = useState("Home")

  const NavigateToPage = (NewPageKey) => {
      if (NewPageKey != activePage)
      {
        setActivePage(NewPageKey);
      }
  }

  return (
    <>
      <div className="app">
        <Header NavigateCommand={NavigateToPage} />
        <div className="Main">
          <div className="ActivePage">
            {
              activePage === "Home" ? <Home /> :
              activePage === "Donate" ? <Donate /> :
              <div>Page Navigation Error</div>
            }
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
