import React, { useState } from 'react';

const CreateLoan = ({ contract }) => {
  const [amount, setAmount] = useState('');
  const [collateral, setCollateral] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [duration, setDuration] = useState('');
  const [transactionStatus, setTransactionStatus] = useState('');

  const createLoan = async (event) => {
    event.preventDefault();
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });

    try {
      const tx = await contract.methods.createLoan(amount, collateral, interestRate, duration).send({ from: accounts[0] });
      setTransactionStatus(`Transaction successful: ${tx.transactionHash}`);
    } catch (error) {
      setTransactionStatus(`Transaction failed: ${error.message}`);
    }
  };

  return (
    <div>
      <h2>Create a New Loan</h2>
      <form onSubmit={createLoan}>
        <label>
          Loan Amount:
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required />
        </label>
        <label>
          Collateral Amount:
          <input type="number" value={collateral} onChange={(e) => setCollateral(e.target.value)} required />
        </label>
        <label>
          Interest Rate (%):
          <input type="number" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} required />
        </label>
        <label>
          Duration (seconds):
          <input type="number" value={duration} onChange={(e) => setDuration(e.target.value)} required />
        </label>
        <button type="submit">Create Loan</button>
      </form>
      <p>{transactionStatus}</p>
    </div>
  );
};

export default CreateLoan;
