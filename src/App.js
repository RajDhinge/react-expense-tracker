import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import Card from './components/UI/Card'
import './components/Expenses/Expenses.css'
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSE = [
	{
		id: 'e1',
		title: 'Toilet Paper',
		amount: 94.12,
		date: new Date(2020, 7, 14),
	},
	{ id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
	{
		id: 'e3',
		title: 'Car Insurance',
		amount: 294.67,
		date: new Date(2021, 2, 28),
	},
	{
		id: 'e4',
		title: 'New Desk (Wooden)',
		amount: 450,
		date: new Date(2021, 5, 12),
	},
];

const App = () => {
	const [expenses, setExpenses] = useState(DUMMY_EXPENSE);
	const saveNewExpenseItemData = (enteredExpenseData) => {
		console.log(enteredExpenseData);
		setExpenses((prevExpenses) => {
			return [enteredExpenseData, ...prevExpenses];
		});

	};

	return (
		<div>
			<NewExpense onExpenseIntemSave={saveNewExpenseItemData} />
			<Card className='expenses'>
				<Expenses expenses={expenses} />
			</Card>
		</div>
	);
}

export default App;
