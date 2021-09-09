import "./ExpenseDate.css";
function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{props.date.getFullYear()}</div>
      <div className="expense-date__day ">{props.date.getDate()}</div>
    </div>
  );
}
export default ExpenseDate;
