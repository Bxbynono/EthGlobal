import React, { useState } from 'react';

const RepayLoan = ({ contract }) => {
  const [loanId, setLoanId] = useState('');
  const [transactionStatus, setTransactionStatus] = useState('');

  const repayLoan = async (event) => {
    event.preventDefault();
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });

    try {
      const tx = await contract.methods.repayLoan(loanId).send({ from: accounts[0] });
      setTransactionStatus(`Transaction successful: ${tx.transactionHash}`);
    } catch (error) {
      setTransactionStatus(`Transaction failed: ${error.message}`);
    }
  };

  return (
    <div>
      <h2>Repay a Loan</h2>
      <form onSubmit={repayLoan}>
        <label>
          Loan ID:
          <input type="number" value={loanId} onChange={(e) => setLoanId(e.target.value)} required />
        </label>
        <button type="submit">Repay Loan</button>
      </form>
      <p>{transactionStatus}</p>
    </div>
  );
};

export default RepayLoan;
