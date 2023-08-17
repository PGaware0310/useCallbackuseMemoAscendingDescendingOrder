import React from "react";
import Card from "../UI/Card";

const ExpenseForm = () => {
 
    const titleChanger = (event) => {
      console.log("Title:",event,event.target.value);
    };
    const amountChanger=(event)=>{
        console.log("Amount:",event,event.target.value);
    } 
    const dateChanger=(event)=>{
        console.log("Date:",event,event.target.value);
    }
  return (
    <form>
      <Card className="expenses">
        <div>
          <label>Title</label>
          <input type="text" onChange={titleChanger} />
        </div>
        <div>
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" onChange={amountChanger}/>
        </div>
        <div>
          <label>Date</label>
          <input type="date" min="2000-01-01" max="2025-12-31" onChange={dateChanger}/>
        </div>
        <div>
          <button type="submit">Add Expense</button>
        </div>
      </Card>
    </form>
  );
};
export default ExpenseForm;
