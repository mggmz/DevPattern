import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function CV() {
  const [scale, setScale] = useState(1.2);

  return (
    <section className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="mb-4 text-3xl font-semibold">Currículum Vitae</h1>
      <p className="mb-6 leading-relaxed">
        A continuación puedes revisar mi trayectoria como desarrollador. Usa los
        controles para acercar o alejar el documento.
      </p>

      <div className="mb-4 flex gap-3">
        <button
          className="rounded bg-brand-red px-3 py-1 text-white"
          onClick={() => setScale(scale + 0.2)}
        >
          +
        </button>
        <button
          className="rounded bg-brand-red px-3 py-1 text-white"
          onClick={() => setScale(scale > 0.6 ? scale - 0.2 : scale)}
        >
          −
        </button>
      </div>

      <div className="overflow-auto rounded border shadow">
        <Document file="/cv.pdf">
          <Page pageNumber={1} scale={scale} />
        </Document>
      </div>
    </section>
  );
}
