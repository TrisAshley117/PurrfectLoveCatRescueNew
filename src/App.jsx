import React from 'react'
import './App.css'
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';

function App() {

  return (
    <>
      <div className="app">
        <Header />
        <div className="Main">
          <Home className="HomePage" />
        </div>
      </div>
    </>
  )
}

export default App
