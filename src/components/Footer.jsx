import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-200 fixed bottom-0 w-full py-4">
      <div className="container mx-auto flex items-center justify-between text-sm text-gray-700">
        <div className="flex items-center space-x-2">
          <span>© 2025</span>
          <span>Creative Commons</span>
          <span>DevPatterns</span>
        </div>
        <div className="text-center">
          <div className="font-semibold">Encuéntrame en línea</div>
          <div className="flex space-x-3 mt-1">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">🔗 LinkedIn</a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">🔗 GitHub</a>
          </div>
        </div>
        <div className="flex space-x-6">
          <a href="/" className="hover:underline">Home</a>
          <a href="/patterns" className="hover:underline">Patrones</a>
          <a href="/contact" className="hover:underline">Contacto</a>
        </div>
      </div>
    </footer>
  );
}