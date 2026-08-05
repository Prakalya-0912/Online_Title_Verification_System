import { Link } from "react-router-dom";
import "../styles/Result.css";

function Result() {

  const result = JSON.parse(localStorage.getItem("result"));

  const available = result?.status.toLowerCase().includes("available");

  return (
    <div className="result-container">

      <div className="result-card">

        <h2>🔍 Verification Result</h2>

        <div className="result-box">
          <h3>Project Title</h3>
          <p>{result?.title}</p>
        </div>

        <div className="result-box">
          <h3>Similarity</h3>
          <p>{result?.similarity}</p>
        </div>

        <div className="result-box">
          <h3>Status</h3>

          <p className={available ? "available" : "exists"}>
            {result?.status}
          </p>
        </div>

        <Link to="/submit">
          <button>Check Another Title</button>
        </Link>

      </div>

    </div>
  );
}

export default Result;