import React from "react";
import "./Home.css"; // นำเข้าไฟล์ CSS

const Home = () => {
  return (
    <div className="home-container">
      {/* Container หลักสำหรับเนื้อหา */}
      <div className="home-content">
        <h2 className="home-title">สิ่งที่สาขาสอน</h2>
        
        <div className="home-info-container">
          <div className="info-item">
            <h3 className="info-title">การพัฒนาเว็บไซต์</h3>
            <p className="info-description">เราสอนทักษะการพัฒนาเว็บไซต์ตั้งแต่พื้นฐานจนถึงระดับสูง รวมถึงการใช้ HTML, CSS, JavaScript และ Frameworks ต่างๆ</p>
          </div>
          <div className="info-item">
            <h3 className="info-title">การพัฒนาซอฟต์แวร์</h3>
            <p className="info-description">นักศึกษาจะได้เรียนรู้การพัฒนาซอฟต์แวร์ด้วยภาษาโปรแกรมยอดนิยม เช่น Python, Java, และ C++</p>
          </div>
          <div className="info-item">
            <h3 className="info-title">การจัดการฐานข้อมูล</h3>
            <p className="info-description"> การเรียนรู้การออกแบบและจัดการฐานข้อมูล เช่น MySQL, PostgreSQL, และการทำงานกับระบบฐานข้อมูลใหญ่</p>
          </div>
        </div>
      </div>

      {/* Container ใหม่สำหรับแกลเลอรี (Moved Below) */}
      <div className="image-gallery-container">
  <h2 className="gallery-title">แกลเลอรีรูปภาพ</h2>
  <div className="image-gallery">
    <div className="image-item">
      <img src="../images/IT1.jpeg" alt="ภาพ 1" className="gallery-image"></img>
    </div>
    <div className="image-item">
      <img src="../images/IT2.jpeg" alt="ภาพ 2" className="gallery-image"></img>
    </div>
    <div className="image-item">
      <img src="../images/IT3.jpeg" alt="ภาพ 3" className="gallery-image"></img>
    </div>
    <div className="image-item">
      <img src="../images/IT4.jpeg" alt="ภาพ 4" className="gallery-image"></img>
    </div>
    <div className="image-item">
      <img src="../images/IT5.jpeg" alt="ภาพ 5" className="gallery-image"></img>
    </div>
    <div className="image-item">
      <img src="../images/IT6.jpeg" alt="ภาพ 6" className="gallery-image"></img>
    </div>
    </div>
  </div>

  <div className="new-container">
  <h2 className="new-title">ปรัชญาของสาขา</h2>
  <p className="new-description">
  "การศึกษาทางเทคโนโลยีสารสนเทศไม่ใช่แค่การเรียนรู้เครื่องมือหรือโปรแกรม แต่คือการฝึกฝนการคิดเชิงวิทยาศาสตร์และการแก้ไขปัญหาที่ท้าทายในโลกที่เชื่อมโยงกันอย่างไร้ขีดจำกัด"
  </p>
</div>

โค้ด CSS สำหรับ container ใหม่
</div>



  );
};

export default Home;
