import {Link} from 'react-router-dom'
import {useEffect, useState} from 'react'
import AccountBalance from './AccountBalance'
import React from 'react'

function Debits(props) {
    //const [balance, setBalance] = useState("")
    const [transactions, setTransactions] = useState([])
    const [record, setRecord] = useState({
        description: "",
        amount: "",
        date: ""
    })

    useEffect(() => {
        fetch("https://moj-api.herokuapp.com/debits")
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
    //console.log(display)
 


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


    return (
        <div className="Debits">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                </ul>

            </nav>
            <h1>Debits</h1>
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
                    <button>Add Debit</button>
                </form>
            </div>

            <div className="transactions-table">
                <h3>Transactions</h3>
                <div className="records">
                    {display}
                </div>
            

            </div>
        </div>
    )

}

export default Debits