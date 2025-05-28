import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function PDFViewer({ fileUrl }) {
  return (
    <div className="overflow-auto h-[80vh] p-4">
      <Document file={fileUrl}>
        {Array.from(new Array(5), (el, index) => (
          <Page
            key={`page_${index + 1}`}
            pageNumber={index + 1}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            className="mx-auto mb-4 shadow"
          />
        ))}
      </Document>
    </div>
  );
}
