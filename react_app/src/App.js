import Expenses from "./components/Expenses";

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
            <Expenses expenses={expenses} />
        </div>

    );
}

export default App;
