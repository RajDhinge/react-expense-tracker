import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

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
			{filteredExpensesByYear.map((expense) => {
				return (
					<ExpenseItem
						key={expense.id}
						title={expense.title}
						price={expense.amount}
						date={expense.date} />
				)
			})}
		</Card>
	);
};

export default Expenses;