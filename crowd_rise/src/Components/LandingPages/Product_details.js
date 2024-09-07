import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Project_details.css";

const ProposalForm = ({ proposal }) => {
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  const handleStatusClick = (value) => {
    setStatus(value); // Update state based on button click
  };

  const handleBackClick = () => {
    navigate("/Proposals"); // Adjusted the path to match typical routing conventions
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Proposal ${proposal.name} has been ${status}`);
  };

  return (
    <div className="proposal-form">
      <h2>Project Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            <strong>Project Name:</strong>
            <p>{proposal.name}</p>
          </label>
        </div>
        <div className="form-group">
          <label>
            Required Budget:
            <div className="budget-group">
              <input type="number" placeholder="Minimum" />
              <input type="number" placeholder="Maximum" />
            </div>
          </label>
        </div>
        <div className="form-group">
          <label>
            Duration of Campaign:
            <div className="date-group">
              <input type="date" placeholder="Start Date" />
              <input type="date" placeholder="End Date" />
            </div>
          </label>
        </div>
        <div className="form-group">
          <label>
            Project Proposal:
            <br />
            <button type="button" className="download-button">
              Download Document
            </button>
          </label>
        </div>
        <div className="button-group">
          <div className="left-buttons">
            <button
              type="button"
              className="approve-button"
              onClick={() => handleStatusClick("Approved")}
            >
              Approve
            </button>
            <button
              type="button"
              className="decline-button"
              onClick={() => handleStatusClick("Declined")}
            >
              Decline
            </button>
          </div>
          <button
            type="button"
            className="back-button right-button"
            onClick={handleBackClick}
          >
            Back
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProposalForm;
