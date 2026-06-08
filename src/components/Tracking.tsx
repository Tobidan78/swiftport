"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Tracking() {
  const [id, setId] = useState("");
  const [result, setResult] = useState<null | string>(null);

  const handleTrack = () => {
    if (id === "LOS-123456") {
      setResult("In Transit - Arriving Lagos Port");
    } else {
      setResult("Tracking ID not found");
    }
  };

  return (
    <section id="tracking" className="py-20 px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-10 text-blue-950"
        >
          Track Your Shipment 🚢
        </motion.h2>

        {/* CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="bg-white border rounded-2xl shadow-lg p-8"
        >

          {/* INPUT */}
          <input
            className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter Tracking ID (e.g. LOS-123456)"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />

          {/* BUTTON */}
          <button
            onClick={handleTrack}
            className="w-full mt-5 bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-xl font-semibold transition"
          >
            Track Shipment
          </button>

          {/* RESULT */}
          {result && (
            <div className="mt-8 text-center">
              <p className="text-lg font-semibold text-gray-800">
                {result}
              </p>

              {/* STATUS STEPS */}
              <div className="mt-6 grid grid-cols-3 gap-4 text-sm">

                <div className="p-3 rounded-xl bg-green-100 text-green-700 font-medium">
                  Booked
                </div>

                <div className="p-3 rounded-xl bg-yellow-100 text-yellow-700 font-medium">
                  In Transit
                </div>

                <div className="p-3 rounded-xl bg-gray-100 text-gray-500 font-medium">
                  Delivered
                </div>

              </div>
            </div>
          )}

        </motion.div>
      </div>
    </section>
  );
}