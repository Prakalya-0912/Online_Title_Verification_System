import { Link } from "react-router-dom";
import "../styles/Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-container">

      <h1 className="dashboard-title">
        📊 Dashboard
      </h1>

      <p className="dashboard-subtitle">
        Welcome to Online Title Verification System
      </p>

      <div className="card-container">

        {/* Submit Project */}
        <div className="card">
          <h3>📝 Submit Project Title</h3>
          <p>Add a new project title to the database.</p>

          <Link to="/submit">
            <button>Open</button>
          </Link>
        </div>

        {/* Check Title */}
        <div className="card">
          <h3>🔍 Check Project Title</h3>
          <p>Verify whether a project title already exists.</p>

          <Link to="/checktitle">
            <button>Check</button>
          </Link>
        </div>

        {/* Result */}
        <div className="card">
          <h3>📋 Verification Result</h3>
          <p>View the latest verification result.</p>

          <Link to="/result">
            <button>Open</button>
          </Link>
        </div>

        {/* Logout */}
        <div className="card">
          <h3>🚪 Logout</h3>
          <p>Return to Home Page.</p>

          <Link to="/">
            <button>Logout</button>
          </Link>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;