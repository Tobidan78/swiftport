"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-10"
        >
          Get in Touch 💬
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-lg border rounded-2xl p-8 space-y-4"
        >

          <input
            className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
            placeholder="Your Name"
          />

          <input
            className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
            placeholder="Email Address"
          />

          <textarea
            className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
            placeholder="Your Message"
            rows={5}
          />

          <button className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-xl transition">
            Send Message 🚀
          </button>

        </motion.div>
      </div>
    </section>
  );
}