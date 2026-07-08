function Summary({income,expense}) {
    return(
       <section className="summary">
        <div className="income-card">
            <p className="summary-text">Income</p>
            <h3 className="income-amount">₹{income}</h3>
        </div>

         <div className="expense-card">
            <p className="summary-text">Expense</p>
            <h3 className="expense-amount">₹{expense}</h3>
        </div>
       </section>
    );
};
export default Summary;
