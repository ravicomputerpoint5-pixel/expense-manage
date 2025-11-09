import { useEffect, useRef, useState } from "react"
import ExpenseForm from "./ExpenseForm"
import ExpenseList from "./ExpenseList"


function App() {
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem('expenses')
    return saved ? JSON.parse(saved) : []
  })

  const addExpense = (newExpense) => {
    setExpenses((prev) => [...prev, newExpense])
  }

  const deleteExpense = (id) => {
    setExpenses((prev) => prev.filter((item) => item.id != id))
  }

  const totalExpense = expenses.reduce((sum, item) => sum + item.amount, 0)

  useEffect(() => {
    localStorage.setItem('expenses',JSON.stringify(expenses))
  },[expenses])

  return (
    <>
      <h1 className="bg-primary-subtle p-3 shadow-sm mb-3">Expense Management</h1>
      <div className="container">
        <ExpenseForm onAddExpense={addExpense} />
        <h2 className="my-3">Total Expense: ₹ {totalExpense.toLocaleString()}</h2>
        {expenses.length === 0 ? (
            <p className="text-center text-muted">No expenses added yet.</p>
          ) : (
            <ExpenseList expenses={expenses} onDeleteExpense={deleteExpense} />
          )}
      </div>
    </>
  )
}

export default App
