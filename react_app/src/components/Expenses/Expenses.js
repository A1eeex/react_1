import React, {useState} from 'react';
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = ({expenses}) => {
    const [selectedValueFilter, setSelectedValueFilter] = useState('2020')

    const filterHandlerChange = (selectedValue) => {
        setSelectedValueFilter(selectedValue)
    }
    const filteredExpenses = expenses.filter((item) => {
        return item.date.getFullYear().toString() === selectedValueFilter

    })


    return (
        <div>
            <div className='expenses'>
                <ExpensesFilter selectValue={selectedValueFilter} changeFilter={filterHandlerChange}/>
                <ExpensesList items={filteredExpenses}/>
            </div>
        </div>
    );
};

export default Expenses;