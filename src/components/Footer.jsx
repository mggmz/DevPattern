import React from 'react';
import { FaCreativeCommons, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-200 text-gray-700 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-1">
          <FaCreativeCommons />
          <span>2025 DevPattern</span>
        </div>
        <div className="text-center">
          <div className="font-semibold">Encuéntrame en línea</div>
          <div className="flex items-center justify-center space-x-4 mt-1">
            <a href="https://linkedin.com/in/tu-linkedin" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="hover:text-blue-700 transition" />
            </a>
            <a href="https://github.com/tu-github" target="_blank" rel="noopener noreferrer">
              <FaGithub className="hover:text-gray-900 transition" />
            </a>
          </div>
        </div>
        <div className="space-x-6">
          <a href="/" className="hover:underline">Home</a>
          <a href="/patterns" className="hover:underline">Patrones</a>
          <a href="/contact" className="hover:underline">Contacto</a>
        </div>
      </div>
    </footer>
  );
}