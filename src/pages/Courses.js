import React from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "./Courses.css"; // สไตล์สำหรับการตกแต่ง

const Courses = () => {
  const pdfFiles = [
    { id: 1, name: "Course 1", url: "../PDF/21901v1.pdf" },
    { id: 2, name: "Course 2", url: "../PDF/21903v1.pdf" },
    { id: 3, name: "Course 3", url: "../PDF/31901v5.pdf" },
    { id: 4, name: "Course 4", url: "../PDF/31903v3.pdf" },
  ];

  return (
    <div className="courses-container">
      <h2 className="courses-title">Available PDF Courses</h2>
      <div className="pdf-grid">
        {pdfFiles.map((file) => (
          <div key={file.id} className="pdf-item">
            <h3 className="pdf-title">{file.name}</h3>
            <div className="pdf-viewer">
              <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.14.305/build/pdf.worker.min.js">
                <Viewer fileUrl={file.url} />
              </Worker>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
