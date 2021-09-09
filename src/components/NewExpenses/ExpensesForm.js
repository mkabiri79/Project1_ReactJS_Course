import "./ExpensesForm.css";
import React from "react";
const ExpensesForm = () => {
  const changeTitleHandler = () => {};
  const changeAmountHandler = () => {};
  const changeDateHandler = () => {};
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={changeTitleHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={changeAmountHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={changeDateHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expenses</button>
        </div>
      </div>
    </form>
  );
};
export default ExpensesForm;
