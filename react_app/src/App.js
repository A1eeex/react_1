import Expenses from "./components/Expenses/Expenses";
import React from "react";
import NewExpense from "./components/NewExpense/NewExpense";
function App() {
    const expenses = [
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
            date: new Date(2025, 3, 12)
        },
        {
            id: 3,
            title: 'Pasta',
            amount: 213.212,
            date: new Date(52, 5, 23)
        }
    ]

    return (
        <div>
            <h1>yo-APP</h1>
            <NewExpense/>
            <Expenses expenses={expenses} />
        </div>

    );
}

export default App;
