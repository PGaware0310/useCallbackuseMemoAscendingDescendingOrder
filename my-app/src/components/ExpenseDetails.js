function ExpenseDetails(props){
return(
    <div >
    <div >
        <h2>{props.title}</h2>
         <div >${props.amount}</div>
         </div>
         <div ><h2>{props.location}</h2></div>
         </div>
)
}
export default ExpenseDetails;