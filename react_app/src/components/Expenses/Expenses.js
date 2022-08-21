import React, {useState} from 'react';
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import ExpensesFilter from "./ExpensesFilter";

const Expenses = ({expenses}) => {
    const [selectedValueFilter, setSelectedValueFilter] = useState('2020')

    const filterHandlerChange = (selectedValue) => {
        setSelectedValueFilter(selectedValue)
    }
    const filteredExpenses = expenses.filter((item) => {
        return item.date.getFullYear().toString() === selectedValueFilter

    })
    let expensesContent = <p>Nothing to find</p>;
    if (filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.map((item) => (
            <ExpenseItem key={item.id} title={item.title} date={item.date} price={item.amount}/>
        ))
    }
    return (
        <div>
            <div className='expenses'>
                <ExpensesFilter selectValue={selectedValueFilter} changeFilter={filterHandlerChange}/>
                {expensesContent}
            </div>
        </div>
    );
};

export default Expenses;