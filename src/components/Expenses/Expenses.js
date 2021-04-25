import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState("2020");

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};

	/*
  //replaced the itemized expenseitem listed here with javascript map method
	<Card className="expenses">
				<ExpenseItem
					title={props.items[0].title}
					amount={props.items[0].amount}
					date={props.items[0].date}
				/>
				<ExpenseItem
					title={props.items[1].title}
					amount={props.items[1].amount}
					date={props.items[1].date}
				/>
			....and repeat for each value in array
				/>
			</Card>
  */

	return (
		//   looping through each item in the expense array using map method
		<div>
			<Card className="expenses">
				<ExpensesFilter
					selected={filteredYear}
					onChangeFilter={filterChangeHandler}
				/>
				{props.items.map((expense) => (
					<ExpenseItem
						key={expense.id}
						title={expense.title}
						amount={expense.amount}
						date={expense.date}
					/>
				))}
			</Card>
		</div>
	);
};

export default Expenses;
