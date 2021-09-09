// import "./ExpensesForm.css";
// import React, { useStates } from "react";
// const ExpensesForm = () => {
//   const [enteredTitle, setEnteredTitle] = useStates("");
//   const [enteredAmount, setEnteredAmount] = useStates("");
//   const [enteredDate, setEnteredDate] = useStates("");

//   // const [userInput, setUserInput] = useStates({
//   //   enteredTitle: "",
//   //   enteredAmount: "",
//   //   enteredDate: "",
//   // });

//   // const titleChangeHandler = (event) => {
//   //   setUserInput({
//   //     ...userInput,
//   //     enteredTitle: event.target.value,
//   //   });
//   // };
//   // const amountChangeHandler = (event) => {
//   //   setUserInput({
//   //     ...userInput,
//   //     enteredAmount: event.target.value,
//   //   });
//   // };
//   // const dateChangeHandler = (event) => {
//   //   setUserInput({
//   //     ...userInput,
//   //     enteredDate: event.target.value,
//   //   });
//   // };

//   const amountChangeHandler = (event) => {
//     setEnteredAmount(event.target.value);
//   };

//   const dateChangeHandler = (event) => {
//     setEnteredDate(event.target.value);
//   };
//   const titleChangeHandler = (event) => {
//     setEnteredTitle(event.target.value);
//   };
//   return (
//     <form>
//       <div className="new-expense__controls">
//         <div className="new-expense__control">
//           <label>Title</label>
//           <input type="text" onChange={titleChangeHandler} />
//         </div>
//         <div className="new-expense__control">
//           <label>Amount</label>
//           <input
//             type="number"
//             min="0.01"
//             step="0.01"
//             onChange={amountChangeHandler}
//           />
//         </div>
//         <div className="new-expense__control">
//           <label>Date</label>
//           <input
//             type="date"
//             min="2019-01-01"
//             max="2022-12-31"
//             onChange={dateChangeHandler}
//           />
//         </div>
//         <div className="new-expense__actions">
//           <button type="submit">Add Expenses</button>
//         </div>
//       </div>
//     </form>
//   );
// };
// export default ExpensesForm;
