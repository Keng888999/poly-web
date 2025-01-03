import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ViewPdf.css";

const pdfFiles = {
  1: "../PDF/21901v1.pdf",
  2: "../PDF/21903v1.pdf",
  3: "../PDF/31901v5.pdf",
  4: "../PDF/31903v3.pdf",
};

const ViewPdf = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const pdfUrl = pdfFiles[id];

  if (!pdfUrl) {
    return <div>Invalid PDF file</div>;
  }

  return (
    <div className="view-pdf-container">
      <button className="back-button" onClick={() => navigate(-1)}>
        Go Back
      </button>
      <iframe
        src={pdfUrl}
        className="pdf-viewer"
        title={`PDF ${id}`}
        frameBorder="0"
      />
    </div>
  );
};

export default ViewPdf;
