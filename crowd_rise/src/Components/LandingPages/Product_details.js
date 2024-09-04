import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../LandingPages/css/Project_details.css";

const ProposalForm = ({ proposal }) => {
  const [status, setStatus] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Proposal ${proposal.name} has been ${status}`);
  };

  const handleBackClick = () => {
    navigate("/Proposals.js");
  };

  return (
    <div className="proposal-form">
      <h2>Proposal Approval/Decline</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <p>
            <strong>Project Name:</strong> {proposal.name}
          </p>
        </div>
        <div className="form-group">
          <label>
            Required Budget:
            <input type="number" placeholder="Minimum" />
            <input type="number" placeholder="Maximum" />
          </label>
        </div>
        <div className="form-group">
          <label>
            Duration of Campaign:
            <input type="date" placeholder="Start Date" />
            <input type="date" placeholder="End Date" />
          </label>
        </div>
        <div className="form-group">
          <label>
            Project Proposal:
            <button type="button">Project Document</button>
          </label>
        </div>
        <div className="form-group">
          <label>
            <input
              type="radio"
              value="Approved"
              checked={status === "Approved"}
              onChange={handleStatusChange}
            />
            Approve
          </label>
          <label>
            <input
              type="radio"
              value="Declined"
              checked={status === "Declined"}
              onChange={handleStatusChange}
            />
            Decline
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
      <button type="button" onClick={handleBackClick}>
        Back
      </button>
    </div>
  );
};

export default ProposalForm;
