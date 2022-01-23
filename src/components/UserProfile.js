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
                </ul>
            </nav>
            <h1>User Profile</h1>
            <div className="profile-info">
                <p>Username: {props.userName}</p>
                <p>Member Since: {props.memberSince}</p>
            </div>
            
        </div>
    )
}

export default UserProfile