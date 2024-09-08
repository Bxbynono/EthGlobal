import React, { useState } from 'react';

const CheckLoanStatus = ({ contract }) => {
  const [loanId, setLoanId] = useState('');
  const [loanDetails, setLoanDetails] = useState(null);
  const [error, setError] = useState('');

  const checkLoanStatus = async (event) => {
    event.preventDefault();

    try {
      const [loan, state] = await contract.methods.getLoanDetails(loanId).call();
      setLoanDetails({
        amount: loan.amount,
        collateral: loan.collateral,
        borrower: loan.borrower,
        interestRate: loan.interestRate,
        duration: loan.duration,
        startTime: loan.startTime,
        isRepaid: loan.isRepaid,
        state: state
      });
    } catch (error) {
      setError(`Failed to retrieve loan details: ${error.message}`);
    }
  };

  return (
    <div>
      <h2>Check Loan Status</h2>
      <form onSubmit={checkLoanStatus}>
        <label>
          Loan ID:
          <input type="number" value={loanId} onChange={(e) => setLoanId(e.target.value)} required />
        </label>
        <button type="submit">Check Status</button>
      </form>
      {error && <p>{error}</p>}
      {loanDetails && (
        <div>
          <h3>Loan Details</h3>
          <p><strong>Amount:</strong> {loanDetails.amount}</p>
          <p><strong>Collateral:</strong> {loanDetails.collateral}</p>
          <p><strong>Borrower:</strong> {loanDetails.borrower}</p>
          <p><strong>Interest Rate:</strong> {loanDetails.interestRate}%</p>
          <p><strong>Duration:</strong> {loanDetails.duration}</p>
          <p><strong>Start Time:</strong> {loanDetails.startTime}</p>
          <p><strong>Repaid:</strong> {loanDetails.isRepaid ? 'Yes' : 'No'}</p>
          <p><strong>State:</strong> {loanDetails.state}</p>
        </div>
      )}
    </div>
  );
};

export default CheckLoanStatus;
