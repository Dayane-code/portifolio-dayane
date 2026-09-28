"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

const projects = [
  {
    title: "Sistema Web — Dra. Adrianny Lima",
    category: "Sistema Web",
    description:
      "Site completo com frontend, backend e sistema de gestão de leads para acompanhamento das solicitações recebidas pela clínica.",
    color: "from-violet-500 to-fuchsia-500",
    image: "/images/odontologia.jpg",
    link: "https://site-adrianny-y0rr.onrender.com",
  },
  {
    title: "Case Beauty",
    category: "Landing Page",
    description:
      "Landing page desenvolvida para apresentar uma marca de beleza com foco em identidade visual, experiência do usuário e conversão.",
    color: "from-pink-500 to-rose-500",
    image: "/images/case-beauty2.jpg",
    link: "https://studiocasebeauty.netlify.app/",
  },
  {
    title: "IA & Atendimento Inteligente",
    category: "Automação",
    description:
      "Fluxos inteligentes para atendimento, IA, chatbot e automações empresariais.",
    color: "from-cyan-500 to-sky-500",
    image: "/images/automacao.jpg",
  },
  {
    title: "Convites Interativos",
    category: "One Page",
    description:
      "Convites digitais personalizados para aniversários, casamentos e eventos.",
    color: "from-pink-500 to-rose-500",
    image: "/images/convite.png",
  },
];

export default function Projects() {
  return (
    <section
      id="projetos"
      className="relative isolate overflow-hidden bg-[#04040A]/35 px-5 py-24 sm:px-6 sm:py-32 lg:py-40"
    >
      {/* Fundo Aurora */}
      <div className="absolute inset-0 opacity-90">
        <div className="absolute left-[-180px] top-[-220px] h-[750px] w-[750px] rounded-full bg-violet-600/30 blur-[190px]" />

        <div className="absolute bottom-[-200px] right-[-150px] h-[650px] w-[650px] rounded-full bg-pink-500/20 blur-[180px]" />

        <div className="absolute right-1/3 top-1/2 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[160px]" />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/10 to-[#04040A]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center sm:mb-20"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-2 sm:px-4">
            <Sparkles size={16} className="text-violet-400" />

            <p className="text-xs text-violet-300 sm:text-sm">
              Projetos em Destaque
            </p>
          </div>

          <h2 className="mx-auto mb-6 max-w-5xl text-4xl font-black leading-tight text-white md:text-6xl">
            Projetos que transformam ideias em experiências digitais.
          </h2>

          <p className="mx-auto max-w-2xl text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
            Cada projeto é desenvolvido pensando na experiência do usuário,
            identidade visual e resultado.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                duration: 0.7,
              }}
              whileHover={{ y: -10 }}
              className="
                group
                relative
                overflow-hidden
                rounded-[28px]
                border border-white/10
                bg-gradient-to-br from-white/10 via-white/5 to-white/[0.02]
                backdrop-blur-2xl
                shadow-[0_0_40px_rgba(168,85,247,0.05)]
                transition-all
                duration-500
                hover:border-violet-400/40
                hover:shadow-[0_0_60px_rgba(236,72,153,0.15)]
                sm:rounded-[32px]
              "
            >
              {/* Notebook Mockup */}
              <div className="relative overflow-hidden bg-[#101018] p-3 sm:p-5">
                <div className="rounded-[20px] border border-white/10 bg-[#09090F] p-2 shadow-2xl sm:rounded-[24px]">
                  {/* Barra do navegador */}
                  <div className="mb-2 flex items-center gap-1.5 px-2 py-1 sm:gap-2">
                    <div className="h-2 w-2 rounded-full bg-red-400 sm:h-2.5 sm:w-2.5" />
                    <div className="h-2 w-2 rounded-full bg-yellow-400 sm:h-2.5 sm:w-2.5" />
                    <div className="h-2 w-2 rounded-full bg-green-400 sm:h-2.5 sm:w-2.5" />
                  </div>

                  {/* Imagem do projeto */}
                  <div className="relative flex h-52 w-full items-center justify-center overflow-hidden rounded-lg bg-black/40 sm:h-72 sm:rounded-xl">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-contain transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>

              {/* Conteúdo */}
              <div className="p-5 sm:p-8">
                <span
                  className={`inline-flex rounded-full bg-gradient-to-r ${project.color} px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-white sm:px-4 sm:py-2 sm:text-xs`}
                >
                  {project.category}
                </span>

                <h3 className="mt-3 mb-3 text-xl font-bold leading-tight text-white sm:mb-4 sm:text-2xl">
                  {project.title}
                </h3>

                <p className="mb-6 text-sm leading-7 text-gray-400 sm:mb-8 sm:text-base">
                  {project.description}
                </p>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex
                      items-center
                      justify-center
                      gap-2
                      rounded-full
                      border
                      border-violet-500/30
                      px-5
                      py-3
                      text-sm
                      font-medium
                      text-violet-200
                      transition-all
                      duration-300
                      hover:bg-violet-500/10
                      hover:text-pink-300
                    "
                  >
                    Ver Projeto
                    <ArrowUpRight size={18} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}