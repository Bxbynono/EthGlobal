import React from "react";
import "../LandingPages/css/Feedbacks.css";

const Feedbacks = ({ adminWalletAddress }) => {
  const feedbacks = [
    { id: 1, feedback: "Great job on the project!" },
    { id: 2, feedback: "Needs some improvements." },
    { id: 3, feedback: "Very helpful and informative." },
  ];

  return (
    <div className="feedbacks-section">
      <div className="admin-info">
        <p>Connected: {adminWalletAddress}</p>
      </div>
      <h2>Feedbacks</h2>
      <table>
        <thead>
          <tr>
            <th>SI No</th>
            <th>Feedback</th>
          </tr>
        </thead>
        <tbody>
          {feedbacks.map((feedback, index) => (
            <tr key={feedback.id}>
              <td>{index + 1}</td>
              <td>{feedback.feedback}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Feedbacks;
