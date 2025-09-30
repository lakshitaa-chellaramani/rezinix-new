'use client'
import React from 'react';
import { Sparkles, Zap, Shield, TrendingUp, Search, Brain, Lightbulb, Network, Lock, MessageSquare, BarChart3, FileCheck, Mail, ClipboardCheck, Clock, Target } from 'lucide-react';
import ElevateAIDiagram from '../../diagrams/ElevateAIDiagram';

const ElevateAIPage = () => {
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
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500/10 to-orange-600/10 backdrop-blur-sm rounded-full px-6 py-3 border border-orange-500/20">
              <Sparkles className="w-4 h-4 text-orange-400" />
              <span className="text-orange-400 font-medium text-sm uppercase tracking-wider">Enterprise Intelligence</span>
              <Sparkles className="w-4 h-4 text-orange-400" />
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-8 leading-tight">
            ElevateAI: The Future of <span className="text-orange-500">Enterprise Intelligence</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl lg:text-2xl text-gray-300 text-center max-w-5xl mx-auto leading-relaxed mb-12">
            Stop searching. Start synthesizing. ElevateAI goes beyond basic RAG by deploying specialized AI agents
            that transform scattered data into instant, actionable insights. Secure and compliant by design.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-200 flex items-center gap-2">
              <Zap className="w-5 h-5" />
              Book a Demo
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-200 flex items-center gap-2 border border-gray-700">
              <TrendingUp className="w-5 h-5" />
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* The ElevateAI Difference */}
      <div className="relative overflow-hidden py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                The ElevateAI <span className="text-orange-500">Difference</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                Your enterprise data is a goldmine, but it's buried in silos across Slack, Jira, Notion, and GitHub.
                Most search tools only scratch the surface, providing fragmented answers.
              </p>
              <p className="text-xl text-gray-300 leading-relaxed">
                ElevateAI doesn't just look up information; it <span className="text-orange-400 font-semibold">reasons and synthesizes insights</span>.
                Our platform deploys specialized AI agents to handle complex, multi-step tasks, giving you the complete picture
                and automating workflows so you can focus on what matters.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/5 backdrop-blur-sm rounded-2xl p-6 border border-orange-500/20">
                <Search className="w-8 h-8 text-orange-400 mb-3" />
                <h3 className="text-lg font-bold mb-2">Deep Search</h3>
                <p className="text-sm text-gray-400">Goes beyond surface-level results</p>
              </div>
              <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/5 backdrop-blur-sm rounded-2xl p-6 border border-orange-500/20">
                <Brain className="w-8 h-8 text-orange-400 mb-3" />
                <h3 className="text-lg font-bold mb-2">Smart Synthesis</h3>
                <p className="text-sm text-gray-400">Connects data across sources</p>
              </div>
              <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/5 backdrop-blur-sm rounded-2xl p-6 border border-orange-500/20">
                <Zap className="w-8 h-8 text-orange-400 mb-3" />
                <h3 className="text-lg font-bold mb-2">Multi-Step Tasks</h3>
                <p className="text-sm text-gray-400">Handles complex workflows</p>
              </div>
              <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/5 backdrop-blur-sm rounded-2xl p-6 border border-orange-500/20">
                <Lock className="w-8 h-8 text-orange-400 mb-3" />
                <h3 className="text-lg font-bold mb-2">Secure by Design</h3>
                <p className="text-sm text-gray-400">Enterprise-grade security</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Architecture Diagram */}
      <div className="relative overflow-hidden py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How <span className="text-orange-500">ElevateAI</span> Works
            </h2>
            <p className="text-xl text-gray-300">A collaborative ecosystem of specialized AI agents</p>
          </div>
          <ElevateAIDiagram />
        </div>
      </div>

      {/* Key Features */}
      <div className="relative overflow-hidden py-20">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Key <span className="text-orange-500">Features</span>
          </h2>

          <div className="space-y-12">
            {/* Agentic Intelligence */}
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Agentic Intelligence</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Our system deploys specialized agents that dynamically plan, route, and synthesize answers from multiple sources.
                    Ask complex, multi-step questions, and let the agents do the work.
                  </p>
                </div>
              </div>
            </div>

            {/* Agent Marketplace */}
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-600 to-slate-700 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Network className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4">Agent Marketplace</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Access a library of pre-built agents to automate key tasks:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-black/40 rounded-xl p-4 border border-gray-700/50">
                      <div className="flex items-center gap-2 mb-2">
                        <BarChart3 className="w-5 h-5 text-orange-400" />
                        <h4 className="font-semibold text-orange-400">The Analyst Agent</h4>
                      </div>
                      <p className="text-sm text-gray-400">Analyzes financial reports, sales data, and market trends to provide concise summaries and key insights.</p>
                    </div>
                    <div className="bg-black/40 rounded-xl p-4 border border-gray-700/50">
                      <div className="flex items-center gap-2 mb-2">
                        <FileCheck className="w-5 h-5 text-orange-400" />
                        <h4 className="font-semibold text-orange-400">The Compliance Agent</h4>
                      </div>
                      <p className="text-sm text-gray-400">Audits documents for specific legal clauses or compliance requirements, flagging potential risks.</p>
                    </div>
                    <div className="bg-black/40 rounded-xl p-4 border border-gray-700/50">
                      <div className="flex items-center gap-2 mb-2">
                        <Mail className="w-5 h-5 text-orange-400" />
                        <h4 className="font-semibold text-orange-400">The Communication Agent</h4>
                      </div>
                      <p className="text-sm text-gray-400">Drafts context-aware email replies and summaries based on your internal knowledge base.</p>
                    </div>
                    <div className="bg-black/40 rounded-xl p-4 border border-gray-700/50">
                      <div className="flex items-center gap-2 mb-2">
                        <ClipboardCheck className="w-5 h-5 text-orange-400" />
                        <h4 className="font-semibold text-orange-400">The Project Manager Agent</h4>
                      </div>
                      <p className="text-sm text-gray-400">Monitors project progress across tools like Jira and Asana, providing status updates and flagging dependencies.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hybrid RAG Search */}
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Search className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Hybrid RAG Search</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Our system combines semantic vector search for deep contextual understanding with keyword matching for pinpoint accuracy.
                  </p>
                </div>
              </div>
            </div>

            {/* Dynamic Knowledge Graph */}
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-600 to-slate-700 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Network className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Dynamic Knowledge Graph</h3>
                  <p className="text-gray-300 leading-relaxed">
                    See the bigger picture. Our Knowledge Graph maps the connections between your documents, projects, and teams,
                    helping you uncover hidden relationships and critical context.
                  </p>
                </div>
              </div>
            </div>

            {/* Robust RBAC Security */}
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0">
                  <Shield className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Robust RBAC Security</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Keep your data safe. Role-Based Access Control ensures sensitive information is only accessible to authorized users.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits for Enterprises */}
      <div className="relative overflow-hidden py-20">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-full bg-gradient-to-r from-orange-500/15 via-orange-600/8 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Benefits for <span className="text-orange-500">Enterprises</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <Clock className="w-10 h-10 text-orange-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">Save Time</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Eliminate time wasted toggling between tools. ElevateAI's agents automate routine tasks.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <Target className="w-10 h-10 text-orange-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">Smarter Decisions</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Our agentic intelligence correlates and explains data, not just retrieves it.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <Lock className="w-10 h-10 text-orange-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">Enterprise Security</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Built to meet strict compliance requirements with RBAC and full auditability.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <TrendingUp className="w-10 h-10 text-orange-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">Future-Ready</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Multi-tenant SaaS platform, SSO-ready, built to grow with your business.
              </p>
            </div>
          </div>

          {/* Detailed Example */}
          <div className="mt-12 bg-gradient-to-br from-orange-500/10 to-orange-600/5 backdrop-blur-sm rounded-3xl p-8 border border-orange-500/20">
            <h3 className="text-2xl font-bold mb-4">Make Context-Rich Decisions</h3>
            <p className="text-gray-300 leading-relaxed">
              For example, a query like, <span className="text-orange-400 font-semibold">"Show me all Q4 contracts mentioning arbitration clauses and their related Jira issues,"</span> is instantly
              synthesized into a comprehensive answer, not a list of links.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative overflow-hidden py-20">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your <span className="text-orange-500">Enterprise Intelligence?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join leading enterprises using ElevateAI to unlock the full potential of their data.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-200 flex items-center gap-2">
              <Zap className="w-5 h-5" />
              Book a Demo
            </button>
            <button className="text-white hover:text-orange-400 px-8 py-4 font-medium text-lg transition-colors duration-200 decoration-2 underline-offset-4 underline">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElevateAIPage;
