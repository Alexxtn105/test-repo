"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
    layoutEffect: false // Улучшает производительность
  });

// слишком большие значения
// const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
// const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
// const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);

// меньшие значения (меньше дерганий):
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);


  return (
      <section
          ref={containerRef}
          className="relative h-screen overflow-hidden bg-gradient-to-b from-white to-gray-50"
          style={{ position: 'relative' }} // ← Добавьте эту строку
      >
        {/* Background layers for parallax */}
        <motion.div
            style={{ y: y1 }}
            //ничего не использовать
            //className="absolute inset-0 grid-background opacity-5"

            //для использования картинки:
            // картинки размером 32х32
            //className="absolute inset-0 bg-[url('/grid.svg')] bg-[length:32px_32px] opacity-5"
            //одна большая картинка
            //className="absolute inset-0 bg-[url('/grid.svg')] bg-cover opacity-5"
            //или
           // className="absolute inset-0 bg-[url('/grid.svg')] bg-cover bg-center bg-no-repeat opacity-5"
            //или с tailwind
            //className="absolute inset-0 bg-[url('/grid.svg')] bg-[size:100%_100%] bg-center bg-no-repeat opacity-5"
            // непрозрачность
            className="absolute inset-0 bg-[url('/grid.svg')] bg-[size:100%_100%] bg-center bg-no-repeat opacity-50"
        />

        <motion.div
            style={{ y: y2 }}
            className="absolute inset-0 flex items-center justify-center"
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-blue-500/10 blur-3xl rounded-full"></div>
            <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <h1 className="text-6xl md:text-8xl font-light tracking-tight text-center">
              <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Привет
              </span>
              </h1>
            </div>
          </div>
        </motion.div>

        <motion.div
            style={{ y: y3 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-8 h-12 rounded-full border-2 border-gray-300 flex justify-center p-1">
            <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-gray-400"
            />
          </div>
        </motion.div>
      </section>
  );
}