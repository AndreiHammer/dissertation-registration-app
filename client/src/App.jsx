import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Login from "./routes/Login.jsx";
import Home from "./routes/Home.jsx";
import Profile from "./routes/Profile.jsx";
import Register from "./routes/Register.jsx";
import Request from "./routes/Request.jsx";
import TeacherRequests from "./routes/TeacherRequests.jsx";
import { useEffect, useState } from "react";
import BackgroundManager from "./components/BackgroundManager.jsx";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("loginStatus") === "true");
  }, []);

  const handleLoginStatus = (status) => {
    setIsLoggedIn(status);
    localStorage.setItem("loginStatus", status ? "true" : "false");
  };

  return (
    <div className="App">
      <BrowserRouter>
        <BackgroundManager />
        <Navbar isLoggedIn={isLoggedIn} handleLoginStatus={handleLoginStatus} />
        <Routes>
          <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/login"
            element={<Login handleLoginStatus={handleLoginStatus} />}
          />
          <Route path="/profile" element={<Profile />} />
          <Route path="/request" element={<Request />} />
          <Route path="/teacher-requests" element={<TeacherRequests />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
