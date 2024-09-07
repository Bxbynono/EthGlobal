import React from 'react';
import './css//Donnor_login.css'; 
import img1 from "./img/metamaskIcon.png"
import img2 from "./img/smallmetamask.png"
import logo from "./img/Logo.png"
function DonorLogin() {
    const handleMetaMaskConnect = async () => {
        if (window.ethereum) {
          try {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            console.log('Connected to MetaMask:', accounts[0]);
          } catch (error) {
            console.error('MetaMask connection error:', error);
            alert('There was an issue connecting to MetaMask. Please try again.');
          }
        } else {
          alert('MetaMask is not installed. Please install MetaMask to continue.');
        }
      };

  return (
    <div className="login-container">
      <div className="logo"><img src={logo} alt="logo-metamask"></img></div>
      <h2>Welcome Innovators!!!</h2>
      <div className="metamask-icon">
        <img src={img1} alt="MetaMask Icon" />
      </div>
      <button className="metamask-btn" onClick={handleMetaMaskConnect}>
        <img src={img2} alt="MetaMask Icon" className="btn-icon" />
        Connect to MetaMask
      </button>
    </div>
  );
}

export default DonorLogin;
