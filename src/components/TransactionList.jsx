import TransactionItem from "./TransactionItem";

function TransactionList({transactions,editTransaction,dltTransaction}) {
    return(
        <section className="transaction-list">
            <h2 className="history-title">Transaction History</h2>
            {transactions.map((item)=>(
                <TransactionItem
                 key={item.id}
                 item={item}
                 editTransaction={editTransaction}
                 dltTransaction={dltTransaction}
                />
            ))}
        </section>


       
    );
}
export default TransactionList;