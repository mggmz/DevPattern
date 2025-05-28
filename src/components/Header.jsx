import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../public/logo.png';

export default function Header() {
  const pastelRed = 'bg-red-300';
  return (
    <header className={`${pastelRed} fixed top-0 w-full z-40`}>
      <div className="container mx-auto flex items-center justify-between p-4">
        <NavLink to="/">
          <img src={logo} alt="DevPattern" className="h-8" />
        </NavLink>
        <nav className="flex space-x-6 text-gray-800">
          <NavLink to="/" className={({ isActive }) => isActive ? 'underline' : ''}>Home</NavLink>
          <div className="relative group">
            <span className="cursor-pointer">Patrones</span>
            <div className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded opacity-0 group-hover:opacity-100 transition-opacity">
              <NavLink to="/patterns/creational" className="block px-4 py-2 hover:bg-gray-100">Creacionales</NavLink>
              <NavLink to="/patterns/structural" className="block px-4 py-2 hover:bg-gray-100">Estructurales</NavLink>
              <NavLink to="/patterns/behavioral" className="block px-4 py-2 hover:bg-gray-100">Comportamiento</NavLink>
            </div>
          </div>
          <NavLink to="/cv" className={({ isActive }) => isActive ? 'underline' : ''}>CV</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'underline' : ''}>Contacto</NavLink>
        </nav>
      </div>
    </header>
  );
}