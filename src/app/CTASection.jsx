// app/components/DesignSmarter.tsx (Next.js 13+ with App Router)
"use client";

import React from "react";

const DesignSmarter = () => {
  return (
    <section className="relative flex items-center justify-center py-20 min-h-[300px] bg-gradient-to-br from-black via-[#0a0a0a] to-[#1a0000] px-6">
      {/* Glow / Background effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,80,30,0.4),transparent_70%)]" />

      {/* Container */}
      <div className="relative z-10 max-w-4xl py-16 w-full rounded-[35px] border border-gray-700 bg-black/40 backdrop-blur-md p-10 text-center">
        {/* Title */}
        <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
          Ready to Design Smarter?
        </h2>

        {/* Description */}
        <p className="text-gray-200 mb-6 max-w-xl mx-auto text-sm md:text-base">
          Whether you&apos;re a freelancer, a team, or a growing agency—our tools
          adapt to your workflow. Design faster. Deliver better.
        </p>

        {/* Button */}
        <a
          href="#"
          className="inline-block bg-orange-600 hover:bg-orange-500 text-white font-medium px-6 py-3 rounded-md shadow-lg transition-colors"
        >
          Get Started →
        </a>
      </div>
    </section>
  );
};

export default DesignSmarter;
