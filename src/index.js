import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Courses from "./pages/Courses";
import ContactUs from "./pages/ContactUs";
import Navbar from "./components/Navbar";
import "./index.css";

const App = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen text-white">
      <Router>
        <Navbar />
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);