import React, { useState } from "react";
import ExpenseDate  from "./ExpenseDate";
import Card from '../UI/Card'
import './ExpenseItem.css'

const ExpenseItem = (props) => {
  const [title, setTtile] = useState(props.title); //  Must be called at the top most react component function.
  const clickHandler = () =>{
    setTtile('Updated'); // state updating function
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
      </div>
      <div className="expense-item__price">{props.amount}</div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
