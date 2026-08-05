import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import Dashboard from "./components/Dashboard.jsx";
import TitleSubmission from "./components/TitleSubmission.jsx";
import CheckTitle from "./components/CheckTitle.jsx";   // <-- Add this line
import Result from "./components/Result.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/register" element={<Register />} />

        <Route path="/login" element={<Login />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/submit" element={<TitleSubmission />} />

        <Route path="/checktitle" element={<CheckTitle />} />   {/* <-- Add this route */}

        <Route path="/result" element={<Result />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;