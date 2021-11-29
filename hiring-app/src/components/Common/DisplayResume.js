import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import "../../components/../styles/DisplayContent.css";
// import { Text, View, StyleSheet } from '@react-pdf/renderer';


const DisplayResume = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  

  return (
    <div className=" d-flex justify-content-end py-5 justify-content-center">
      <Document 
        className="display"
        file={"http://localhost:5000/download/Resume.pdf"}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={1} />
      </Document>
    </div>
  );
};

export default DisplayResume;
