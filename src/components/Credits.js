import React from 'react'
import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import AccountBalance from './AccountBalance'

function Credits(props) {
    const [transactions, setTransactions] = useState([])
    const [record, setRecord] = useState({
        description: "",
        amount: "",
        date: ""
    })

    useEffect(() => {
        fetch("https://moj-api.herokuapp.com/credits")
        .then((res) =>res.json())
        .then((data) => setTransactions(data))
        .catch((error) => {
            console.log(error.message)
        })
    }, [])

    console.log(transactions)
    const display = transactions.sort((a, b) => new Date(b.date) - new Date(a.date)).map((transaction, index) => {
        return(
            <div key={index} className="record">
                <span className="description-record">{transaction.description}</span>
                <span className="amount-record">${transaction.amount}</span>
                <p>{transaction.date}</p>
            </div>
        
    )})

    const updateAmount = (e)  => {
        setRecord({...record, amount: e.target.value})
    }

    const updateDescription = (e) => {
        setRecord({...record, description: e.target.value, date: new Date().toLocaleString().replace(",", "").replace(/:.. /," ")})
    }
    
    function handleSubmit(e) {
        e.preventDefault()
        //Push a new record into transctions
        setTransactions(transactions =>[...transactions, record])
        // Pass current input amount to upadeBalance() from App.js(Parent)
        props.updateBalance(record.amount)
        
    }

    return(
        <div className="Credits">
            <nav>
                <ul className="bar">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/UserProfile">UserProfile</Link>
                    </li>
                    <li>
                        <Link to="/Debits">Debits</Link>
                    </li>
                </ul>

            </nav>
            <h1>Credits</h1>
            <div className="currentBalance">
                <AccountBalance accountBalance={props.accountBalance} />
            </div>
            

            <div className="inputDebit">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Enter Amount</label> 
                        <input type="text" name="amount" value={record.amount} onChange={updateAmount} />                               
                    </div>
                    <div className="desc-box">
                        <label >Enter Deacription</label> 
                        <input type="text" name="description" value={record.description} onChange={updateDescription}/>                      
                    </div>
                    <button>Add Credits</button>
                </form>
            </div>

            <div className="transactions-table">
                <h3>Credits Transactions</h3>
                <div className="records">
                    {display}
                </div>
            

            </div>
        </div>
    )
}

export default Credits