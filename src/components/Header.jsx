import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg';

export default function Header() {
  const [openPatterns, setOpenPatterns] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-pastel-red text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="DevPattern Logo" className="h-8 w-8" />
          <span className="font-bold text-xl">DevPattern</span>
        </Link>
        <nav className="flex items-center space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:underline transition underline-offset-4 ${
                isActive ? 'underline' : ''
              }`
            }
          >
            Home
          </NavLink>
          <div className="relative">
            <button
              onMouseEnter={() => setOpenPatterns(true)}
              onMouseLeave={() => setOpenPatterns(false)}
              className="hover:underline transition underline-offset-4"
            >
              Patrones
            </button>
            {openPatterns && (
              <div
                onMouseEnter={() => setOpenPatterns(true)}
                onMouseLeave={() => setOpenPatterns(false)}
                className="absolute top-full mt-1 bg-white text-gray-800 rounded shadow-lg py-2"
              >
                <Link
                  to="/patterns/creational"
                  className="block px-4 py-1 hover:bg-gray-100"
                >
                  Creacionales
                </Link>
                <Link
                  to="/patterns/structural"
                  className="block px-4 py-1 hover:bg-gray-100"
                >
                  Estructurales
                </Link>
                <Link
                  to="/patterns/behavioral"
                  className="block px-4 py-1 hover:bg-gray-100"
                >
                  Comportamiento
                </Link>
              </div>
            )}
          </div>
          <NavLink
            to="/cv"
            className={({ isActive }) =>
              `hover:underline transition underline-offset-4 ${
                isActive ? 'underline' : ''
              }`
            }
          >
            CV
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `hover:underline transition underline-offset-4 ${
                isActive ? 'underline' : ''
              }`
            }
          >
            Contacto
          </NavLink>
        </nav>
      </div>
    </header>
  );
}