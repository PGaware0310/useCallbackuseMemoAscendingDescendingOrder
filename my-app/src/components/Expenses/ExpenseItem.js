import React from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // return (
  // <div className="expense-item">
  // <ExpenseDate/>
  //     <div className="expense-item__description">
  //    <h2>{props.title}</h2>
  //     <div className="expense-item__price">${props.amount}</div>
  //     </div>
  //     <div className="location"><h2>{props.Location}</h2></div>
  // </div>
  // );
  const deleteHandler=()=>{
    console.log("Deleted!!!");
  };
  const clickHandler = () => {
   console.log("Updated!");
  };
  
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      
      <ExpenseDetails title={props.title}
      amount={props.amount}
        location={props.location}/>
      <button onClick={clickHandler}>ChangeTitle</button>
      <button onClick={deleteHandler}>DeleteExpense</button>
    </Card>
  );
};
export default ExpenseItem;
