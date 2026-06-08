"use client";

import { motion } from "framer-motion";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section id="services" className="py-20 px-6 bg-gray-50">

      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 text-blue-900"
        >
          Our Services
        </motion.h2>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {services.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border rounded-2xl p-6 text-center hover:shadow-xl transition"
            >
              <div className="text-5xl mb-4">{s.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-blue-900">
                {s.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {s.description}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}