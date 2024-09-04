import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import logo from "./Logo.png";
import Feedbacks from "./Feedbacks";
import Proposals from "./Proposals";

function App() {
  const adminWalletAddress = "rABCDEF1234567890";

  return (
    <Router>
      <div className="dashboard">
        <aside className="sidebar">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <ul className="menu">
            <li>
              <Link to="/" className="no-underline">
                Proposals
              </Link>
            </li>
            <li>
              <Link to="/feedbacks" className="no-underline">
                Feedbacks
              </Link>
            </li>
            <li onClick={() => alert("Logging Out...")}>Log Out</li>
          </ul>
        </aside>
        <main className="content">
          <Routes>
            <Route
              path="/"
              element={<Proposals adminWalletAddress={adminWalletAddress} />}
            />
            <Route path="/feedbacks" element={<Feedbacks />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
