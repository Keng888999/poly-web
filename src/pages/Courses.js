import React, { useState } from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "./Courses.css";

const pdfFiles = [
  { id: 1, name: "หลักสูตร 1", url: "/PDF/21901v1.pdf" },
  { id: 2, name: "หลักสูตร 2", url: "/PDF/21903v1.pdf" },
  { id: 3, name: "หลักสูตร 3", url: "/PDF/31901v5.pdf" },
  { id: 4, name: "หลักสูตร 4", url: "/PDF/31903v3.pdf" },
];

const Courses = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const closeModal = () => setSelectedFile(null);

  return (
    <div className="courses-container">
      <div className="courses-content">
        <h2 className="courses-title">หลักสูตรที่เปิดสอน</h2>
        <p className="courses-description">
          นี่คือหลักสูตรที่พร้อมให้ดาวน์โหลดหรืออ่านออนไลน์ คลิกที่ชื่อหลักสูตรเพื่อเปิด PDF
        </p>
        <div className="pdf-grid">
          {pdfFiles.map((file) => (
            <div key={file.id} className="pdf-item">
              <button className="pdf-button" onClick={() => setSelectedFile(file.url)}>
                {file.name}
              </button>
            </div>
          ))}
        </div>
      </div>

      {selectedFile && (
        <div className="pdf-modal" onClick={closeModal}>
          <div className="pdf-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>
              ปิด
            </button>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
              <Viewer fileUrl={selectedFile} />
            </Worker>
          </div>
        </div>
      )}
    </div>
  );
};

export default Courses;
