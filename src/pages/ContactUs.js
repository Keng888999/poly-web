import React from "react";
import "./ContactUs.css"; // นำเข้าไฟล์ CSS

const ContactUs = () => {
  return (
    <div className="contact-container">
      {/* Container หลักสำหรับข้อมูลการติดต่อ */}
      <div className="contact-content">
        <h2 className="contact-title">ติดต่อเรา</h2>
        <p className="contact-description">
          หากคุณมีคำถามหรือต้องการข้อมูลเพิ่มเติมเกี่ยวกับสาขาเทคโนโลยีสารสนเทศ โปรดติดต่อเราผ่านช่องทางด้านล่าง:
        </p>

        <div className="contact-info-container">
          <div className="contact-item">
            <h3 className="contact-info-title">ที่อยู่</h3>
            <p className="contact-info-description">
              วิทยาลัยเทคโนโลยีโปลิเทคนิคลานนา เชียงใหม่ <br />
              2 ถนนสุขเกษม ต.ป่าตัน อ.เมือง จ.เชียงใหม่ 50300
            </p>
          </div>
          <div className="contact-item">
            <h3 className="contact-info-title">โทรศัพท์</h3>
            <p className="contact-info-description">053 213 061</p>
          </div>
          <div className="contact-item">
            <h3 className="contact-info-title">อีเมล</h3>
            <p className="contact-info-description">lannapoly@lannapoly.ac.th</p>
          </div>
        </div>
      </div>

      {/* Section สำหรับฟอร์มการติดต่อ */}
      <div className="contact-form-container">
        <h2 className="form-title">ส่งข้อความถึงเรา</h2>
        <form className="contact-form">
          <input
            type="text"
            placeholder="ชื่อของคุณ"
            className="form-input"
          />
          <input
            type="email"
            placeholder="อีเมลของคุณ"
            className="form-input"
          />
          <textarea
            placeholder="ข้อความของคุณ"
            className="form-textarea"
          ></textarea>
          <button type="submit" className="form-button">
            ส่งข้อความ
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
