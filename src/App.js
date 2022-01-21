import './App.css'
import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {useState} from 'react'
import Home from './components/Home'
import AccountBalance from './components/AccountBalance'
import UserProfile from './components/UserProfile'

function App() {
  const [user, setUser] = useState({
    accountBalance: 14568.27,
    currentUser: {
      userName: "bob_loblaw",
      memberSince: "08/23/99",
    }
  })
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Home accountBalance={user.accountBalance}/>} />
          <Route path="/AccountBalance" element={<AccountBalance accountBalance={user.accountBalance}/>} />
          <Route path="/UserProfile" element={<UserProfile userName={user.currentUser.userName} memberSince={user.currentUser.memberSince}/>} />

    
        </Routes>     
      </Router> 
    )  
}
// Add below when delopying
//"homepage": "https://Zijinhui.github.io/TTP_Assignment_9/",
export default App
