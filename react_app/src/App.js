import Expenses from "./components/Expenses/Expenses";
import React, {useState} from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import {queryHelpers} from "@testing-library/react";

const DUMMY_EXPENSES = [
    {
        id: 1,
        title: 'Tortila',
        amount: 213.212,
        date: new Date()
    },
    {
        id: 2,
        title: 'Soda',
        amount: 213.212,
        date: new Date(2022, 3, 12)
    },
    {
        id: 3,
        title: 'Pasta',
        amount: 213.212,
        date: new Date(2021, 5, 23)
    },
    {
        id: 4,
        title: 'Kasta',
        amount: 63.212,
        date: new Date(2020, 6, 23)
    }
]

function App() {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

    const addExpensesHandler = (expense) => {
        setExpenses((prevExpenses) => {
            return [expense, ...prevExpenses]
        })
    }
    return (
        <div>
            <h1>yo-APP</h1>

            <NewExpense onAddExpense={addExpensesHandler}/>
            <Expenses expenses={expenses}/>
        </div>

    );
}

export default App;
