import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import './ExpenseItem.css';
function ExpenseItem(props){
    
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
    return (
         
       <div>
       <ExpenseDate date ={props.date} />
       <ExpenseDetails amount={props.amount}  
        title={props.title}
        location={props.location}  />
       </div>
        
        )
}
export default ExpenseItem;