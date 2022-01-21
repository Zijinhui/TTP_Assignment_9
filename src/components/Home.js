import React from 'react'
import {Link} from 'react-router-dom'
import AccountBalance from './AccountBalance'

function Home(props) {
return (
        <div>
            {/*<img src="https://letstalkpayments.com/wp-content/uploads/2016/04/Bank.png" alt="bank" />*/}
          

            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/AccountBalance">AccountBalance</Link>
                    </li>
                    <li>
                        <Link to="/UserProfile">UserProfile</Link>
                    </li>
                </ul>
                
            </nav>
            <h1>Bank of React</h1>

            <AccountBalance accountBalance={props.accountBalance} />
           
        </div>
    )
}
export default Home