import React, {useState} from 'react';
import './ExpenseItem.css'
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = ({date, title, price}) => {

const [firstTitle, setFirstTitle] = useState(title);

    const clickHandler = ()=> {
        setFirstTitle('UPDATE')
        console.log('fefe')
    };

    return (
        <Card className='expense-item'>

            <ExpenseDate date={date}/>
            <div className='expense-item__description'>
                <h2>{firstTitle}</h2>
                <div className='expense-item__price'>{price}$</div>
            </div>
            <button onClick={clickHandler}>change</button>
        </Card>
    );
};

export default ExpenseItem;