import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
	const saveExpenseData = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString()
		};
		console.log(expenseData);
		props.onExpenseIntemSave(expenseData);
	}
	return (
		<div className='new-expense'>
			<ExpenseForm onExpenseSave={saveExpenseData}></ExpenseForm>
		</div>
	);
}

export default NewExpense;