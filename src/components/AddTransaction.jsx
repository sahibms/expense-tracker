import TransactionList from "./TransactionList";

function AddTransaction({transaction,setTransaction,amount,setAmount,type,setType,editId,addTransaction,error}) {
    return(
        <section className="add-transaction">
            <input
            className="input-field"
            type="text"
            value={transaction}
            placeholder="Enter Transaction"
            onChange={(e)=>setTransaction(e.target.value)}
            />
            <input
            className="input-field"
            type="number"
            value={amount}
            placeholder="Enter Amount"
            onChange={(e)=>setAmount(e.target.value)}
            onKeyDown={(e)=>{if(e.key === "Enter"){addTransaction();}}}
            />
            <select
            className="select-field"
            value={type}
            onChange={(e)=>setType(e.target.value)}
            >
                <option value="Expense">Expense</option>
                <option value="Income">Income</option>
            </select>

            {error && <p className="error-message">{error}</p>}


            <button className="add-btn" onClick={addTransaction}>{editId!==null ? "Update Transaction" : "Add Transaction"}</button>
        </section>
    );
}
export default AddTransaction;