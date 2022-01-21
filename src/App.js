import './App.css'
import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import AccountBalance from './components/AccountBalance'

function App() {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Home accountBalance={10}/>} />
          <Route path="/AccountBalance" element={<AccountBalance />} />

    
        </Routes>     
      </Router> 
    )  
}

export default App
