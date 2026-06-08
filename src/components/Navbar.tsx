"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      const pageHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progress = (scrollY / pageHeight) * 100;

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* 🔵 SCROLL PROGRESS BAR */}
      <div className="fixed top-0 left-0 w-full h-[3px] z-[60] bg-transparent">
        <div
          className="h-full bg-orange-500 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* NAVBAR */}
      <nav className="fixed top-[3px] left-0 w-full z-50 bg-white/70 backdrop-blur-md border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* LOGO */}
          <h1 className="text-2xl font-bold text-blue-900">
            SwiftPort
          </h1>

          {/* MENU */}
          <div className="hidden md:flex gap-8 text-gray-700 font-medium">
            <Link href="#services" className="hover:text-blue-700">
              Services
            </Link>

            <Link href="#tracking" className="hover:text-blue-700">
              Tracking
            </Link>

            <Link href="#contact" className="hover:text-blue-700">
              Contact
            </Link>
          </div>

          {/* CTA */}
          <button className="hidden md:block bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg">
            Get Quote
          </button>

          {/* MOBILE */}
          <button className="md:hidden text-2xl">
            ☰
          </button>

        </div>
      </nav>
    </>
  );
}