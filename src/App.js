import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

//Moved initial data
const DUMMY_EXPENSES = [
	{
		id: "e1",
		title: "Toilet Paper",
		amount: 94.12,
		date: new Date(2020, 7, 14),
	},
	{ id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
	{
		id: "e3",
		title: "Car Insurance",
		amount: 294.67,
		date: new Date(2021, 2, 28),
	},
	{
		id: "e4",
		title: "New Desk (Woooden)",
		amount: 450,
		date: new Date(2021, 5, 12),
	},
	{
		id: "e5",
		title: "New Chair",
		amount: 650,
		date: new Date(2021, 5, 12),
	},
];

const App = () => {
	/*
  // moving this to an array outside of this function
  // bring into function using useState

  const expenses = [
		{
			id: "e1",
			title: "Toilet Paper",
			amount: 94.12,
			date: new Date(2020, 7, 14),
		},
		{ id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
		{
			id: "e3",
			title: "Car Insurance",
			amount: 294.67,
			date: new Date(2021, 2, 28),
		},
		{
			id: "e4",
			title: "New Desk (Wooden)",
			amount: 450,
			date: new Date(2021, 5, 12),
		},
	];

  */
	// Assign expenses using useState
	const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

	//update expense state with older data
	const addExpenseHandler = (expense) => {
		setExpenses((prevExpenses) => {
			return [expense, ...prevExpenses];
		});
	};

	// return React.createElement(
	//   'div',
	//   {},
	//   React.createElement('h2', {}, "Let's get started!"),
	//   React.createElement(Expenses, { items: expenses })
	// );

	console.log({ expenses });
	return (
		<div>
			<NewExpense onAddExpense={addExpenseHandler} />
			<Expenses items={expenses} />
		</div>
	);
};

export default App;
