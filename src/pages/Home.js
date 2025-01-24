import React, { useState, useEffect } from "react";
import "./Home.css"; // นำเข้าไฟล์ CSS
import "./AboutUs.css";
import "./ContactUs.css";

const Home = () => {

  const [showButton, setShowButton] = useState(false);

  // ฟังก์ชันตรวจสอบเมื่อเลื่อนหน้า
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ฟังก์ชันเลื่อนกลับไปด้านบน
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (

  
    <div className="home-container">
      {/* Container หลักสำหรับเนื้อหา */}
      <div className="aboutus-container">
      <div className="aboutus-content">
        <h2 className="aboutus-title">สาขาเทคโนโลยีสารสนเทศ (IT)</h2>
        <p className="aboutus-description">
        การคิดและทำอย่างสร้างสรรค์ คือแรงผลักดันที่พวกเรา ชาวเทคโนโลยีสารสนทศ วิทยาลัยเทคโนโลยีโปลิเทคนิคลานนา เชียงใหม่ ใช้เป็นแนวทางในการผลิตคอมพิวเตอร์ สร้างองค์ความที่โดนเด่นโดยบุคลากรผู้ทรงคุณวุฒิทั้งภายในและภายนอกสถานศึกษา เพิ่มพูนทักษะ ในด้านซ่อมบำรุงรักษาคอมพิวเตอร์ทั้งซอฟต์แวร์ และฮาร์ดแวร์ ผู้ที่สำเร็จการศึกษาสาขาสามารถประกอบอาชีพ ช่างในทุกองค์กรที่มีคอมพิวเตอร์หรือระบบสรสนเทศ ธุรกิจที่มีเทคโนโลยีสารสนเทศอยู่ ธุรกิจที่มีเทดโนโลยีสารสนเทศเป็นแกนหลัก ได้แก่ ธุรกิจผลิตซอฟต์แวร์หรือโปรแกรมคอมพิวตอร์ ธุรกิจบริการด้านข้อมูลข่าวสาร ธุรกิจด้านการให้ บริการระบบเครือข่ายคอมพิวเตอร์ ระบบอินเตอร์เน็ตหรือระบบเครือข่ายมือถือ ธุรกิจให้บริการด้านพาณิชย์ อิเล็กทรอนิกส์หรืออี-คอมเมิร์ช ธุรกิจให้คำปรึกษาด้านเทคโนโลยีสารสนทศ หรือที่เรียกว่าธุรกิจคอนซัลแตนต์ ธุรกิจแอนิมชั่นและเกม จบสาขาเทคโนโลยีสารสนเทศแล้ว สามารถไป ศึกษาต่อ ด้านระบบฐานข้อมูลองค์กร ด้านเน็ตเวิร์ต ด้านความปลอดภัยของระบบของคอมพิวเตอร์ ด้านระบบคอมพิวเตอร์อัจฉริยะหรือปัญญา และนำคอมพิวเตอร์ไปประยุกต์ในงานสาขาอื่น เช่น ด้านสื่อมวลชน ด้านมัลติมีเดีย ด้านแอนิมชั่น ด้านสารสนเทศเพื่อการแพทย์ ด้านสารสนเทศชีววิทยา ด้านการสร้างแบบจำลองเพื่อวิเคราะห์ทางเคมีและพิสิกส์ และสามารถศึกษาต่อระดับปริญญาตรีหลายสขา เช่น สาขาเทคโนโลยีสารสนเทศ สาขาคอมพิวตอร์ธุรกิจ, สาขาเทคโนโลยีสารสนทศธุรกิจ, สาขาเทคโนโลยีสารสนเทศและการสื่อสาร 
        </p>
      </div>
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
  <h2 className="gallery-title">ทีมคณาจารย์</h2>
  <div className="image-gallery">
    <div className="image-item">
      <img src="https://www.lannapoly.ac.th/online/Tea_picture/10402.jpg?155048" alt="ภาพ 1" className="gallery-image"></img>
      <p className="faculty-enname">MissMayulee Chailangka</p>
      <p className="faculty-name">นางสาวมยุลีย์ พงษ์บุพศิริกุล</p>
      <p className="faculty-department">หัวหน้าสาขางานเทคโนโลยีสารสนเทศ</p>
    </div>  
    <div className="image-item">
      <img src="https://www.lannapoly.ac.th/online/Tea_picture/10439.jpg?155048" alt="ภาพ 2" className="gallery-image"></img>
      <p className="faculty-enname">MissNutthakan Pirom</p>
      <p className="faculty-name">นางสาวณัฐกานต์ ภิรมณ์</p>
      <p className="faculty-department">รองหัวหน้าสาขาวิชาเทคโนโลยีสารสนเทศ</p>
    </div>
    <div className="image-item">
      <img src="https://www.lannapoly.ac.th/online/Tea_picture/10409.jpg?155048" alt="ภาพ 3" className="gallery-image"></img>
      <p className="faculty-enname">MissSawitta Pratoom</p>
      <p className="faculty-name">นางสาวสวิตตา ประทุม</p>
      <p className="faculty-department">ครูเทคโนโลยีสารสนเทศ</p>
    </div>
    <div className="image-item">
      <img src="https://www.lannapoly.ac.th/online/Tea_picture/10421.jpg?155048" alt="ภาพ 4" className="gallery-image"></img>
      <p className="faculty-enname">MissThunyalak Kuntha</p>
      <p className="faculty-name">นางสาวธัญญลักษณ์ กันธะ</p>
      <p className="faculty-department">ครูเทคโนโลยีสารสนเทศ</p>
    </div>
    <div className="image-item">
      <img src="https://www.lannapoly.ac.th/online/Tea_picture/10426.jpg?155048" alt="ภาพ 5" className="gallery-image"></img>
      <p className="faculty-enname">Mr.Paisan N.Lampang</p>
      <p className="faculty-name">นายไพศาล ณ ลำปาง</p>
      <p className="faculty-department">ครูเทคโนโลยีสารสนเทศ</p>
    </div>
    <div className="image-item">
      <img src="https://www.lannapoly.ac.th/online/Tea_picture/10462.jpg?155048" alt="ภาพ 6" className="gallery-image"></img>
      <p className="faculty-enname">MissNarin Phromme</p>
      <p className="faculty-name">นางสาวนาริน พรมมี</p>
      <p className="faculty-department">ครูเทคโนโลยีสารสนเทศ</p>
    </div>
    <div className="image-item">
      <img src="https://www.lannapoly.ac.th/online/Tea_picture/10466.jpg?155048" alt="ภาพ 7" className="gallery-image"></img>
      <p className="faculty-enname">Mr.Tewarit Wongchaya</p>
      <p className="faculty-name">นายเทวฤทธิ์ วงค์ฉายา</p>
      <p className="faculty-department">ครูเทคโนโลยีสารสนเทศ</p>
    </div>
    <div className="image-item">
      <img src="https://www.lannapoly.ac.th/online/Tea_picture/10476.jpg?155048" alt="ภาพ 8" className="gallery-image"></img>
      <p className="faculty-enname">MissWaranya Inchai</p>
      <p className="faculty-name">นางสาววรัญญา อินชัย</p>
      <p className="faculty-department">ครูเทคโนโลยีสารสนเทศ</p>
    </div>
    <div className="image-item">
      <img src="https://www.lannapoly.ac.th/online/Tea_picture/10477.jpg?155048" alt="ภาพ 9" className="gallery-image"></img>
      <p className="faculty-enname">Mr.Natthapong Namkham</p>
      <p className="faculty-name">นายณัฐพงษ์ นามคำ</p>
      <p className="faculty-department">ครูเทคโนโลยีสารสนเทศ</p>
    </div>
    <div className="image-item">
      <img src="https://www.lannapoly.ac.th/online/Tea_picture/10478.jpg?155048" alt="ภาพ 10" className="gallery-image"></img>
      <p className="faculty-enname">MissTanatchanok Kaewyos</p>
      <p className="faculty-name">นางสาวธนัตชนก แก้วยศ</p>
      <p className="faculty-department">ครูเทคโนโลยีสารสนเทศ</p>
    </div>
    <div className="image-item">
      <img src="https://www.lannapoly.ac.th/online/Tea_picture/10485.jpg?155048s" alt="ภาพ 11" className="gallery-image"></img>
      <p className="faculty-enname">Mr.Sarayut Phongphaeo</p>
      <p className="faculty-name">นายศรายุทธ ผ่องแผ้ว</p>
      <p className="faculty-department">ครูเทคโนโลยีสารสนเทศ</p>
    </div>
    <div className="image-item">
      <img src="https://www.lannapoly.ac.th/online/Tea_picture/10486.jpg?155048" alt="ภาพ 12" className="gallery-image"></img>
      <p className="faculty-enname">Mr.Surachai Charoensri</p>
      <p className="faculty-name">นายสุรชัย เจริญศรี</p>
      <p className="faculty-department">ครูเทคโนโลยีสารสนเทศ</p>
    </div>
    <div className="image-item">
      <img src="https://www.lannapoly.ac.th/online/Tea_picture/10488.jpg?155048" alt="ภาพ 13" className="gallery-image"></img>
      <p className="faculty-enname">MissThanyarat Mala</p>
      <p className="faculty-name">นางสาวธัญญรัตน์ มาลา</p>
      <p className="faculty-department">ครูเทคโนโลยีสารสนเทศ</p>
    </div>
    <div className="image-item">
      <img src="https://www.lannapoly.ac.th/online/Tea_picture/10489.jpg?155048" alt="ภาพ 14" className="gallery-image"></img>
      <p className="faculty-enname">Mr.Surawes Suwandumrongpon</p>
      <p className="faculty-name">นายสุรเวศม์ สุวรรณดำรงผล</p>
      <p className="faculty-department">ครูเทคโนโลยีสารสนเทศ</p>
    </div>
    <div className="image-item">
      <img src="https://www.lannapoly.ac.th/online/Tea_picture/10490.jpg?155048" alt="ภาพ 15" className="gallery-image"></img>
      <p className="faculty-enname">Methawint Mesathianjant</p>
      <p className="faculty-name">ว่าที่ร้อยตรีเมธาวิณทร์ เมษาเทียนจันทร์</p>
      <p className="faculty-department">ครูเทคโนโลยีสารสนเทศ</p>
    </div>
    <div className="image-item">
      <img src="https://www.lannapoly.ac.th/online/Tea_picture/13730.jpg?155048" alt="ภาพ 16" className="gallery-image"></img>
      <p className="faculty-enname">Mr.Jirawat Jommanee</p>
      <p className="faculty-name">นายจิรวัฒน์ จอมมณี</p>
      <p className="faculty-department">นักศึกษาฝึกประสบการณ์วิชาชีพเทคโนโลยีสารสนเทศ</p>
    </div>
    <div className="image-item">
      <img src="https://www.lannapoly.ac.th/online/Tea_picture/13731.jpg?155048" alt="ภาพ 17" className="gallery-image"></img>
      <p className="faculty-enname">Mr.Phakaphol Kongtoom</p>
      <p className="faculty-name">นายภคพล กองทุม</p>
      <p className="faculty-department">นักศึกษาฝึกประสบการณ์วิชาชีพเทคโนโลยีสารสนเทศ</p>
    </div>
    </div>
    
  </div>

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
</div>
</div>
{showButton && (
        <button className="back-to-top" onClick={scrollToTop}>
          ↑
        </button>
      )}

</div>



  );
};


export default Home;
