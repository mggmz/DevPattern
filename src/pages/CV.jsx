import React from 'react';

export default function CV() {
  return (
    <div className="container mx-auto py-20">
      <h1 className="text-3xl font-semibold mb-6">Mi CV como Desarrollador</h1>
      <embed src="/assets/cv.pdf" type="application/pdf" width="100%" height="800px" />
    </div>
  );
}