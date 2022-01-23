import React from 'react'
import {Link} from 'react-router-dom'
import AccountBalance from './AccountBalance'

function Home(props) {
return (
        <div>
            <nav>
                <ul className="bar"> 
                    <li className="bar-logIn">
                        <Link to="/LogIn">LogIn</Link>
                    </li>            
                    <li>
                        <Link to="/UserProfile">UserProfile</Link>
                    </li> 
                    <li>
                        <Link to="/Debits">Debits</Link>
                    </li>
                    <li>
                        <Link to="/Credits">Credits</Link>
                    </li>
                </ul>
                
            </nav>
            <div className="main">
                <h1>Bank of React</h1>
                <div className="currentBalance">
                <AccountBalance accountBalance={props.accountBalance} />
                </div>
            </div>
            
        </div>
    )
}
export default Home