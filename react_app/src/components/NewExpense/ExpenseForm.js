import React, {useState} from 'react';
import './ExpenseForm.css'

const ExpenseForm = () => {
    // const [title, setTitle]= useState('');
    // const [amount, seAmount]= useState('');
    // const [date, seDate]= useState('');

    const [userInp, setUserInp] = useState({
        title: '',
        amount: '',
        date: '',
    })
    const titleChangeHandler = (e) => {
        // setUserInp({
        //     ...userInp,
        //     title: e.target.value
        // })
        setUserInp((prevState) => {
            return {...prevState, title: e.target.value};
        })
    }
    const amountChangeHandler = (e) => {
        setUserInp((prevState)=>{
            return {...prevState, amount: e.target.value}
        })
    }
    const dateChangeHandler = (e) => {
        setUserInp((prevState)=>{
            return {...prevState, date: e.target.value}
        })
    }
    return (
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label> Title</label>
                    <input type='text' onChange={titleChangeHandler} value={userInp.title}/>
                </div>

                <div className='new-expense__control'>
                    <label> Amount</label>
                    <input type='number' min='0.01' step='0.01' onChange={amountChangeHandler} value={userInp.amount}/>
                </div>

                <div className='new-expense__control'>
                    <label> Date</label>
                    <input type='date' min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler}
                           value={userInp.date}/>
                </div>

                <div className='new-expense__actions'>
                    <button type='submit'>Add Expense</button>
                </div>
            </div>
        </form>
    );
};

export default ExpenseForm;