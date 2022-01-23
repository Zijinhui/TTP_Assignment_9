import React from 'react'
import {Link} from 'react-router-dom'

function UserProfile(props) {
    return (
        <div>
            <nav>
                <ul className="bar">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/AccountBalance">AccountBalance</Link>
                    </li>
                </ul>
            </nav>
            <h1>User Profile</h1>

            <div>Username: {props.userName}</div>
            <div>Member Since: {props.memberSince}</div>
        </div>
    )
}

export default UserProfile