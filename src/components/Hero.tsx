"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">

      {/* BACKGROUND IMAGE */}
      <Image
        src="/cargo-ship.jpg"
        alt="cargo ship"
        fill
        priority
        className="object-cover"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6 w-full">

        {/* TEXT */}
        <div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-white drop-shadow-lg">
            Fast & Reliable <br />
            <span className="text-orange-400">Port Logistics</span>
          </h1>

          <p className="mt-6 text-white/80 text-lg">
            We move cargo across ports with speed, safety, and precision.
            Real-time tracking, global shipping, and warehousing solutions.
          </p>

          <button className="mt-8 bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg">
            Track Shipment
          </button>
        </div>

      </div>
    </section>
  );
}