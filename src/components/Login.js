import React from 'react'
import { Navigate } from 'react-router-dom'
import {useState} from 'react'

function LogIn(props) {
    const [state, setState] = useState ({
        user: {
            userName: '',
            password: ''
        },
        redirect: false
    }
)
    function handleChange(e) {
        const updatedUser = {...state.user}
        const inputField = e.target.name
        const inputValue = e.target.value
        updatedUser[inputField] = inputValue

        setState({user: updatedUser})
    }

    function handleSubmit(e) {
        e.preventDefault()
        props.mockLogIn(state.user)
        setState({redirect: true})
  }

    if (state.redirect) {
      return (<Navigate to="/userProfile"/>)
    }

    return (
      <div className="logIn">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="userName">User Name</label>
            <input type="text" name="userName" onChange={handleChange} value={state.user.userName} />
          </div>
          <div >
            <label htmlFor="password">Password</label>
            <input type="password" name="password" className="password-input"/>
          </div>
          <button>Log In</button>
        </form>
      </div>
    )
  }


export default LogIn