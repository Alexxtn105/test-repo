"use client";

import { motion } from "framer-motion";
import { Code, Palette, Zap } from "lucide-react";

const features = [
  {
    icon: Code,
    title: "Чистый код",
    description: "Написание поддерживаемого и эффективного кода с использованием современных подходов и технологий."
  },
  {
    icon: Palette,
    title: "Совершенный дизайн",
    description: "Creating stunning interfaces with attention to detail and aesthetics."
  },
  {
    icon: Zap,
    title: "Высокая производительность",
    description: "Optimizing for speed and smooth user experiences."
  }
];

export function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-light tracking-tight text-gray-900 mb-4">
            Что я делаю
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Создаю исключительные цифровые произведения с вниманием к деталям.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-100 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}