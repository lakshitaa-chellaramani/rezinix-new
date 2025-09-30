'use client'
import React from 'react';
import { Brain, Target, MoveRight } from 'lucide-react';

const SolutionsPage = () => {
  const solutions = [
    {
      id: 'elevateai',
      title: 'ElevateAI',
      subtitle: 'Enterprise Intelligence Network',
      description: 'Transform scattered data into instant, actionable insights with specialized AI agents. Secure and compliant by design.',
      icon: Brain,
      color: 'orange',
      features: ['Agentic Intelligence', 'Agent Marketplace', 'Hybrid RAG Search', 'Knowledge Graph'],
      link: '/solutions/elevateai'
    },
    {
      id: 'tenderai',
      title: 'TenderAI',
      subtitle: 'Qualify & Win Perfect Tenders',
      description: 'AI-powered platform that automates tender discovery, provides deep analysis, and delivers clear go/no-go decisions in minutes.',
      icon: Target,
      color: 'slate',
      features: ['Tender Discovery', 'Multi-Mode Queries', 'Risk Analysis', 'Clear Verdicts'],
      link: '/solutions/tenderai'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-black">
                <path d="M3 12L21 12M12 3L21 12L12 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </a>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="/" className="text-gray-300 hover:text-white transition-colors duration-200">Home</a>
            <a href="/solutions" className="text-white hover:text-orange-400 transition-colors duration-200">Our Solutions</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden pt-32 pb-20">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-full bg-gradient-to-l from-orange-500/20 via-orange-600/10 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-orange-500/10 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500/10 to-orange-600/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-orange-500/20">
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
              <span className="text-orange-400 font-medium text-sm uppercase tracking-wider">AI-Powered Solutions</span>
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              Our <span className="text-orange-500">Solutions</span>
            </h1>

            <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Discover our suite of AI-powered solutions designed to transform your business operations
              and accelerate growth.
            </p>
          </div>
        </div>
      </div>

      {/* Solutions Grid */}
      <div className="relative overflow-hidden py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {solutions.map((solution, idx) => {
              const IconComponent = solution.icon;
              return (
                <a
                  key={solution.id}
                  href={solution.link}
                  className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm rounded-3xl p-10 border border-gray-700/50 hover:border-orange-500/40 transition-all duration-300 hover:transform hover:scale-105"
                >
                  {/* Background Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${
                    solution.color === 'orange'
                      ? 'from-orange-500/5 to-transparent'
                      : 'from-slate-500/5 to-transparent'
                  } opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl`}></div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon & Title */}
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-20 h-20 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 ${
                        solution.color === 'orange'
                          ? 'bg-gradient-to-br from-orange-500 to-orange-600'
                          : 'bg-gradient-to-br from-slate-600 to-slate-700'
                      }`}>
                        <IconComponent className="w-10 h-10 text-white" />
                      </div>
                      <MoveRight className="w-6 h-6 text-gray-500 group-hover:text-orange-400 group-hover:translate-x-2 transition-all duration-300" />
                    </div>

                    {/* Title & Subtitle */}
                    <h2 className="text-3xl font-bold mb-2 group-hover:text-orange-400 transition-colors duration-300">
                      {solution.title}
                    </h2>
                    <p className="text-orange-400 font-medium text-sm uppercase tracking-wider mb-4">
                      {solution.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {solution.description}
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-2 gap-3">
                      {solution.features.map((feature, featureIdx) => (
                        <div
                          key={featureIdx}
                          className="flex items-center gap-2 text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300"
                        >
                          <div className={`w-1.5 h-1.5 rounded-full ${
                            solution.color === 'orange' ? 'bg-orange-500' : 'bg-slate-500'
                          }`}></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Learn More Link */}
                    <div className="mt-6 pt-6 border-t border-gray-700/50">
                      <span className="text-orange-400 font-semibold group-hover:underline">
                        Learn More →
                      </span>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Coming Soon Card */}
          <div className="mt-12 bg-gradient-to-br from-gray-900/40 to-gray-800/30 backdrop-blur-sm rounded-3xl p-10 border border-gray-700/30 border-dashed">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-gray-800/60 rounded-full px-4 py-2 mb-4">
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse"></div>
                <span className="text-gray-400 text-sm font-medium">Coming Soon</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-400 mb-2">More AI Solutions</h3>
              <p className="text-gray-500">We're working on additional AI-powered solutions to help transform your business.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative overflow-hidden py-20">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your <span className="text-orange-500">Business?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get in touch with our team to learn how our AI solutions can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-200">
              Contact Sales
            </button>
            <button className="text-white hover:text-orange-400 px-8 py-4 font-medium text-lg transition-colors duration-200 decoration-2 underline-offset-4 underline">
              View Documentation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionsPage;
