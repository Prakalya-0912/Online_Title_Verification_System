import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/TitleSubmission.css";

function TitleSubmission() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [domain, setDomain] = useState("");
  const [description, setDescription] = useState("");

  const submitTitle = async () => {
    if (title.trim() === "") {
      alert("Please enter the project title.");
      return;
    }

    try {
      const response = await fetch(
        "https://online-title-verification-system-backend.onrender.com/api/titles",
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

      alert(data);

      // Save complete project details locally
      localStorage.setItem(
        "projectDetails",
        JSON.stringify({
          title,
          domain,
          description,
        })
      );

      // Clear form after successful submission
      setTitle("");
      setDomain("");
      setDescription("");

    } catch (error) {
      console.error(error);
      alert("Failed to submit project.");
    }
  };

  return (
    <div className="submit-container">
      <div className="submit-card">

        <h2>📝 Submit Project Title</h2>

        <input
          type="text"
          placeholder="Project Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <select
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
        >
          <option value="">Select Domain</option>
          <option>Artificial Intelligence</option>
          <option>Machine Learning</option>
          <option>Data Science</option>
          <option>Cyber Security</option>
          <option>Web Development</option>
          <option>Cloud Computing</option>
        </select>

        <textarea
          placeholder="Project Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <div className="button-group">
          <button onClick={submitTitle}>
            Submit Project
          </button>

          <button onClick={() => navigate("/checktitle")}>
            Check Title
          </button>
        </div>

      </div>
    </div>
  );
}

export default TitleSubmission;