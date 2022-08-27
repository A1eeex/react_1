import React, {useState} from 'react';
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";

const NewExpense = ({onAddExpense}) => {
    const [showFormBtn, setShowFormBnt] = useState(false);

    const changeEditingHandler = (e) => {
        e.preventDefault()
        setShowFormBnt(!showFormBtn)
    }

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        onAddExpense(expenseData)
        setShowFormBnt(false)
    }


    return (
        <div className='new-expense'>
            {!showFormBtn && <button onClick={changeEditingHandler}> Add New Expenses</button>}
            {showFormBtn && <ExpenseForm onCancel={changeEditingHandler}  onSaveExpenseData={saveExpenseDataHandler}/>}
        </div>
    );
};

export default NewExpense;