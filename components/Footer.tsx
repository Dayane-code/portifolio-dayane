"use client";

import {
  ArrowUp,
  Mail,
  MessageCircle,
  Sparkles,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#030308] px-5 py-12 sm:px-6 sm:py-16">
      {/* Aurora */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-[-250px] h-[400px] w-[400px] rounded-full bg-violet-600/10 blur-[150px] sm:h-[500px] sm:w-[500px] sm:blur-[180px]" />

        <div className="absolute bottom-[-250px] right-1/4 h-[400px] w-[400px] rounded-full bg-pink-500/10 blur-[150px] sm:h-[500px] sm:w-[500px] sm:blur-[180px]" />

        <div className="absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[120px] sm:h-[300px] sm:w-[300px] sm:blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Parte principal */}
        <div className="grid gap-10 md:grid-cols-3 md:gap-12">
          {/* Logo / apresentação */}
          <div>
            <div className="mb-5 flex items-center gap-2">
              <Sparkles className="text-violet-400" size={22} />

              <h2 className="text-lg font-bold tracking-wider text-white sm:text-xl">
                DAYANE
                <span className="text-violet-400"> STUDIO</span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-gray-400 sm:text-base">
              Tecnologia, criatividade e inteligência artificial para criar
              experiências digitais que conectam pessoas e negócios.
            </p>
          </div>

          {/* Navegação */}
          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-white sm:text-sm">
              Navegação
            </h3>

            <nav className="flex flex-col gap-3">
              <a
                href="#inicio"
                className="w-fit text-sm text-gray-400 transition-colors hover:text-violet-400 sm:text-base"
              >
                Início
              </a>

              <a
                href="#sobre"
                className="w-fit text-sm text-gray-400 transition-colors hover:text-violet-400 sm:text-base"
              >
                Sobre
              </a>

              <a
                href="#servicos"
                className="w-fit text-sm text-gray-400 transition-colors hover:text-violet-400 sm:text-base"
              >
                Serviços
              </a>

              <a
                href="#projetos"
                className="w-fit text-sm text-gray-400 transition-colors hover:text-violet-400 sm:text-base"
              >
                Projetos
              </a>

              <a
                href="#contato"
                className="w-fit text-sm text-gray-400 transition-colors hover:text-violet-400 sm:text-base"
              >
                Contato
              </a>
            </nav>
          </div>

          {/* Contato */}
          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-white sm:text-sm">
              Vamos conversar
            </h3>

            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/5521966912443"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-sm text-gray-400 transition-colors hover:text-violet-400 sm:text-base"
              >
                <MessageCircle
                  size={18}
                  className="shrink-0 text-violet-400 transition-transform group-hover:scale-110"
                />
                WhatsApp
              </a>

              <a
                href="mailto:dayanecardosof@gmail.com"
                className="group flex items-center gap-3 text-sm text-gray-400 transition-colors hover:text-cyan-400 sm:text-base"
              >
                <Mail
                  size={18}
                  className="shrink-0 text-cyan-400 transition-transform group-hover:scale-110"
                />
                E-mail
              </a>

              <a
                href="https://www.linkedin.com/in/dayane-fernandesj/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-sm text-gray-400 transition-colors hover:text-pink-400 sm:text-base"
              >
                <span className="flex h-[18px] w-[18px] shrink-0 items-center justify-center text-sm font-bold text-pink-400 transition-transform group-hover:scale-110">
                  in
                </span>
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Linha */}
        <div className="my-10 h-px bg-white/10 sm:my-12" />

        {/* Rodapé inferior */}
        <div className="flex flex-col items-center justify-between gap-5 text-center text-xs text-gray-500 sm:text-sm md:flex-row md:text-left">
          <p>
            © {new Date().getFullYear()} Dayane Studio. Todos os direitos
            reservados.
          </p>

          <a
            href="#inicio"
            className="group flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 transition-all duration-300 hover:border-violet-500/40 hover:bg-violet-500/10 hover:text-violet-300"
          >
            Voltar ao topo
            <ArrowUp
              size={16}
              className="transition-transform duration-300 group-hover:-translate-y-1"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}