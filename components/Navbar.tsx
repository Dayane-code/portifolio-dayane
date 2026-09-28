"use client";

import { useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className="
        fixed top-4 left-1/2
        -translate-x-1/2
        w-[92%]
        max-w-7xl
        z-50
        rounded-2xl
        backdrop-blur-2xl
        bg-black/30
        border border-white/10
      "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-5">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <a
            href="#inicio"
            onClick={closeMenu}
            className="flex items-center gap-2"
          >
            <Sparkles className="text-violet-400" size={22} />

            <h1 className="text-lg sm:text-xl font-bold tracking-wider text-white">
              DAYANE
              <span className="text-violet-400"> STUDIO</span>
            </h1>
          </a>

          {/* Menu Desktop */}
          <nav className="hidden md:flex gap-8 text-gray-300 text-sm">
            <a
              href="#inicio"
              className="hover:text-violet-400 transition"
            >
              Início
            </a>

            <a
              href="#servicos"
              className="hover:text-violet-400 transition"
            >
              Serviços
            </a>

            <a
              href="#projetos"
              className="hover:text-violet-400 transition"
            >
              Projetos
            </a>

            <a
              href="#contato"
              className="hover:text-violet-400 transition"
            >
              Contato
            </a>
          </nav>

          {/* Botão Mobile */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="
              md:hidden
              flex items-center justify-center
              w-10 h-10
              rounded-xl
              border border-white/10
              bg-white/5
              text-gray-300
              hover:text-violet-400
              hover:border-violet-400/30
              transition
            "
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Menu Mobile */}
        {menuOpen && (
          <nav
            className="
              md:hidden
              mt-4
              pt-4
              border-t border-white/10
              flex flex-col
              gap-2
            "
          >
            <a
              href="#inicio"
              onClick={closeMenu}
              className="
                px-4 py-3
                rounded-xl
                text-gray-300
                hover:text-violet-400
                hover:bg-violet-500/10
                transition
              "
            >
              Início
            </a>

            <a
              href="#servicos"
              onClick={closeMenu}
              className="
                px-4 py-3
                rounded-xl
                text-gray-300
                hover:text-violet-400
                hover:bg-violet-500/10
                transition
              "
            >
              Serviços
            </a>

            <a
              href="#projetos"
              onClick={closeMenu}
              className="
                px-4 py-3
                rounded-xl
                text-gray-300
                hover:text-violet-400
                hover:bg-violet-500/10
                transition
              "
            >
              Projetos
            </a>

            <a
              href="#contato"
              onClick={closeMenu}
              className="
                px-4 py-3
                rounded-xl
                text-gray-300
                hover:text-violet-400
                hover:bg-violet-500/10
                transition
              "
            >
              Contato
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}