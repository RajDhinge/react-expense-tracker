import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
	const [filterYearValue, setFilterYearValue] = useState('2021');

	const setFilterExpensesYear = (setYearvalue) => {
		setFilterYearValue(setYearvalue);
	}

	const filteredExpensesByYear = props.expenses.filter((expense) =>
		expense.date.getFullYear() === parseInt(filterYearValue)
	);

	return (
		<Card>
			<ExpensesFilter selected={filterYearValue} onFilterSet={setFilterExpensesYear} />
			<ExpensesList expenses={filteredExpensesByYear} />
		</Card>
	);
};

export default Expenses;