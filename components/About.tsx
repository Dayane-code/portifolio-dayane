"use client";

import { motion } from "framer-motion";
import { Brain, Bot, Code2, Sparkles } from "lucide-react";

const skills = [
  {
    icon: Brain,
    title: "Inteligência Artificial",
    description: "Soluções com IA para atendimento, produtividade e experiência do cliente.",
  },
  {
    icon: Bot,
    title: "Automação de Processos",
    description: "Fluxos inteligentes, integrações e chatbots para empresas.",
  },
  {
    icon: Code2,
    title: "Desenvolvimento Web",
    description: "Sites profissionais, landing pages e sistemas personalizados.",
  },
];

export default function About() {
  return (
    <section
    id="sobre"
    className="relative overflow-hidden bg-[#05050B]/35 px-5 py-24 sm:px-6 sm:py-32 lg:py-40"
    >

      {/* Fundo Aurora */}
      <div className="absolute inset-0">
        <div className="absolute -left-32 top-10 h-[500px] w-[500px] rounded-full bg-violet-600/20 blur-[180px]" />
        <div className="absolute -right-32 bottom-10 h-[500px] w-[500px] rounded-full bg-pink-500/15 blur-[180px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.08),transparent_70%)]" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-0 lg:grid-cols-2 lg:gap-20">

        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute -inset-8 rounded-full bg-violet-600/30 blur-[90px]" />

            <div className="relative flex h-72 w-72 sm:h-[360px] sm:w-[360px] items-center justify-center rounded-full border border-violet-500/30 bg-gradient-to-br from-violet-600/20 via-fuchsia-500/20 to-pink-500/20 backdrop-blur-xl">
             <img
             src="/images/dayane4.png"
             alt="Dayane de Jesus"
             className="h-full w-full object-cover rounded-full"
             />
            </div>
          </div>
        </motion.div>

        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2">
            <Sparkles size={16} className="text-violet-400" />
            <span className="text-sm text-violet-300">Sobre Mim</span>
          </div>

          <h2 className="mb-8 text-4xl font-black leading-tight text-white md:text-6xl">
            Tecnologia com{" "}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-500 bg-clip-text text-transparent">
              criatividade e propósito.
            </span>
          </h2>

          <div className="space-y-5 text-base leading-7 text-gray-300 sm:space-y-6 sm:text-lg sm:leading-8">
            <p>
              Sou <strong className="text-white">Dayane de Jesus</strong>, e gosto de
              transformar ideias em experiências digitais usando tecnologia,
              criatividade, IA e automação.
            </p>

            <p>
              Minha trajetória começou no atendimento ao cliente e evoluiu para a
              tecnologia, desenvolvendo soluções que unem experiência do usuário,
              automação e design moderno.
            </p>

            <p>
              Hoje desenvolvo sites profissionais, landing pages, identidades
              visuais e automações inteligentes para empresas que querem crescer
              usando tecnologia.
            </p>
          </div>

          {/* Estatísticas */}
          <div className="mt-10 grid grid-cols-3 gap-3 sm:mt-12 sm:gap-5">
            {[
              { number: "10+", label: "Projetos" },
              { number: "100%", label: "Personalizado" },
              { number: "24h", label: "Suporte" },
            ].map((item) => (
              <motion.div
                key={item.label}
                whileHover={{ scale: 1.05 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-3 sm:p-5 text-center backdrop-blur-xl"
              >
                <h3 className="bg-gradient-to-r from-violet-400 to-pink-500 bg-clip-text text-3xl font-black text-transparent">
                  {item.number}
                </h3>

                <p className="mt-2 text-sm text-gray-400">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Cards */}
      <div className="relative z-10 mx-auto mt-20 max-w-7xl sm:mt-28">
        <div className="grid gap-8 md:grid-cols-3">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -8 }}
                className="group rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:border-violet-500/40 hover:shadow-[0_0_40px_rgba(168,85,247,0.18)]"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-pink-500">
                  <Icon size={26} className="text-white" />
                </div>

                <h3 className="mb-3 text-xl font-bold text-white">
                  {skill.title}
                </h3>

                <p className="leading-7 text-gray-400">
                  {skill.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}