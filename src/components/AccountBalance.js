import React from 'react'

function AccountBalance(props) {
    return (
           <div className="balance">
               Balance: {props.accountBalance}
           </div>           
    ) 
}

export default AccountBalance