import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">
        Online Title Verification System
      </h1>

      <p className="home-subtitle">
        Verify your project title before final submission
      </p>

      <div>
        <Link to="/login">
          <button className="home-btn">Login</button>
        </Link>

        <Link to="/register">
          <button className="home-btn">Register</button>
        </Link>
      </div>

      <div className="features">
        <h3>Features</h3>

        <p>🔍 Duplicate Title Detection</p>

        <p>📊 Similarity Checking</p>

        <p>🤖 AI Based Verification</p>

        <p>⚡ Fast and Easy Verification</p>
      </div>

      <footer className="footer">
        © 2026 Online Title Verification System
        <br />
        Developed by Prakalya Singaravelu
      </footer>
    </div>
  );
}

export default Home;