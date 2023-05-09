import ExpenseItem from './ExpenseItem'

const Expenses = (props) => {
	return (
		props.expenses.map((expense) => {
			return (
				<ExpenseItem
					key={expense.id}
					title={expense.title}
					price={expense.amount}
					date={expense.date} />
			)
		})
	);
}

export default Expenses;