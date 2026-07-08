function TransactionItem({item,editTransaction,dltTransaction}){
    return(
        <section className="transaction-item">
            <p className="transaction-name">{item.transaction}</p>
            <p className="transaction-amount">₹{item.amount}</p>
            <p className="transaction-type">{item.type}</p>
            <button className="edit-btn" onClick={()=>editTransaction(item.id)} >Edit</button>
            <button className="delete-btn" onClick={()=>dltTransaction(item.id)} >Delete</button>
        </section>

    );

}
export default TransactionItem;