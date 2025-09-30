"use client";

import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center bg-white">
      {/* Scanning Lines */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30"
            style={{ top: `${20 + i * 15}%` }}
            animate={{
              x: ["-100%", "100%"],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4,
              delay: i * 0.8,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Status Indicator */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-2 bg-black/80 border border-green-500/30 px-6 py-3 rounded-sm    text-sm backdrop-blur-sm">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <span className="text-green-400 tracking-wider">AI DEFENSE: ONLINE</span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl lg:text-8xl small font-bold">
            <span className="text-gray-900  drop-shadow-lg">
              Start your AI PoC {" "}
            </span>
            <br/>with
            <span className="text-red-500 drop-shadow-lg"> Rezinix</span>
          </h1>

          {/* Description */}
          <div className="space-y-6">
            <p className="text-xl newq text-gray-700  max-w-3xl mx-auto">
              We deliver cutting-edge AI solutions that transform businesses, 
              enhance customer experiences, and unlock new growth opportunities.
            </p>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-6 justify-center mt-12"
        >
          <button className="group bg-gradient-to-r from-red-600 to-orange-600 text-white px-10 py-5 small font-bold text-base tracking-wider flex items-center justify-center space-x-3 border border-red-500/50 relative overflow-hidden backdrop-blur-sm hover:shadow-xl transition-all duration-300">
            <span className="relative z-10">Discover Our Solutions</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform relative z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 transform skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
          </button>

          <button className="group flex items-center justify-center space-x-3 text-gray-900 border-2 border-gray-400 px-10 py-5 small font-bold text-base tracking-wider hover:border-red-400 hover:text-red-400 transition-all duration-300 relative overflow-hidden backdrop-blur-sm bg-white hover:shadow-xl">
            <Play className="h-5 w-5" />
            <span>VIEW DEMO</span>
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300" />
          </button>
        </motion.div>

        {/* Trust Indicators */}
        

        {/* Scroll Indicator */}
        
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-blue-500/20 rotate-45 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 border border-red-500/20 rotate-12 animate-pulse"></div>
      <div className="absolute top-1/2 right-20 w-3 h-3 bg-orange-500 rounded-full animate-bounce"></div>
      <div className="absolute top-1/3 left-20 w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
    </section>
  );
};

export default HeroSection;
