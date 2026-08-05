import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/CheckTitle.css";

function CheckTitle() {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const verifyTitle = async () => {
    if (title.trim() === "") {
      alert("Please enter a project title");
      return;
    }

    try {
      const response = await fetch(
        "https://online-title-verification-system-backend.onrender.com/api/titles/verify",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            titleName: title,
          }),
        }
      );

      const data = await response.text();

      setMessage(data);

      localStorage.setItem(
        "result",
        JSON.stringify({
          title: title,
          similarity: data.includes("Similar") ? "100%" : "0%",
          status: data,
        })
      );

      navigate("/result");

    } catch (error) {
      console.error(error);
      alert("Verification Failed");
    }
  };

  return (
    <div className="check-container">
      <div className="check-card">

        <h2>🔍 Verify Project Title</h2>

        <input
          type="text"
          placeholder="Enter Project Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button onClick={verifyTitle}>
          Verify Title
        </button>

        {message && (
          <p className="message">
            {message}
          </p>
        )}

      </div>
    </div>
  );
}

export default CheckTitle;