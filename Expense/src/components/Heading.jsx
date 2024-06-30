import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState';

export default function Heading() {
    const { transactions } = useContext(GlobalContext)

    const amounts = transactions.map(transaction => transaction.amount);

    const total = amounts.reduce((acc, item) => (acc += item), 0);

    const income = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0);

    const expense = (
        amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
        -1
    );
    return (
        <div>
            <h2>Expense Tracker</h2>
            <div>
                <h4>Your Balance</h4>
                <h1>${total}</h1>
            </div>
            <div className="inc-exp-container">
                <div>
                    <h4>Income</h4>
                    <p className="money plus">{income}</p>
                </div>
                <div>
                    <h4>Expense</h4>
                    <p className="money minus">{expense}</p>
                </div>
            </div>
        </div>
    )
}
