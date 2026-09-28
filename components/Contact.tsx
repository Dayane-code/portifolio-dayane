"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  MessageCircle,
  Sparkles,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contato"
      className="relative isolate overflow-hidden bg-[#04040A]/35 px-5 py-24 sm:px-6 sm:py-32 lg:py-40"
    >
      {/* Aurora */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-200px] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[160px] sm:h-[650px] sm:w-[650px] sm:blur-[190px]" />

        <div className="absolute bottom-[-250px] right-[-150px] h-[450px] w-[450px] rounded-full bg-pink-500/15 blur-[150px] sm:h-[600px] sm:w-[600px] sm:blur-[180px]" />

        <div className="absolute bottom-0 left-[-200px] h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[140px] sm:h-[500px] sm:w-[500px] sm:blur-[170px]" />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/10 to-[#04040A]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center sm:mb-16"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-2 sm:px-4">
            <Sparkles size={16} className="text-violet-400" />

            <span className="text-xs text-violet-300 sm:text-sm">
              Vamos conversar
            </span>
          </div>

          <h2 className="text-4xl font-black leading-tight text-white md:text-6xl">
            Vamos transformar sua ideia em{" "}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-500 bg-clip-text text-transparent">
              algo real.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:mt-8 sm:text-lg sm:leading-8">
            Tem um projeto, uma ideia ou precisa de uma solução digital?
            Entre em contato e vamos conversar sobre como posso ajudar.
          </p>
        </motion.div>

        {/* Card principal */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5 shadow-[0_0_80px_rgba(168,85,247,0.08)] backdrop-blur-2xl sm:rounded-[32px] sm:p-8 md:p-12"
        >
          <div className="grid gap-10 md:grid-cols-2">
            {/* Texto */}
            <div>
              <h3 className="text-2xl font-bold text-white sm:text-3xl">
                Entre em contato
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-400 sm:text-base">
                Estou aberta a novas oportunidades, projetos e parcerias
                envolvendo tecnologia, desenvolvimento, IA, automação e
                experiência do cliente.
              </p>

              {/* WhatsApp */}
              <a
                href="https://wa.me/5521966912443"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-3.5 transition-all duration-300 hover:border-violet-500/40 hover:bg-violet-500/10 sm:mt-8 sm:gap-4 sm:p-4"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 sm:h-12 sm:w-12">
                  <MessageCircle size={21} className="text-white sm:size-[22px]" />
                </div>

                <div className="min-w-0">
                  <p className="text-xs text-gray-500 sm:text-sm">
                    WhatsApp
                  </p>
                  <p className="font-medium text-white">
                    Vamos conversar
                  </p>
                </div>

                <ArrowUpRight
                  size={19}
                  className="ml-auto shrink-0 text-violet-300"
                />
              </a>

              {/* E-mail */}
              <a
                href="mailto:dayanecardosof@gmail.com"
                className="mt-4 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-3.5 transition-all duration-300 hover:border-violet-500/40 hover:bg-violet-500/10 sm:gap-4 sm:p-4"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-sky-500 sm:h-12 sm:w-12">
                  <Mail size={21} className="text-white sm:size-[22px]" />
                </div>

                <div className="min-w-0">
                  <p className="text-xs text-gray-500 sm:text-sm">
                    E-mail
                  </p>
                  <p className="font-medium text-white">
                    Entre em contato
                  </p>
                </div>

                <ArrowUpRight
                  size={19}
                  className="ml-auto shrink-0 text-cyan-300"
                />
              </a>
            </div>

            {/* Redes */}
            <div className="flex flex-col justify-center">
              <p className="mb-5 text-xs uppercase tracking-[0.2em] text-gray-500 sm:mb-6 sm:text-sm">
                Encontre-me também
              </p>

              <div className="grid gap-4">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/dayane-fernandesj/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:bg-violet-500/10 sm:gap-4 sm:p-5"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5 shrink-0 fill-current text-violet-300 transition-transform duration-300 group-hover:scale-110 sm:h-6 sm:w-6"
                  >
                    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V8.98h3.41v1.57h.05c.47-.9 1.63-1.85 3.35-1.85 3.59 0 4.25 2.36 4.25 5.44v6.31zM5.34 7.41a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM3.56 20.45h3.56V8.98H3.56v11.47zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0z" />
                  </svg>

                  <div>
                    <p className="font-semibold text-white">LinkedIn</p>
                    <p className="text-xs text-gray-500 sm:text-sm">
                      Perfil profissional
                    </p>
                  </div>

                  <ArrowUpRight
                    size={18}
                    className="ml-auto shrink-0 text-gray-500"
                  />
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:bg-cyan-500/10 sm:gap-4 sm:p-5"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5 shrink-0 fill-current text-cyan-300 transition-transform duration-300 group-hover:scale-110 sm:h-6 sm:w-6"
                  >
                    <path d="M12 .3a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.09 1.84 1.23 1.84 1.23 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.93 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.76.84 1.23 1.91 1.23 3.22 0 4.6-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.58A12 12 0 0 0 12 .3z" />
                  </svg>

                  <div>
                    <p className="font-semibold text-white">GitHub</p>
                    <p className="text-xs text-gray-500 sm:text-sm">
                      Projetos e códigos
                    </p>
                  </div>

                  <ArrowUpRight
                    size={18}
                    className="ml-auto shrink-0 text-gray-500"
                  />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}