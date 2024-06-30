import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState'

export default function MiddlePart() {
    const { transactions, deleteTransaction } = useContext(GlobalContext)
    const sign = transactions.amount < 0 ? "-" : "+"
    return (
        <div>
            <h3>History</h3>
            <ul className="list">
                {
                    transactions.map(tran => (
                        <li key={tran.id} className={tran.amount < 0 ? "minus" : "plus"}>
                            {tran.text} <span>{sign}${Math.abs(tran.amount)}</span><button onClick={() => deleteTransaction(tran.id)} className='delete-btn'>X</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
