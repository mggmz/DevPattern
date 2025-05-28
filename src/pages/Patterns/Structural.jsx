import React from 'react';
import { patterns } from '../../data';
import PatternCard from '../../components/PatternCard';

export default function Structural() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Patrones Estructurales</h1>
      {patterns.structural.map((p, i) => (
        <PatternCard key={i} pattern={p} />
      ))}
    </div>
  );
}