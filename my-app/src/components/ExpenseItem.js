import './ExpenseItem.css';
function ExpenceItem(){
    const expenseDate= new Date(2023, 7, 17);
    const expenseTitle='Car Insurance';
    const expenseAmount=294.67;
    const locationOfExpenditure='India';
    return (
    <div className="expense-item">
    <div>{expenseDate.toISOString()}</div>
        <div className="expense-item__description">
       <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
        </div>
        <div className="location"><h2>{locationOfExpenditure}</h2></div>
    </div>
    );
}
export default ExpenceItem;