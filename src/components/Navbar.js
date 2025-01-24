import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css"; // นำเข้าไฟล์ CSS ที่เราสร้างขึ้น

const Navbar = () => {
  return (
    <div className="navbar-container">
      {/* ชื่อ IT Department อยู่ด้านบน */}
      <div className="navbar-title-container">
        <h1 className="navbar-title">ข้อมูลเกี่ยวกับสาขาของเรา</h1>
        <h2 className="navbar-subtitle">ยินดีต้อนรับสู่หน้าเว็บไซต์ของสาขา IT</h2>
      </div>

      {/* ส่วนของลิงก์ */}
      <nav className="navbar">
        <div className="navbar-links">
          <NavLink 
            to="/" 
            className="navbar-link" 
            activeClassName="active"
          >
            Home
          </NavLink>
           
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
