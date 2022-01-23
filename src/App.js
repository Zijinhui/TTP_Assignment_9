import './App.css'
import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {useState} from 'react'
import Home from './components/Home'
import AccountBalance from './components/AccountBalance'
import UserProfile from './components/UserProfile'
import LogIn from './components/Login'
import Debits from './components/Debits'

function App() {

  const [user, setUser] = useState({
    accountBalance: 14568.27,
    currentUser: {
      userName: "bob_loblaw",
      memberSince: "08/23/99",
    }
  })

  function mockLogIn(logInInfo) {
    const newUser = {...user.currentUser}
    newUser.userName = logInInfo.userName
    setUser({currentUser: newUser})
  }

  function updateBalance(amount) {
    const sum = Number(user.accountBalance) + Number(amount)
    // If do not add ...user, then only accountBalance of state will be save and rest of state will be removed
    setUser({...user,accountBalance: sum})
  }
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Home accountBalance={user.accountBalance}/>} />
          <Route path="/AccountBalance" element={<AccountBalance accountBalance={user.accountBalance}/>} />
          <Route path="/UserProfile" element={<UserProfile userName={user.currentUser.userName} memberSince={user.currentUser.memberSince}/>} />
          <Route path="/LogIn" element={<LogIn user={user.currentUser} mockLogIn={mockLogIn} />} />
          <Route path="/Debits" element={<Debits accountBalance={user.accountBalance} updateBalance={updateBalance}/>}/>
        </Routes>     
      </Router> 
    )  
}
// Add below when delopying
//"homepage": "https://Zijinhui.github.io/TTP_Assignment_9/",
export default App
