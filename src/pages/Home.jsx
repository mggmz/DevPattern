import React from 'react';
import { motion } from 'framer-motion';

const sections = [
  { title: 'ODS 4: Educación de calidad', content: 'Explicación sobre la importancia de ODS 4 en Ingeniería de Software.', img: '/assets/ods4.svg' },
  { title: 'Patrones en Software', content: 'Justificación de patrones usados en proyectos de ingeniería.', img: '/assets/patterns.svg' },
  // Puedes agregar más secciones aquí...
];

export default function Home() {
  return (
    <div className="container mx-auto py-20 space-y-20">
      {sections.map((sec, i) => (
        <motion.section
          key={i}
          initial={{ opacity: 0, x: i % 2 ? 100 : -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-8"
        >
          <img src={sec.img} alt={sec.title} className="w-1/2 opacity-0 animate-fadeIn" />
          <div className="w-1/2">
            <h2 className="text-2xl font-bold mb-4">{sec.title}</h2>
            <p>{sec.content}</p>
          </div>
        </motion.section>
      ))}
    </div>
  );
}