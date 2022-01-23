import React from 'react'
import {Link} from 'react-router-dom'

function AccountBalance(props) {
    return (
           <div className="balance">
               Balance: {props.accountBalance}
           </div>           
    ) 
}

export default AccountBalance