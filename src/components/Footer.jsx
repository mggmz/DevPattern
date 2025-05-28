import { Link } from "react-router-dom";
import {
  LinkedinIcon,
  GithubIcon
} from "@heroicons/react/24/solid"; // usa outline si prefieres

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 sm:flex-row sm:items-start sm:justify-between">
        {/* Izquierda */}
        <div className="flex items-center gap-2 text-sm">
          <span>&copy; 2025</span>
          <span className="font-semibold">DevPattern</span>
          <span className="select-none">·</span>
          <span className="text-xs">CC BY-SA</span>
        </div>

        {/* Centro */}
        <div className="text-center">
          <h3 className="mb-1 text-sm font-semibold uppercase tracking-wide">
            Encuéntrame en línea
          </h3>
          <div className="flex justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/tu-usuario"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="h-6 w-6 hover:text-brand-red" />
            </a>
            <a
              href="https://github.com/tu-usuario"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <GithubIcon className="h-6 w-6 hover:text-brand-red" />
            </a>
          </div>
        </div>

        {/* Derecha */}
        <div className="flex flex-col items-end gap-1 text-sm">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/patrones/creacionales" className="hover:underline">
            Patrones
          </Link>
          <Link to="/contacto" className="hover:underline">
            Contacto
          </Link>
        </div>
      </div>
    </footer>
  );
}
