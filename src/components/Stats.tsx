"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function Counter({ value }: { value: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 20,
    stiffness: 100,
  });

  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      setDisplay(Math.floor(latest));
    });
  }, [springValue]);

  return <span ref={ref}>{display}</span>;
}

export default function Stats() {
  const stats = [
    { label: "Deliveries", value: 5000 },
    { label: "Ports Covered", value: 50 },
    { label: "Countries", value: 15 },
    { label: "Success Rate", value: 99 },
  ];

  return (
    <section className="py-20 bg-blue-950 text-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-center">

        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <h3 className="text-4xl font-bold">
              <Counter value={stat.value} />
              {stat.label === "Success Rate" ? "%" : "+"}
            </h3>

            <p className="text-white/70 mt-2">
              {stat.label}
            </p>
          </motion.div>
        ))}

      </div>
    </section>
  );
}