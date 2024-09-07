import React, { useState } from 'react';
import './css/Project_details.css';
import projectLogo from './img/image 33.png'; 
import { BrowserProvider, parseEther } from 'ethers';

const ProjectDetails = () => {
  const [fundRaised, setFundRaised] = useState(6); 
  const [donationAmount, setDonationAmount] = useState(''); 


  const handleSliderChange = (e) => {
    setFundRaised(e.target.value);
  };

  // MetaMask donation function
  const handleDonate = async () => {
    if (!window.ethereum) {
      alert('MetaMask is not installed!');
      return;
    }

    try {
      // Request wallet connection
      await window.ethereum.request({ method: 'eth_requestAccounts' });

      const provider = new BrowserProvider(window.ethereum);
      const signer = await provider.getSigner(); 

      // Set the recipient address (the project wallet address)
      const recipientAddress = '0xYourProjectWalletAddress';

      // Convert donation amount to Ether
      const etherAmount = parseEther(donationAmount);

      // Create the transaction
      const tx = await signer.sendTransaction({
        to: recipientAddress,
        value: etherAmount
      });

      console.log('Transaction Sent:', tx);
      alert('Donation successful!');

    } catch (err) {
      console.error('Error with donation:', err);
      alert('Donation failed. Please try again.');
    }
  };

  return (
    <div className="project-details-container">
              <h2>Project Details</h2>
      <div className="project-details-card">
        <div className="project-logo">
          <img src={projectLogo} alt="Project Logo" />
        </div>
        <div className="project-info">
          <div className="info-item">
            <span>Project Name:</span> <input type="text" placeholder="Tech Deal" disabled />
          </div>
          <div className="info-item">
            <span>Project Duration:</span> 
            <input type="text" /> to <input type="text" />
          </div>
          <div className="info-item">
            <span>Total Budget:</span> <input type="text" placeholder="10 Eth" disabled />
          </div>
          <div className="info-item">
            <span>Fund Raised:</span> 
            <input
              type="range"
              min="0"
              max="10"
              value={fundRaised}
              onChange={handleSliderChange}
              className="slider"
            />
            <span className="eth-value">({fundRaised} Eth)</span>
          </div>
          <div className="buttons">
          <a href="http://your-backend.com/project-document.pdf" download className="btn proposal-btn">
          Read Project Document (Proposal)
          </a>

          <div>
            <button className="btn donate-btn" onClick={handleDonate}>Donate</button>
            <button className="btn cancel-btn">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
