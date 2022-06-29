import ExpenseItem from "./components/ExpenseItem";

function App() {

    const expenses = [
        {
            id: 1,
            title: 'Tortila',
            amount: 213.212,
            date:  new Date().toISOString()
        },
        {
            id: 2,
            title: 'Soda',
            amount: 213.212,
            date:  new Date(5,3,12).toISOString()
        },
        {
            id: 3,
            title: 'Pasta',
            amount: 213.212,
            date: new Date(2,5,23).toISOString()
        }
    ]
    return (
        <div>
            <div>yoAPP</div>
            <ExpenseItem title={expenses[0].title} day={expenses[0].date} price={expenses[0].amount}/>
            <ExpenseItem title={expenses[1].title} day={expenses[1].date} price={expenses[1].amount}/>
            <ExpenseItem title={expenses[2].title} day={expenses[2].date} price={expenses[2].amount}/>

        </div>

    );
}

export default App;
