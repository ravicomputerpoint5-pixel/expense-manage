import { useState, useRef } from "react"
export default function ExpenseForm({onAddExpense}){
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const titleRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!title.trim() || !amount) return alert('Please fill all fields')
        const newExpense = {
          id: Date.now(),
          title,
          amount: parseFloat(amount)
        }
        onAddExpense(newExpense)
        setTitle('')
        setAmount('')
        titleRef.current.focus()
      }
    return(
        <>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col">
                        <input 
                            type="text"
                            placeholder='Enter title'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            ref={titleRef}
                            className="form-control"
                        />
                    </div>
                    <div className="col">
                        <input 
                            type="number"
                            placeholder='Enter amount'
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="form-control"
                        />
                    </div>
                    <div className="col">
                        <button type="submit" className="btn btn-primary">
                            Save
                        </button>
                    </div>
                </div>
            </form>
        </>
    )
}