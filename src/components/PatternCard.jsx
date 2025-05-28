import React from 'react';
import CodeToggle from './CodeToggle';

export default function PatternCard({ pattern }) {
  return (
    <div className="border p-4 rounded shadow-lg mb-8">
      <img src={pattern.img} alt={pattern.name} className="h-16 mb-4" />
      <h2 className="text-xl font-bold mb-2">{pattern.name}</h2>
      <p className="mb-4">{pattern.desc}</p>
      <CodeToggle code={pattern.code} />
    </div>
  );
}