import { useState, useEffect } from "react";
import "./App.css"

import Header from "./components/Header";
import Balance from "./components/Balance";
import Summary from "./components/Summary";
import AddTransaction from "./components/AddTransaction";
import TransactionList from "./components/TransactionList";
import TransactionItem from "./components/TransactionItem";

function App() {
  const [transaction, setTransaction] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("Expense");
  const [editId, setEditId] = useState(null);
  const [error, setError] = useState("")
  const [transactions, setTransactions] = useState(()=>{
    const storedTransactions = localStorage.getItem("transactions");
    console.log(storedTransactions);
    return storedTransactions ? JSON.parse(storedTransactions) : [];
  });


  const addTransaction = () => {
    if (transaction.trim() === "" ||
      amount.trim() === ""
    ) {
      setError("Please fill all fields");
      return;
    }
    setError("");
  

  if (editId !== null) {
    const updatedTransaction = transactions.map((item) => {
      return editId === item.id
        ? {
          ...item,
          transaction,
          amount,
          type,
        }
        : item;
    })
    setTransactions(updatedTransaction);
    setTransaction("");
    setAmount("");
    setType("Expense")
    setEditId(null);

  } else {
    const newTransaction = {
      id: Date.now(),
      transaction,
      amount,
      type,
    }
    setTransactions([...transactions, newTransaction]);
    setTransaction("");
    setAmount("");
    setType("Expense");
  };
};

  const editTransaction = (id) => {

    const transactionToEdit = transactions.find((item) => {
      return item.id === id;
    });
    setTransaction(transactionToEdit.transaction);
    setAmount(transactionToEdit.amount);
    setType(transactionToEdit.type);
    setEditId(id);

  };

  const dltTransaction = (id) => {

    const filteredTransaction = transactions.filter((item) => {
      return item.id !== id;
    })
    setTransactions(filteredTransaction);

  };

  const balance = transactions.reduce((sum, item) => {
    if (item.type === "Income") {
      return sum + Number(item.amount)
    } else {
      return sum - Number(item.amount)
    }
  }, 0);

  const income = transactions.reduce((sum, item) => {
    if (item.type === "Income") {
      return sum + Number(item.amount);

    };
    return sum;
  },0);

  const expense = transactions.reduce((sum, item) => {
    if (item.type === "Expense") {
      return sum + Number(item.amount)
    };
    return sum;
  },0);

  useEffect(()=>{
    console.log(transactions);
    localStorage.setItem("transactions",JSON.stringify(transactions));
  },[transactions]);

return (
  
  <div className="app">
    <Header />
    <Balance balance={balance} />
    <Summary
      income={income}
      expense={expense}
    />
    <AddTransaction
     transaction={transaction}
     amount={amount}
     type={type}
     setTransaction={setTransaction}
     setAmount={setAmount}
     setType={setType}
     editId={editId}
     addTransaction={addTransaction}
     error={error}
     />
    <TransactionList
      transactions={transactions}
      editTransaction={editTransaction}
      dltTransaction={dltTransaction}
    />
    </div>

);
};

export default App;
