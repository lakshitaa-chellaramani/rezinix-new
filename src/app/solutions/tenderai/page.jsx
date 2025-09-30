'use client'
import React from 'react';
import { Target, Zap, Shield, TrendingUp, Search, MessageSquare, FileText, BarChart3, CheckCircle, Clock, Award } from 'lucide-react';
import TenderAIDiagram from '../../diagrams/TenderAIDiagram';

const TenderAIPage = () => {
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
              <Target className="w-4 h-4 text-orange-400" />
              <span className="text-orange-400 font-medium text-sm uppercase tracking-wider">AI-Powered Tender Qualification</span>
              <Target className="w-4 h-4 text-orange-400" />
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-8 leading-tight">
            TenderAI: <span className="text-orange-500">Qualify & Win Perfect Tenders.</span><br />
            Every Time.
          </h1>

          {/* Subheadline */}
          <p className="text-xl lg:text-2xl text-gray-300 text-center max-w-5xl mx-auto leading-relaxed mb-12">
            Transform your tender qualification process with AI that automates discovery, provides deep analysis,
            and delivers clear, justified recommendations in minutes, not weeks.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-200 flex items-center gap-2">
              <Zap className="w-5 h-5" />
              Start Free Trial
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-200 flex items-center gap-2 border border-gray-700">
              <TrendingUp className="w-5 h-5" />
              See Demo
            </button>
          </div>
        </div>
      </div>

      {/* The Challenge & Solution */}
      <div className="relative overflow-hidden py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* The Challenge */}
            <div className="bg-gradient-to-br from-red-500/10 to-red-600/5 backdrop-blur-sm rounded-3xl p-8 border border-red-500/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-red-400" />
                </div>
                <h2 className="text-3xl font-bold">The Challenge</h2>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                Navigating the competitive landscape of tenders is incredibly time-consuming and often leads to wasted resources.
                Manually sifting through hundreds of pages for key details is inefficient, resulting in <span className="text-red-400 font-semibold">missed opportunities</span> and
                a <span className="text-red-400 font-semibold">low bid-to-win ratio</span>.
              </p>
            </div>

            {/* The Solution */}
            <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 backdrop-blur-sm rounded-3xl p-8 border border-green-500/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                </div>
                <h2 className="text-3xl font-bold">The Solution</h2>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                TenderAI is an AI-powered platform that transforms your tender qualification process. It automates discovery,
                provides deep analysis, and delivers clear, justified recommendations, empowering you to make <span className="text-green-400 font-semibold">confident go/no-go decisions</span> in
                minutes, not weeks.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="relative overflow-hidden py-20">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            How It Works: <span className="text-orange-500">Your Path to Success</span>
          </h2>
          <p className="text-xl text-gray-300 text-center mb-16">Three simple steps to tender qualification mastery</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 hover:border-orange-500/30 transition-all duration-300">
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center text-2xl font-bold shadow-lg shadow-orange-500/50">
                1
              </div>
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500/20 to-orange-600/10 rounded-2xl mb-6 mt-4">
                <Search className="w-8 h-8 text-orange-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Discover & Organize</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Proactively find new tenders with our AI or upload your own documents</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>The system instantly reads, understands, and organizes all critical information</span>
                </li>
              </ul>
            </div>

            {/* Step 2 */}
            <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 hover:border-orange-500/30 transition-all duration-300">
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center text-2xl font-bold shadow-lg shadow-orange-500/50">
                2
              </div>
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-slate-600/20 to-slate-700/10 rounded-2xl mb-6 mt-4">
                <MessageSquare className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Interact & Analyze</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Ask questions in plain language or voice</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Get instant answers, deep insights, and holistic risk analysis</span>
                </li>
              </ul>
            </div>

            {/* Step 3 */}
            <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 hover:border-orange-500/30 transition-all duration-300">
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center text-2xl font-bold shadow-lg shadow-orange-500/50">
                3
              </div>
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500/20 to-orange-600/10 rounded-2xl mb-6 mt-4">
                <Award className="w-8 h-8 text-orange-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Decide & Win</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Receive instant, tailored summaries and a clear "Qualified" or "Not Qualified" verdict</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Make confident, data-driven decisions that boost your success rate</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Architecture Diagram */}
      <div className="relative overflow-hidden py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              TenderAI <span className="text-orange-500">Architecture</span>
            </h2>
            <p className="text-xl text-gray-300">Specialized AI agents working together to deliver results</p>
          </div>
          <TenderAIDiagram />
        </div>
      </div>

      {/* Key Benefits */}
      <div className="relative overflow-hidden py-20">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Key <span className="text-orange-500">Benefits</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Massive Time Savings</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Our AI accelerates tender review by <span className="text-orange-400 font-semibold">80%</span>, saving your team weeks of manual work.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-600 to-slate-700 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Winning Decisions</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Clear qualification recommendations help you pursue the right tenders and boost your bid-to-win ratio.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Unquestionable Verifiability</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Every insight is <span className="text-orange-400 font-semibold">100% traceable</span>, linking directly to the source document for full transparency.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-600 to-slate-700 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Award className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Strategic Advantage</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Gain a competitive edge with data-driven insights and a streamlined workflow.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Powerful Features */}
      <div className="relative overflow-hidden py-20">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-full bg-gradient-to-r from-orange-500/15 via-orange-600/8 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Powerful <span className="text-orange-500">Features</span>
          </h2>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Search className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Tender Discovery & Processing</h3>
                  <p className="text-gray-400">Find new opportunities and instantly process any document you have.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-slate-600 to-slate-700 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Multi-Mode AI Queries</h3>
                  <p className="text-gray-400">Interact with your documents in any language, using Normal, Deep, or Agentic modes.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Department-Specific Summaries</h3>
                  <p className="text-gray-400">Get tailored overviews for your legal, commercial, and technical teams in seconds.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-slate-600 to-slate-700 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Holistic Risk Analysis</h3>
                  <p className="text-gray-400">Identify and evaluate contractual, operational, and compliance risks.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Clear Qualification Verdicts</h3>
                  <p className="text-gray-400">Receive a definitive "go/no-go" recommendation with visual dashboards.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative overflow-hidden py-20">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="text-orange-500">Win More Tenders?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join forward-thinking organizations using TenderAI to maximize their tender success rates.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-200 flex items-center gap-2">
              <Zap className="w-5 h-5" />
              Start Free Trial
            </button>
            <button className="text-white hover:text-orange-400 px-8 py-4 font-medium text-lg transition-colors duration-200 decoration-2 underline-offset-4 underline">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TenderAIPage;
