export default function ExpenseList({expenses, onDeleteExpense}){
    return(
        <>
            <table className="table table-dark table-bordered border-light align-middle">
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Amount</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                    {expenses.map((expense) => (
                        <tr key={expense.id}>
                            <td>{expense.title}</td>
                            <td>₹ {expense.amount.toLocaleString()}</td>
                            <td>
                                <button onClick={() => onDeleteExpense(expense.id)} className="btn btn-sm btn-danger">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}