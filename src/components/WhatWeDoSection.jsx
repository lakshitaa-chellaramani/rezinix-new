"use client";

import { motion } from "framer-motion";
import {
  AlertTriangle,
  Brain,
  Zap,
  Eye,
  Shield,
  Settings,
  Users,
  Camera,
  Code,
  MessageSquare,
  Cpu,
  BookOpen,
} from "lucide-react";

const WhatWeDoSection = () => {
  const services = [
    {
      icon: Shield,
      title: "AI Governance and Responsible AI",
      description:
        "Design trustworthy AI with transparency, fairness, and compliance.",
      stats: "100% Compliant",
      color: "from-blue-600 to-purple-600",
    },
    {
      icon: Settings,
      title: "AI Platform Engineering",
      description:
        "Build, scale, and manage enterprise-grade AI platforms and MLOps pipelines.",
      stats: "99.9% Uptime",
      color: "from-red-600 to-orange-600",
    },
    {
      icon: Brain,
      title: "AI Strategy and Consulting",
      description:
        "Align your business goals with a tailored AI roadmap and operating model.",
      stats: "Strategic Focus",
      color: "from-green-600 to-teal-600",
    },
    {
      icon: BookOpen,
      title: "AI Training",
      description:
        "Tailored training programs for business leaders, technical teams, and non-technical staff",
      stats: "Expert Level",
      color: "from-purple-600 to-pink-600",
    },
    {
      icon: Camera,
      title: "Computer Vision Solutions",
      description:
        "Automate visual tasks like quality control, surveillance, and content moderation.",
      stats: "Real-time Processing",
      color: "from-orange-600 to-yellow-600",
    },
    {
      icon: Code,
      title: "Custom AI Solution Development",
      description:
        "Build scalable, production-grade AI models and applications.",
      stats: "Enterprise Grade",
      color: "from-indigo-600 to-blue-600",
    },
    {
      icon: Zap,
      title: "Generative AI and LLM Integration",
      description:
        "Leverage large language models for content creation, automation, and decision support",
      stats: "Advanced AI",
      color: "from-red-600 to-orange-600",
    },
    {
      icon: Cpu,
      title: "Machine Learning & Deep Learning Models",
      description:
        "Create predictive, generative, and adaptive learning systems.",
      stats: "ML/DL Expert",
      color: "from-cyan-600 to-blue-600",
    },
    {
      icon: MessageSquare,
      title: "Natural Language Processing (NLP)",
      description:
        "Understand, summarize, translate, and generate human language at scale.",
      stats: "Language AI",
      color: "from-green-600 to-teal-600",
    },
  ];

  // AI Service Card Component
  const AIServiceCard = ({ feature, index }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        viewport={{ once: true }}
        whileHover={{ y: -10, scale: 1.02 }}
        className="group relative"
      >
        <div className="bg-white/80 h-72 border border-red-500/20 p-8 relative overflow-hidden group-hover:border-red-500/40 transition-all duration-500 shadow-lg hover:shadow-xl">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-cyber-dots" />
          </div>

          {/* Content */}
          <div className="relative z-10">
            <div className="mb-6">
              <div
                className={`w-16 h-16 bg-gradient-to-br ${feature.color} flex items-center justify-center relative group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className="h-8 w-8 text-white" />

                {/* Corner brackets */}
                <div className="absolute -top-1 -left-1 w-3 h-3 border-l border-t border-white/50" />
                <div className="absolute -top-1 -right-1 w-3 h-3 border-r border-t border-white/50" />
                <div className="absolute -bottom-1 -left-1 w-3 h-3 border-l border-b border-white/50" />
                <div className="absolute -bottom-1 -right-1 w-3 h-3 border-r border-b border-white/50" />
              </div>
            </div>

            <h3 className="text-xl small font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors     tracking-wider">
              {feature.title}
            </h3>

            <p className="text-gray-600 newq leading-relaxed mb-4     text-md">
              {feature.description}
            </p>

            <div className="flex items-center justify-between">
              <span className="text-green-600     text-sm">
                {feature.stats}
              </span>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-1 h-4 ${
                      i < 4 ? "bg-red-500" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Scanning line effect */}
          <motion.div
            className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent"
            animate={{
              y: [0, 320, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              delay: index * 0.5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>
      </motion.div>
    );
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-red-500" />
            <AlertTriangle className="h-6 w-6 text-red-500" />
            <span className="text-red-600     text-sm tracking-widest">
              AI SERVICES PORTFOLIO
            </span>
            <AlertTriangle className="h-6 w-6 text-red-500" />
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-red-500" />
          </div> */}

          <h2 className="text-4xl lg:text-6xl font-bold small mb-6    ">
            <span className="text-orange-500">WHAT WE </span>
            <span className="text-orange-500">DO</span>
          </h2>

          <p className="text-xl text-gray-700 newq max-w-3xl mx-auto    ">
            Our comprehensive AI service portfolio transforms businesses through
            cutting-edge artificial intelligence solutions and strategic
            implementation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((feature, index) => (
            <AIServiceCard key={index} feature={feature} index={index} />
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gray-50/80 border border-red-500/20 p-8 max-w-4xl mx-auto backdrop-blur-sm shadow-lg">
            <h3 className="text-4xl small font-bold text-gray-900 mb-4    ">
              Ready to Transform with AI?
            </h3>
            <p className="text-gray-700 mb-6  max-w-xl mx-auto newq  text-md">
              Discover how our AI services can revolutionize your business
              operations and drive unprecedented growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4     font-bold text-sm tracking-wider relative overflow-hidden border border-red-500/50 hover:shadow-lg">
                <span className="relative z-10">EXPLORE SOLUTIONS</span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 transform skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              </button>

              <button className="group text-gray-900 border border-gray-400 px-8 py-4     font-bold text-sm tracking-wider hover:border-red-400 hover:text-red-400 transition-all duration-300 relative bg-white hover:shadow-lg">
                <span>SCHEDULE CONSULTATION</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
