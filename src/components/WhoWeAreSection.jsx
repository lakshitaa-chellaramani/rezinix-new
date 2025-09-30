"use client";

import { motion } from "framer-motion";
import { Users, Brain, Shield, Zap } from "lucide-react";
import Link from "next/link";
const WhoWeAreSection = () => {
  return (
    <section className="relative py-32 bg-white px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center">
      {/* Scanning Lines */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-20"
            style={{ top: `${30 + i * 20}%` }}
            animate={{
              x: ["-100%", "100%"],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: 6,
              delay: i * 1.2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          {/* Status Indicator */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-2 bg-black/80 border border-blue-500/30 px-4 py-2 rounded-sm     text-sm backdrop-blur-sm">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <span className="text-blue-400">COMPANY PROFILE: ACTIVE</span>
            </div>
          </div>

          {/* Main Title */}
          <h2 className="text-5xl lg:text-7xl   small  font-bold mb-8">
            <span className="text-orange-500 drop-shadow-lg">Who We</span>{" "}
            <span className="text-orange-500 drop-shadow-lg">Are</span>
          </h2>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-left space-y-6"
          >
            <p className="text-xl text-black leading-relaxed    ">
              At <span className="text-orange-500 font-semibold">Rezinix</span>, we see artificial intelligence as the driving force behind smarter, faster, and more resilient enterprises.
            </p>
            
            <p className="text-lg text-black leading-relaxed    ">
              Our team of AI architects, data scientists, engineers, and industry experts blends cutting-edge technology with human insight to tackle real-world challenges.
            </p>

            <p className="text-lg text-black leading-relaxed    ">
              We're committed to making AI accessible, transformative, and ethically grounded earning the trust of businesses across industries as a reliable partner in innovation.
            </p>

            <p className="text-lg text-black leading-relaxed    ">
              We build intelligent systems that are not only powerful, but also responsible designed to adapt, scale, and deliver lasting impact.
            </p>
          </motion.div>

          {/* Right Content - Feature Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              {
                icon: Brain,
                title: "AI Architects",
                description: "Strategic AI implementation experts",
                color: "from-blue-600 to-purple-600"
              },
              {
                icon: Users,
                title: "Data Scientists",
                description: "Advanced analytics specialists",
                color: "from-green-600 to-teal-600"
              },
              {
                icon: Zap,
                title: "Engineers",
                description: "Cutting-edge development team",
                color: "from-orange-600 to-red-600"
              },
              {
                icon: Shield,
                title: "Industry Experts",
                description: "Cross-sector domain knowledge",
                color: "from-purple-600 to-pink-600"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white border  border-blue-500/20 p-6 rounded-3xl backdrop-blur-sm hover:border-blue-500/40 transition-all duration-300"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center mb-4 mx-auto`}>
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-black font-semibold     text-xl mb-2">{item.title}</h3>
                <p className="text-gray-800 text-md    ">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gray-50/80 border border-red-500/20 p-8 max-w-4xl mx-auto backdrop-blur-sm shadow-lg">
            <h3 className="text-4xl font-bold small text-gray-900 mb-4    ">
              Ready to Transform with AI?
            </h3>
            <p className="text-gray-700 mb-6   max-w-xl mx-auto  text-md">
              Discover how our AI services can revolutionize your business
              operations and drive unprecedented growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4     font-bold text-sm tracking-wider relative overflow-hidden border border-red-500/50 hover:shadow-lg">
                <span className="relative z-10">EXPLORE SOLUTIONS</span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 transform skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              </button>

              <Link href="/team" className="group text-gray-900 border border-gray-400 px-8 py-4     font-bold text-sm tracking-wider hover:border-red-400 hover:text-red-400 transition-all duration-300 relative bg-white hover:shadow-lg">
                <span>
                    MEET THE TEAM
                </span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-blue-500/20 rotate-45"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 border border-orange-500/20 rotate-12"></div>
      <div className="absolute top-1/2 right-20 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
      <div className="absolute top-1/3 left-20 w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
    </section>
  );
};

export default WhoWeAreSection;
