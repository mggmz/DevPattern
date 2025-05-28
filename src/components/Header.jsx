import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

const menuLink =
  "relative px-3 py-2 transition-colors duration-200 hover:underline";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 bg-brand-red text-white shadow-lg">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-lg font-semibold">
          <img
            src="/logo.png"
            alt="DevPattern logo"
            className="h-8 w-8 object-contain"
          />
          DevPattern
        </Link>

        {/* Main links */}
        <ul className="flex items-center gap-4 text-sm font-medium">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                clsx(menuLink, isActive && "underline-offset-8")
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cv"
              className={({ isActive }) =>
                clsx(menuLink, isActive && "underline-offset-8")
              }
            >
              CV
            </NavLink>
          </li>

          {/* Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <button
              className={clsx(menuLink, "flex items-center gap-1")}
              aria-haspopup="true"
              aria-expanded={open}
            >
              Patrones
              <ChevronDownIcon className="h-4 w-4" />
            </button>

            <div
              className={clsx(
                "absolute right-0 mt-2 w-52 origin-top-right rounded-md bg-white py-2 shadow-lg transition-all duration-200",
                open
                  ? "scale-100 opacity-100"
                  : "pointer-events-none scale-95 opacity-0"
              )}
            >
              <NavLink
                to="/patrones/creacionales"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Patrones creacionales
              </NavLink>
              <NavLink
                to="/patrones/estructurales"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Patrones estructurales
              </NavLink>
              <NavLink
                to="/patrones/comportamiento"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Patrones de comportamiento
              </NavLink>
            </div>
          </li>

          <li>
            <NavLink
              to="/contacto"
              className={({ isActive }) =>
                clsx(menuLink, isActive && "underline-offset-8")
              }
            >
              Contacto
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
