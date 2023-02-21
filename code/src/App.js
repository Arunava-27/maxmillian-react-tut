import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import dummyExpenses from "./expenses";

const App = () => {

  const [expenses, setExpenses] = useState(dummyExpenses)
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses => {
      return [expense, ...prevExpenses]
    }))
    // console.log(expense);
  };

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
