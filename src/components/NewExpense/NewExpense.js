import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
	const [showForm, setShowForm] = useState(0);

	// Handeling State.
	const saveExpenseData = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString()
		};
		props.onExpenseIntemSave(expenseData);
		setShowForm(0);
	}
	const showExpenseForm = () => {
		setShowForm(1);
	}
	const hideExpenseForm = () => {
		setShowForm(0);
	}

	// Form Content Handeling.
	let formContent = <ExpenseForm onHideExpenseForm={hideExpenseForm} onExpenseSave={saveExpenseData}></ExpenseForm>;
	if (showForm === 0) {
		formContent =
			<div>
				<button onClick={showExpenseForm}>Add New Exense</button>
			</div>;
	}

	// Rendering the lean code.
	return (
		<div className='new-expense'>
			{formContent}
		</div>
	);
}

export default NewExpense;