import React, { useState } from 'react';

const AdminDashboard = ({ contract }) => {
  const [transactionStatus, setTransactionStatus] = useState('');

  const checkDefaults = async () => {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });

    try {
      const loanCounter = await contract.methods.loanCounter().call();
      for (let i = 0; i < loanCounter; i++) {
        await contract.methods.checkForDefault(i).send({ from: accounts[0] });
      }
      setTransactionStatus('Checked for defaults successfully');
    } catch (error) {
      setTransactionStatus(`Failed to check defaults: ${error.message}`);
    }
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <button onClick={checkDefaults}>Check Defaults</button>
      <p>{transactionStatus}</p>
    </div>
  );
};

export default AdminDashboard;
