"use client";

import { motion } from "framer-motion";
import { Bot, Globe, Palette } from "lucide-react";

const cards = [
  {
    icon: Globe,
    title: "Sites Profissionais",
    color: "text-violet-400",
    delay: 0,
  },
  {
    icon: Bot,
    title: "IA & Automação",
    color: "text-pink-400",
    delay: 0.2,
  },
  {
    icon: Palette,
    title: "Logos Exclusivas",
    color: "text-cyan-400",
    delay: 0.4,
  },
];

export default function FloatingCard() {
  return (
    <div className="relative flex flex-col gap-8 w-[340px]">
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
         y:-10,
        rotateX:4,
        rotateY:-4,
        scale:1.04,
        }}
        className="
        relative
        bg-white/5
        backdrop-blur-xl
        border
        border-white/10
        rounded-3xl
        p-6
        shadow-2xl
        overflow-hidden
        hover:border-violet-500/40
        hover:shadow-violet-500/20
        transition-all
        duration-300
        "
        >
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-pink-500/5 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
          
        <Icon className={`${card.color} mb-3 relative z-10`} size={28} />
        <h3 className="font-semibold text-lg relative z-10">
          {card.title}
          </h3>
          <p className="text-sm text-gray-400 mt-2 relative z-10">
            Projetos personalizados, modernos e pensados para gerar resultado.
            </p>
            </motion.div>
        );
      })}
    </div>
  );
}