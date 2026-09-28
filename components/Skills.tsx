"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Brain,
  Bot,
  Globe,
  Server,
  BarChart3,
  Zap,
  Braces,
  Layers3,
  Workflow,
  Terminal,
  Sparkles,
} from "lucide-react";

const technologies = [
  {
    name: "HTML5",
    icon: Globe,
    size: "normal",
  },
  {
    name: "CSS3",
    icon: Code2,
    size: "normal",
  },
  {
    name: "JavaScript",
    icon: Braces,
    size: "large",
  },
  {
    name: "React",
    icon: Layers3,
    size: "large",
  },
  {
    name: "Next.js",
    icon: Code2,
    size: "large",
  },
  {
    name: "TypeScript",
    icon: Terminal,
    size: "normal",
  },
  {
    name: "Tailwind CSS",
    icon: Zap,
    size: "normal",
  },
  {
    name: "PHP",
    icon: Server,
    size: "normal",
  },
  {
    name: "Python",
    icon: Brain,
    size: "large",
  },
  {
    name: "Flask",
    icon: Workflow,
    size: "normal",
  },
  {
    name: "SQL",
    icon: Database,
    size: "normal",
  },
  {
    name: "Ciência de Dados",
    icon: BarChart3,
    size: "large",
  },
  {
    name: "APIs",
    icon: Workflow,
    size: "normal",
  },
];

const floatingStars = [
  { top: "8%", left: "12%", delay: 0 },
  { top: "18%", left: "82%", delay: 1.2 },
  { top: "45%", left: "7%", delay: 2 },
  { top: "68%", left: "91%", delay: 0.7 },
  { top: "82%", left: "20%", delay: 1.8 },
  { top: "75%", left: "76%", delay: 2.5 },
  { top: "32%", left: "94%", delay: 1.4 },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#07070F]/35 px-5 py-24 sm:px-6 sm:py-32 lg:py-40"
    >
      {/* Glow principal */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[150px]" />

      {/* Pequenas estrelas decorativas */}
      {floatingStars.map((star, index) => (
        <motion.span
          key={index}
          className="pointer-events-none absolute h-1 w-1 rounded-full bg-white/60"
          style={{
            top: star.top,
            left: star.left,
          }}
          animate={{
            opacity: [0.2, 0.9, 0.2],
            scale: [1, 1.8, 1],
          }}
          transition={{
            duration: 3,
            delay: star.delay,
            repeat: Infinity,
          }}
        />
      ))}

      <div className="relative z-20 mx-auto max-w-7xl">
        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-14 max-w-3xl text-center sm:mb-20"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/5 px-4 py-2 text-sm text-violet-300">
            <Sparkles size={16} />
            Tecnologias & Ferramentas
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            As ferramentas que já usei para{" "}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
              transformar ideias em projetos.
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-400 sm:mt-6 sm:text-lg sm:leading-relaxed">
            Um pouco do universo tecnológico que faz parte dos meus projetos,
            estudos e experiências profissionais.
          </p>
        </motion.div>

        {/* Constelação */}
        <div className="relative min-h-[500px] overflow-hidden sm:min-h-[560px] md:min-h-[620px]">
          {/* Escala da constelação para telas menores */}
          <div className="absolute inset-0 flex items-center justify-center scale-[0.58] sm:scale-[0.78] md:scale-100">
            
            {/* Linhas decorativas */}
            <div className="absolute h-[500px] w-[500px] rounded-full border border-violet-500/[0.08]" />

            <div className="absolute h-[360px] w-[360px] rounded-full border border-fuchsia-500/[0.08]" />

            <div className="absolute h-[220px] w-[220px] rounded-full border border-pink-500/[0.08]" />

            {/* Centro da constelação */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="
                relative
                z-30
                flex
                h-40
                w-40
                flex-col
                items-center
                justify-center
                rounded-full
                border
                border-violet-400/30
                bg-[#0b0a16]/90
                text-center
                backdrop-blur-xl
                shadow-[0_0_80px_rgba(139,92,246,0.18)]
                md:h-48
                md:w-48
              "
            >
              <div className="absolute inset-3 rounded-full border border-violet-500/10" />

              <Bot
                size={38}
                className="mb-3 text-violet-400"
              />

              <span className="font-semibold text-white">
                IA & Automação
              </span>

              <span className="mt-1 text-xs text-gray-500">
                meu universo
              </span>
            </motion.div>

            {/* Tecnologias */}
            <div className="absolute inset-0 flex items-center justify-center">
              {technologies.map((technology, index) => {
                const Icon = technology.icon;

                const angle =
                  (index / technologies.length) * Math.PI * 2;

                const radius =
                  technology.size === "large"
                    ? 250
                    : 190;

                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                  <motion.div
                    key={technology.name}
                    initial={{
                      opacity: 0,
                      scale: 0.5,
                      x: 0,
                      y: 0,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                      x,
                      y,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.7,
                      delay: index * 0.08,
                      type: "spring",
                      stiffness: 80,
                    }}
                    whileHover={{
                      scale: 1.15,
                      zIndex: 40,
                    }}
                    className="absolute"
                  >
                    <div
                      className={`
                        group
                        flex
                        items-center
                        gap-2
                        rounded-full
                        border
                        border-white/10
                        bg-white/[0.04]
                        px-4
                        py-2.5
                        text-gray-300
                        shadow-lg
                        backdrop-blur-xl
                        transition-all
                        duration-300
                        hover:border-violet-400/40
                        hover:bg-violet-500/10
                        hover:text-white
                        ${
                          technology.size === "large"
                            ? "px-5 py-3"
                            : ""
                        }
                      `}
                    >
                      <Icon
                        size={
                          technology.size === "large"
                            ? 19
                            : 16
                        }
                        className="text-violet-400 transition-transform duration-300 group-hover:rotate-6"
                      />

                      <span
                        className={
                          technology.size === "large"
                            ? "text-sm font-medium"
                            : "text-xs font-medium"
                        }
                      >
                        {technology.name}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Pontos de conexão */}
            <div className="absolute left-[30%] top-[18%] h-2 w-2 rounded-full bg-violet-400/70 shadow-[0_0_15px_rgba(167,139,250,0.8)]" />

            <div className="absolute right-[28%] top-[25%] h-1.5 w-1.5 rounded-full bg-fuchsia-400/60" />

            <div className="absolute bottom-[20%] left-[25%] h-2 w-2 rounded-full bg-pink-400/50" />

            <div className="absolute bottom-[25%] right-[25%] h-1.5 w-1.5 rounded-full bg-cyan-400/60" />
          </div>
        </div>

        {/* Rodapé da seção */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8 text-center sm:mt-10"
        >
          <p className="text-sm text-gray-500">
            Desenvolvimento • Dados • IA • Automação • Experiência Digital
          </p>
        </motion.div>
      </div>
    </section>
  );
}