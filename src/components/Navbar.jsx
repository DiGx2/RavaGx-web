import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/icon_transparent.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-ravagx-bg/90 backdrop-blur-md border-b border-ravagx-border">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-extrabold tracking-tight text-white"
        >
          <img src={logo} alt="RavaGx" className="h-14 w-12" />
          RavaGx
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="/#features"
            className="text-sm font-medium text-ravagx-gray transition hover:text-white"
          >
            Características
          </a>
          <a
            href="/#app"
            className="text-sm font-medium text-ravagx-gray transition hover:text-white"
          >
            App
          </a>
          <button
            onClick={() =>
              window.dispatchEvent(new CustomEvent("open-waitlist"))
            }
            className="rounded-full border border-ravagx-orange px-5 py-2 text-sm font-semibold text-ravagx-orange transition hover:bg-ravagx-orange hover:text-white cursor-pointer"
          >
            Unirse a la lista
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="text-white md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="flex flex-col gap-4 border-t border-ravagx-border bg-ravagx-bg px-6 py-5 md:hidden">
          <a
            href="/#features"
            onClick={() => setOpen(false)}
            className="text-sm font-medium text-ravagx-gray transition hover:text-white"
          >
            Características
          </a>
          <a
            href="/#app"
            onClick={() => setOpen(false)}
            className="text-sm font-medium text-ravagx-gray transition hover:text-white"
          >
            App
          </a>
          <button
            onClick={() => {
              setOpen(false);
              window.dispatchEvent(new CustomEvent("open-waitlist"));
            }}
            className="w-fit rounded-full border border-ravagx-orange px-5 py-2 text-sm font-semibold text-ravagx-orange transition hover:bg-ravagx-orange hover:text-white cursor-pointer"
          >
            Unirse a la lista
          </button>
        </div>
      )}
    </nav>
  );
}
