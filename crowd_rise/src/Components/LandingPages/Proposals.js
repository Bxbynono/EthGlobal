import React, { useState } from "react";
import "../../App.css";
import ProposalDetail from "./Project_details"; // Import the correct component

const Proposals = ({ adminWalletAddress }) => {
  const [selectedProposal, setSelectedProposal] = useState(null);
  const [isDetailVisible, setDetailVisible] = useState(false);

  const proposals = [
    { id: 1, name: "Project A", owner: "r1234567890ABCDEF" },
    { id: 2, name: "Project B", owner: "r1234567890ABCDEF" },
    { id: 3, name: "Project C", owner: "r1234567890ABCDEF" },
  ];

  const handleViewClick = (proposal) => {
    setSelectedProposal(proposal);
    setDetailVisible(true);
  };

  return (
    <div className="proposals-section">
      <div className="admin-info">
        <p>Connected: {adminWalletAddress}</p>
      </div>
      <h2>Proposals</h2>
      {isDetailVisible ? (
        <ProposalDetail
          proposal={selectedProposal}
          onClose={() => setDetailVisible(false)}
        />
      ) : (
        <table>
          <thead>
            <tr>
              <th>SI No</th>
              <th>Project Name</th>
              <th>Project Owner</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {proposals.map((proposal, index) => (
              <tr key={proposal.id}>
                <td>{index + 1}</td>
                <td>{proposal.name}</td>
                <td>{proposal.owner}</td>
                <td>
                  <button onClick={() => handleViewClick(proposal)}>
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Proposals;
