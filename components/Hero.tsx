  "use client";

  import { motion } from "framer-motion";
  import { ArrowRight } from "lucide-react";
  import FloatingCard from "./FloatingCard";

  export default function Hero() {
    return (
      <section
        id="inicio"
        className="relative min-h-screen flex items-center overflow-hidden bg-[#080810] pb-24"
      >
        {/* Fundo Roxo */}
        <div className="absolute w-[550px] h-[550px] rounded-full bg-violet-700/30 blur-[180px] -top-40 -left-20 animate-pulse"></div> 
        <div className="absolute w-[350px] h-[350px] rounded-full bg-pink-500/20 blur-[180px] bottom-0 right-0"></div> 
        <div className="absolute w-[300px] h-[300px] rounded-full bg-cyan-500/10 blur-[150px] top-1/3 right-1/4"></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] items-center gap-16 lg:gap-24 px-5 sm:px-8 pt-32 lg:pt-40">

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
              <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/30 px-3 sm:px-4 py-2 rounded-full mb-8">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>

              <p className="text-sm text-violet-300">
                  Disponível para novos projetos
              </p>
              </div>

            <p className="text-violet-400 text-xs sm:text-sm font-medium mb-5 tracking-widest uppercase leading-relaxed">
              Inteligência Artificial • Automação • Desenvolvimento Web
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-tight mb-6">
              Olá, eu sou{" "}
              <span className="bg-gradient-to-r from-violet-300 via-fuchsia-400 to-pink-500 bg-[length:200%_200%] text-transparent bg-clip-text animate-gradient">
                  Dayane.
              </span>
            </h1>

            <p className="text-gray-300 text-base sm:text-lg leading-7 sm:leading-8 mb-10 max-w-2xl">
              Crio sites profissionais, landing pages, identidades visuais e soluções inteligentes para empresas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">

            <a
            href="#projetos"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-pink-500 px-7 py-4 rounded-xl font-semibold hover:scale-105 transition-all"
            >
              Ver Projetos
              <ArrowRight size={20} />
            </a>

              <a
              href="#contato"
              className="
              px-7 py-4 rounded-xl
              border border-white/15
              bg-white/5 backdrop-blur-xl
              hover:bg-white/10
              hover:border-violet-500/40
              transition-all duration-300
              text-violet-200"
              >
                Entrar em contato
              </a>

            </div> 
            
            <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-14">
              <div> 
                  <h2 className="text-2xl sm:text-3xl font-bold text-violet-400">10+</h2> 
                  <p className="text-gray-400 text-sm mt-1">Projetos desenvolvidos</p>
                  </div> 
                  
                  <div> 
                      <h2 className="text-3xl font-bold text-pink-400">100%</h2> 
                      <p className="text-gray-400 text-sm mt-1">Design personalizado</p>
                      </div> 
              <div> 
                  <h2 className="text-3xl font-bold text-cyan-400">N1/N2</h2> 
                  <p className="text-gray-400 text-sm mt-1">Suporte ao cliente</p> 
              </div> 
              </div>
          </motion.div> 
          
          {/* Card direito */} 
          <motion.div 
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="hidden md:flex flex-col items-center gap-8"
          >
          {/* Foto temporária */}
          <div className="relative">

          {/* Glow */}
          <div className="absolute -inset-8 rounded-full bg-violet-600/30 blur-[90px]"></div>

          {/* Borda com gradiente */}
          <div className="relative w-72 h-72 rounded-full p-[3px] bg-gradient-to-br from-violet-500 via-fuchsia-500 to-pink-500">
          <div className="w-full h-full rounded-full bg-[#09090F] flex items-center justify-center overflow-hidden">
          <img
          src="/images/dayane.png"
          alt="Dayane de Jesus"
          className="h-full w-full object-cover"
          />
          </div>
          </div>
          </div>

          {/* Cards flutuantes */}
            <FloatingCard />
            </motion.div>

        </div>
      </section>
    );
  }