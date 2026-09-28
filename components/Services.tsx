"use client";

import { motion } from "framer-motion";
import {
  Globe,
  LayoutTemplate,
  Bot,
  Palette,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Sites Profissionais",
    description:
      "Sites modernos para empresas, clínicas, restaurantes e profissionais.",
    color: "from-violet-500 via-fuchsia-500 to-pink-500",
  },
  {
    icon: LayoutTemplate,
    title: "Landing Pages",
    description:
      "Páginas de alta conversão focadas em vendas, eventos e lançamentos.",
    color: "from-pink-500 via-rose-500 to-orange-400",
  },
  {
    icon: Bot,
    title: "IA & Automação",
    description:
      "Chatbots, atendimento inteligente, integrações e automações para WhatsApp.",
    color: "from-cyan-500 via-sky-500 to-indigo-500",
  },
  {
  icon: Palette,
  title: "Logos & Identidade Visual",
  description:
    "Identidades visuais criativas, modernas e pensadas para transmitir a essência de cada marca.",
  color: "from-purple-500 via-violet-500 to-indigo-500",
},
];

export default function Services() {
  return (
    <section
      id="servicos"
      className="relative overflow-hidden bg-[#07070F]/35 px-5 py-24 sm:px-6 sm:py-32 lg:py-40"
    >
      {/* Fundo Aurora */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[180px]" />

        <div className="absolute bottom-0 left-0 h-[450px] w-[450px] rounded-full bg-fuchsia-500/15 blur-[150px]" />

        <div className="absolute top-40 right-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[170px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.12),transparent_65%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center sm:mb-20 lg:mb-24"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2">
            <Sparkles size={16} className="text-violet-400" />
            <span className="text-sm text-violet-300">Serviços</span>
          </div>

          <h2 className="mx-auto max-w-4xl text-4xl font-black leading-tight text-white md:text-6xl">
            Soluções que unem{" "}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-500 bg-clip-text text-transparent">
              tecnologia
            </span>{" "}
            e design.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:mt-8 sm:text-lg sm:leading-8">
            Desenvolvo experiências digitais únicas, modernas e pensadas para
            empresas que querem crescer.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] p-6 sm:p-8 backdrop-blur-2xl transition-all duration-500 hover:border-violet-400/40 hover:bg-white/[0.06]"
              >
                {/* Glow do hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-20`}
                />

                <div className="relative z-10">
                  <div
                    className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br sm:mb-8 sm:h-16 sm:w-16 ${service.color}`}
                  >
                    <Icon className="text-white" size={24} />
                  </div>

                  <h3 className="mb-4 text-xl font-bold text-white sm:text-2xl">
                    {service.title}
                  </h3>

                  <p className="mb-6 leading-7 text-gray-400 sm:mb-8">
                    {service.description}
                  </p>

                  <button className="flex items-center gap-2 text-violet-300 transition group-hover:text-pink-400">
                    Saiba mais
                    <ArrowUpRight size={18} />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}