import { Link } from "react-router-dom";
import logo from "../assets/icon_transparent.png";

export default function Footer() {
  return (
    <footer className="border-t border-ravagx-border bg-ravagx-card">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <Link
          to="/"
          className="flex items-center gap-2 text-lg font-bold text-white"
        >
          <img src={logo} alt="RavaGx" className="h-12 w-10" />
          RavaGx
        </Link>

        <div className="flex gap-6 text-sm text-ravagx-gray">
          <Link to="/terminos" className="transition hover:text-white">
            Términos y Condiciones
          </Link>
          <Link to="/privacidad" className="transition hover:text-white">
            Políticas de Privacidad
          </Link>
        </div>

        <p className="text-xs text-ravagx-gray">
          © {new Date().getFullYear()} RavaGx. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
