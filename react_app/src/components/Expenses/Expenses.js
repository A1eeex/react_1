import React from 'react';
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'

const Expenses = ({expenses}) => {
    return (
        <div className='expenses'>
            <ExpenseItem title={expenses[0].title} date={expenses[0].date} price={expenses[0].amount}/>
            <ExpenseItem title={expenses[1].title} date={expenses[1].date} price={expenses[1].amount}/>
            <ExpenseItem title={expenses[2].title} date={expenses[2].date} price={expenses[2].amount}/>

        </div>

    );
};

export default Expenses;