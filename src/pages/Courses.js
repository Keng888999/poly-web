import React, { useState } from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "./Courses.css"; // สไตล์สำหรับการตกแต่ง

const Courses = () => {
  const [selectedPdf, setSelectedPdf] = useState(null); // เก็บ URL ของ PDF ที่ถูกเลือก

  const pdfFiles = [
    { id: 1, name: "Course 1", url: "/pdfs/21901v1.pdf" },
    { id: 2, name: "Course 2", url: "/pdfs/21903v1.pdf" },
    { id: 3, name: "Course 3", url: "/pdfs/31901v5.pdf" },
    { id: 4, name: "Course 4", url: "/pdfs/31903v3.pdf" },
  ];

  const closeModal = () => setSelectedPdf(null); // ฟังก์ชันปิด Modal

  return (
    <div className="courses-container">
      <h2 className="courses-title">Available PDF Courses</h2>
      <div className="pdf-grid">
        {pdfFiles.map((file) => (
          <div key={file.id} className="pdf-item">
            <h3 className="pdf-title">{file.name}</h3>
            <button
              className="view-button"
              onClick={() => setSelectedPdf(file.url)}
            >
              View PDF
            </button>
          </div>
        ))}
      </div>

      {/* Modal สำหรับแสดง PDF */}
      {selectedPdf && (
        <div className="pdf-modal">
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>
              ×
            </button>
            <div className="pdf-viewer">
              <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
                <Viewer fileUrl={selectedPdf} />
              </Worker>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Courses;
