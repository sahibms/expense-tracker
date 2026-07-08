function Balance({balance}) {
    return(
       <section className="balance">
        <p className="balance-text">Your Balance</p>
        <h2 className="balance-amount">₹{balance}</h2>
       </section>
    );
};
export default Balance;