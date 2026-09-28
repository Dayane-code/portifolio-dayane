"use client";

import { motion } from "framer-motion";
import { Bot, Globe, Palette } from "lucide-react";

const cards = [
  {
    icon: Globe,
    title: "Sites Profissionais",
    description:
      "Sites modernos, responsivos e personalizados para apresentar sua marca e conquistar novos clientes.",
    color: "text-violet-400",
    delay: 0,
  },
  {
    icon: Bot,
    title: "IA & Automação",
    description:
      "Soluções inteligentes para automatizar tarefas, otimizar processos e melhorar o atendimento.",
    color: "text-pink-400",
    delay: 0.2,
  },
  {
    icon: Palette,
    title: "Logos Exclusivas",
    description:
      "Identidades visuais criadas para transmitir a personalidade e os valores de cada marca.",
    color: "text-cyan-400",
    delay: 0.4,
  },
];

export default function FloatingCard() {
  return (
    <div className="relative flex w-[340px] flex-col gap-8">
      {cards.map((card, index) => {
        const Icon = card.icon;

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: card.delay,
            }}
            whileHover={{
              y: -10,
              rotateX: 4,
              rotateY: -4,
              scale: 1.04,
            }}
            className="
              relative
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              bg-white/5
              p-6
              shadow-2xl
              backdrop-blur-xl
              transition-all
              duration-300
              hover:border-violet-500/40
              hover:shadow-violet-500/20
            "
          >
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-pink-500/5 opacity-0 transition-opacity duration-300 hover:opacity-100" />

            <Icon
              className={`${card.color} relative z-10 mb-3`}
              size={28}
            />

            <h3 className="relative z-10 text-lg font-semibold">
              {card.title}
            </h3>

            <p className="relative z-10 mt-2 text-sm leading-6 text-gray-400">
              {card.description}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
}