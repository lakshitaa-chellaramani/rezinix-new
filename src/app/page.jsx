'use client'
import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, Menu, X, Sparkles, Zap, TrendingUp, Brain, Users, Shield, Settings, BookOpen, Camera, Code, MessageSquare, Cpu, Cloud, Palette, Search, Briefcase, Bot, BarChart3, Smartphone, Link, Cog } from 'lucide-react';
import { motion } from 'framer-motion';
import DesignForDesigners from './SectionTwo';
import StatsSection from './StatsSection';
import PricingSection from './PricingSection';
import FAQSection from './FAQSection';
import CTASection from './CTASection';
import Footer from './Footer';

const LandingPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [expandedSections, setExpandedSections] = useState({
    about: true,
    customServices: false,
    expertise: false,
    technology: false
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div>
      {/* Hero Section */}
      <div id="hero" className="min-h-screen bg-black text-white relative overflow-hidden pt-20">
        {/* Professional gradient background */}
        <div className="absolute inset-0">
          {/* Subtle gradient overlays */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-l from-orange-500/10 to-transparent opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-orange-500/8 to-transparent opacity-40"></div>

          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-[0.015]"
            style={{
              backgroundImage: `linear-gradient(rgba(249, 115, 22, 0.2) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(249, 115, 22, 0.2) 1px, transparent 1px)`,
              backgroundSize: '80px 80px'
            }}>
          </div>
        </div>

        {/* Fixed Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src="/logo.png"
                alt="Rezinix Logo"
                className="h-10 w-auto cursor-pointer"
                onClick={() => scrollToSection('hero')}
              />
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-8">
              <button onClick={() => scrollToSection('hero')} className="text-white hover:text-orange-400 transition-colors duration-200">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-white transition-colors duration-200">About</button>
              <a href="/solutions" className="text-gray-300 hover:text-white transition-colors duration-200">Our Solutions</a>
              <button onClick={() => scrollToSection('custom-services')} className="text-gray-300 hover:text-white transition-colors duration-200">Custom Services</button>
              <button onClick={() => scrollToSection('expertise')} className="text-gray-300 hover:text-white transition-colors duration-200">Expertise</button>
              <button onClick={() => scrollToSection('technology')} className="text-gray-300 hover:text-white transition-colors duration-200">Technology</button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden bg-black/95 backdrop-blur-md border-t border-gray-800">
              <div className="px-8 py-4 flex flex-col space-y-4">
                <button onClick={() => scrollToSection('hero')} className="text-left text-white hover:text-orange-400 transition-colors duration-200 py-2">Home</button>
                <button onClick={() => scrollToSection('about')} className="text-left text-gray-300 hover:text-white transition-colors duration-200 py-2">About</button>
                <a href="/rezi/solutions" className="text-left text-gray-300 hover:text-white transition-colors duration-200 py-2">Our Solutions</a>
                <button onClick={() => scrollToSection('custom-services')} className="text-left text-gray-300 hover:text-white transition-colors duration-200 py-2">Custom Services</button>
                <button onClick={() => scrollToSection('expertise')} className="text-left text-gray-300 hover:text-white transition-colors duration-200 py-2">Expertise</button>
                <button onClick={() => scrollToSection('technology')} className="text-left text-gray-300 hover:text-white transition-colors duration-200 py-2">Technology</button>
              </div>
            </div>
          )}
        </nav>

        {/* Main Hero Content */}
        <div className="relative z-10 px-8 pt-20 pb-16">
          <div className="max-w-7xl mx-auto">
            {/* Main Headline */}
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                  Start your <span className="text-orange-500">AI PoC</span>
                  <br />
                  with Rezinix
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed mb-12"
              >
                We deliver cutting-edge AI solutions that transform businesses, enhance customer experiences, and unlock new growth opportunities
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200">
                  Get Started
                </button>
                <button className="border border-gray-700 hover:border-orange-500 text-white px-8 py-4 rounded-lg font-medium text-lg transition-all duration-200">
                  Learn More
                </button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="relative z-10 px-8 pb-28"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-xl p-8 text-center hover:border-orange-500/30 transition-all duration-300">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">120K+</div>
                <div className="text-gray-400 text-sm uppercase tracking-wider">Clients</div>
              </div>

              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-xl p-8 text-center hover:border-orange-500/30 transition-all duration-300">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">150+</div>
                <div className="text-gray-400 text-sm uppercase tracking-wider">Projects</div>
              </div>

              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-xl p-8 text-center hover:border-orange-500/30 transition-all duration-300">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">32K+</div>
                <div className="text-gray-400 text-sm uppercase tracking-wider">5-Star Reviews</div>
              </div>
            </div>
          </div>
        </motion.div> */}
      </div>

      {/* About Section */}
      <div id="about" className="min-h-screen bg-black text-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-0 right-0 w-96 h-full bg-gradient-to-l from-orange-500/15 via-orange-600/8 to-transparent"
            animate={{ opacity: [0.15, 0.25, 0.15] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-orange-500/10 to-transparent rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          <div className="absolute inset-0 opacity-[0.02]"
               style={{
                 backgroundImage: `linear-gradient(rgba(249, 115, 22, 0.1) 1px, transparent 1px),
                                  linear-gradient(90deg, rgba(249, 115, 22, 0.1) 1px, transparent 1px)`,
                 backgroundSize: '50px 50px'
               }}>
          </div>
        </div>

        <div className="relative z-10 px-8 py-24">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500/10 to-orange-600/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-orange-500/20">
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                <span className="text-orange-400 font-medium text-sm uppercase tracking-wider">Who We Are</span>
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
                About <span className="text-orange-500">Rezinix</span>
              </h1>

              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                At Rezinix, we see artificial intelligence as the driving force behind smarter, faster, and more resilient enterprises.
              </p>
            </motion.div>

            {/* Two Column Layout - Who We Are */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <p className="text-lg text-gray-300 leading-relaxed">
                  Our team of AI architects, data scientists, engineers, and industry experts blends cutting-edge technology with human insight to tackle real-world challenges.
                </p>

                <p className="text-lg text-gray-300 leading-relaxed">
                  We're committed to making AI accessible, transformative, and ethically grounded—earning the trust of businesses across industries as a reliable partner in innovation.
                </p>

                <p className="text-lg text-gray-300 leading-relaxed">
                  We build intelligent systems that are not only powerful, but also responsible—designed to adapt, scale, and deliver lasting impact.
                </p>
              </motion.div>

              {/* Right Content - Team Grid */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4"
              >
                {[
                  { icon: Brain, title: "AI Architects", description: "Strategic AI implementation experts" },
                  { icon: Users, title: "Data Scientists", description: "Advanced analytics specialists" },
                  { icon: Zap, title: "Engineers", description: "Cutting-edge development team" },
                  { icon: Shield, title: "Industry Experts", description: "Cross-sector domain knowledge" }
                ].map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm border border-gray-800 hover:border-orange-500/30 p-6 rounded-xl transition-all duration-300"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-orange-600/10 rounded-lg flex items-center justify-center mb-4 border border-orange-500/20">
                        <IconComponent className="w-6 h-6 text-orange-500" />
                      </div>
                      <h3 className="text-white font-semibold text-base mb-2">{item.title}</h3>
                      <p className="text-gray-400 text-sm">{item.description}</p>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>

            {/* What We Do Section */}
            {expandedSections.about && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-20"
              >
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                    What We <span className="text-orange-500">Do</span>
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Our comprehensive AI service portfolio transforms businesses through cutting-edge artificial intelligence solutions and strategic implementation.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { icon: Shield, title: "AI Governance and Responsible AI", description: "Design trustworthy AI with transparency, fairness, and compliance." },
                    { icon: Settings, title: "AI Platform Engineering", description: "Build, scale, and manage enterprise-grade AI platforms and MLOps pipelines." },
                    { icon: Brain, title: "AI Strategy and Consulting", description: "Align your business goals with a tailored AI roadmap and operating model." },
                    { icon: BookOpen, title: "AI Training", description: "Tailored training programs for business leaders, technical teams, and non-technical staff." },
                    { icon: Camera, title: "Computer Vision Solutions", description: "Automate visual tasks like quality control, surveillance, and content moderation." },
                    { icon: Code, title: "Custom AI Solution Development", description: "Build scalable, production-grade AI models and applications." },
                    { icon: Zap, title: "Generative AI and LLM Integration", description: "Leverage large language models for content creation, automation, and decision support." },
                    { icon: Cpu, title: "Machine Learning & Deep Learning Models", description: "Create predictive, generative, and adaptive learning systems." },
                    { icon: MessageSquare, title: "Natural Language Processing (NLP)", description: "Understand, summarize, translate, and generate human language at scale." }
                  ].map((service, index) => {
                    const ServiceIcon = service.icon;
                    const isOrange = index % 2 === 0;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-orange-500/30 transition-all duration-300"
                      >
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 border ${
                          isOrange
                            ? 'bg-gradient-to-br from-orange-500/20 to-orange-600/10 border-orange-500/20'
                            : 'bg-gradient-to-br from-gray-700/20 to-gray-800/10 border-gray-700/20'
                        }`}>
                          <ServiceIcon className={`w-6 h-6 ${isOrange ? 'text-orange-500' : 'text-gray-400'}`} />
                        </div>
                        <h3 className="text-base font-bold text-white mb-2">{service.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* Read More Button */}
            <div className="text-center">
              <button
                onClick={() => toggleSection('about')}
                className="inline-flex items-center gap-2 text-gray-400 hover:text-orange-400 transition-colors duration-200 px-6 py-3 border border-gray-800 hover:border-orange-500/30 rounded-lg"
              >
                {expandedSections.about ? (
                  <>
                    <span>Show Less</span>
                    <ChevronUp size={20} />
                  </>
                ) : (
                  <>
                    <span>See What We Do</span>
                    <ChevronDown size={20} />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Services Section */}
      <div id="custom-services" className="min-h-screen bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-full bg-gradient-to-l from-orange-500/15 via-orange-600/8 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-orange-500/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute inset-0 opacity-[0.02]"
               style={{
                 backgroundImage: `linear-gradient(rgba(249, 115, 22, 0.1) 1px, transparent 1px),
                                  linear-gradient(90deg, rgba(249, 115, 22, 0.1) 1px, transparent 1px)`,
                 backgroundSize: '50px 50px'
               }}>
          </div>
        </div>

        <div className="relative z-10 px-8 py-24">
          <div className="max-w-7xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500/10 to-orange-600/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-orange-500/20">
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                <span className="text-orange-400 font-medium text-sm uppercase tracking-wider">Tailored Solutions</span>
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
                Customized <span className="text-orange-500">Services</span>
              </h1>

              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                At Rezinx, our customized services span from AI & data consulting to cloud transformation,
                ensuring enterprises adopt intelligent, future-ready systems.
              </p>
            </div>

            {/* Services Grid - Show only 2 initially */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              <ServiceCard
                title="AI & Data Consulting"
                subtitle="Strategic Intelligence"
                description="Strategic advisory for AI adoption and scaling. Data governance, readiness, and maturity assessments. Tailored roadmaps for measurable business outcomes."
                features={[
                  "AI readiness and maturity assessments",
                  "Data governance framework implementation",
                  "Custom AI strategy and roadmap development",
                  "ROI-driven transformation planning"
                ]}
                icon={Brain}
                color="orange"
                index={0}
              />
              <ServiceCard
                title="Cloud & Enterprise Transformation"
                subtitle="Modern Infrastructure"
                description="Cloud migration, modernization, and integration. Enterprise software customization (ERP, CRM, HRMS). Secure, compliant architectures built for scale."
                features={[
                  "Multi-cloud migration and modernization",
                  "Enterprise software customization",
                  "Legacy system integration and transformation",
                  "Compliance and security architecture"
                ]}
                icon={Cloud}
                color="slate"
                index={1}
              />

              {/* Expandable Content */}
              {expandedSections.customServices && (
                <>
                  <ServiceCard
                    title="UX/UI & Product Innovation"
                    subtitle="Human-Centered Design"
                    description="Human-centered product design and prototyping. Intuitive user experiences aligned with brand identity. Design thinking workshops for enterprise innovation."
                    features={[
                      "User research and experience design",
                      "Rapid prototyping and design systems",
                      "Brand-aligned interface development",
                      "Innovation workshops and design sprints"
                    ]}
                    icon={Palette}
                    color="orange"
                    index={2}
                  />
                  <ServiceCard
                    title="Quality Assurance & Code Audit"
                    subtitle="Reliable Delivery"
                    description="Comprehensive manual and automated testing. Security, performance, and compliance audits. Continuous monitoring to ensure long-term reliability."
                    features={[
                      "Automated testing framework implementation",
                      "Security and performance auditing",
                      "Code quality and compliance assessment",
                      "Continuous monitoring and optimization"
                    ]}
                    icon={Search}
                    color="slate"
                    index={3}
                  />
                </>
              )}
            </div>

            {/* Read More Button */}
            <div className="text-center mb-16">
              <button
                onClick={() => toggleSection('customServices')}
                className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors duration-200"
              >
                {expandedSections.customServices ? (
                  <>
                    <span>Show Less</span>
                    <ChevronUp size={20} />
                  </>
                ) : (
                  <>
                    <span>Read More</span>
                    <ChevronDown size={20} />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Expertise Section */}
      <div id="expertise" className="min-h-screen bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[600px] h-full bg-gradient-to-l from-orange-500/15 via-orange-600/8 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-orange-500/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute inset-0 opacity-[0.02]"
               style={{backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '50px 50px'}}>
          </div>
        </div>

        <div className="relative z-10 px-8 py-24">
          <div className="max-w-8xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500/10 to-orange-600/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-orange-500/20">
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                <span className="text-orange-400 font-medium text-sm uppercase tracking-wider">Enterprise Solutions</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                Our <span className="text-orange-500">Expertise</span>
              </h1>

              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                From mobile-first applications to secure APIs and intuitive UX/UI, we deliver digital experiences
                that engage and perform.
              </p>
            </div>

            {/* Expertise Grid - Show 4 initially */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
              <ExpertiseCard
                id="01"
                title="Enterprise Application Development"
                subtitle="Scalable Solutions"
                description="Design and build scalable enterprise-grade applications with seamless integration to ERP, CRM, and legacy systems."
                features={[
                  "Scalable enterprise-grade applications",
                  "ERP, CRM, and legacy system integration",
                  "Performance, security, and regulatory compliance"
                ]}
                color="orange"
                icon={Briefcase}
              />
              <ExpertiseCard
                id="02"
                title="SaaS & Cloud-Native Platforms"
                subtitle="Modern Infrastructure"
                description="End-to-end SaaS product design with multi-tenant architectures and elastic scaling capabilities."
                features={[
                  "End-to-end SaaS product design and deployment",
                  "Multi-tenant architectures with elastic scaling",
                  "Cloud-native development on AWS, Azure, and GCP"
                ]}
                color="slate"
                icon={Cloud}
              />
              <ExpertiseCard
                id="03"
                title="AI & ML Engineering"
                subtitle="Intelligent Automation"
                description="Custom ML models for prediction, classification, and automation with generative AI integrations."
                features={[
                  "Custom ML models for prediction and classification",
                  "Generative AI integrations for content and chat",
                  "Deployment pipeline for continuous improvement"
                ]}
                color="orange"
                icon={Bot}
              />
              <ExpertiseCard
                id="04"
                title="Data Engineering & Analytics"
                subtitle="Insights & Intelligence"
                description="Big data pipelines with real-time analytics and comprehensive data visualization solutions."
                features={[
                  "Big data pipelines (Hadoop, Databricks, Snowflake)",
                  "Real-time analytics and data visualization",
                  "Data integration from siloed enterprise systems"
                ]}
                color="slate"
                icon={BarChart3}
              />

              {/* Expandable Content */}
              {expandedSections.expertise && (
                <>
                  <ExpertiseCard
                    id="05"
                    title="Mobile & Cross-Platform Solutions"
                    subtitle="Native Excellence"
                    description="Native Android/iOS development with secure frameworks and cross-platform capabilities."
                    features={[
                      "Native Android/iOS development with secure frameworks",
                      "Cross-platform apps with React Native / Flutter",
                      "Mobile-first enterprise workflows with offline capability"
                    ]}
                    color="orange"
                    icon={Smartphone}
                  />
                  <ExpertiseCard
                    id="06"
                    title="API Development & System Integration"
                    subtitle="Seamless Connectivity"
                    description="Secure REST, GraphQL, and gRPC APIs with comprehensive third-party service integration."
                    features={[
                      "Secure REST, GraphQL, and gRPC APIs",
                      "Third-party service integration (payments, identity, messaging)",
                      "Microservices architecture for modularity and scalability"
                    ]}
                    color="slate"
                    icon={Link}
                  />
                  <ExpertiseCard
                    id="07"
                    title="UX/UI Engineering"
                    subtitle="Human-Centered Design"
                    description="Human-centered design for intuitive digital experiences with accessibility-driven development."
                    features={[
                      "Human-centered design for intuitive digital experiences",
                      "Wireframes, prototypes, and design systems aligned with brand",
                      "Accessibility-driven development (WCAG compliance)"
                    ]}
                    color="orange"
                    icon={Palette}
                  />
                  <ExpertiseCard
                    id="08"
                    title="Quality Assurance & DevOps"
                    subtitle="Reliable Delivery"
                    description="Automated testing frameworks with continuous integration and proactive monitoring systems."
                    features={[
                      "Automated testing frameworks for speed and reliability",
                      "Continuous Integration / Continuous Deployment pipelines",
                      "Proactive monitoring, logging, and incident response"
                    ]}
                    color="slate"
                    icon={Zap}
                  />
                </>
              )}
            </div>

            {/* Read More Button */}
            <div className="text-center">
              <button
                onClick={() => toggleSection('expertise')}
                className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors duration-200"
              >
                {expandedSections.expertise ? (
                  <>
                    <span>Show Less</span>
                    <ChevronUp size={20} />
                  </>
                ) : (
                  <>
                    <span>Read More</span>
                    <ChevronDown size={20} />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Section */}
      <div id="technology" className="min-h-screen bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full">
            <svg viewBox="0 0 1200 800" className="w-full h-full opacity-10">
              <defs>
                <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#f97316" stopOpacity="0.3"/>
                  <stop offset="50%" stopColor="#ea580c" stopOpacity="0.2"/>
                  <stop offset="100%" stopColor="#c2410c" stopOpacity="0.1"/>
                </linearGradient>
              </defs>
              <path d="M0,300 Q300,100 600,250 T1200,200 L1200,800 L0,800 Z" fill="url(#waveGradient)"/>
            </svg>
          </div>
        </div>

        <div className="relative z-10 px-8 py-24">
          <div className="max-w-7xl mx-auto">
            {/* Header Section */}
            <div className="mb-20">
              <div className="flex flex-col lg:flex-row items-start lg:items-end gap-12">
                <div className="lg:w-2/3">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"></div>
                    <span className="text-orange-400 font-medium text-sm uppercase tracking-wider">Technology Stack</span>
                  </div>

                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
                    Our <span className="text-orange-500">Technologies</span>
                  </h1>
                </div>

                <div className="lg:w-1/3">
                  <p className="text-xl text-gray-300 leading-relaxed">
                    Our technology stack combines the power of AI, machine learning, and generative AI with the
                    scalability of big data and cloud platforms.
                  </p>
                </div>
              </div>
            </div>

            {/* Technology Grid - Show 4 initially */}
            <div className="space-y-8">
              <div className="flex flex-col lg:flex-row gap-8">
                <TechCard
                  title="Artificial Intelligence & Agentic AI"
                  description="Intelligent systems with reasoning, synthesis, and decision-making. Agent-based AI workflows for enterprises."
                  details={[
                    "Advanced neural networks and deep learning",
                    "Computer vision and natural language processing",
                    "Autonomous AI agents and decision systems",
                    "Enterprise AI workflow automation"
                  ]}
                  icon={Brain}
                  color="orange"
                  bgPattern="from-orange-500/10 to-orange-600/5"
                />
                <TechCard
                  title="Machine Learning & Predictive Models"
                  description="Advanced algorithms for classification, forecasting, and automation. Natural language processing and computer vision."
                  details={[
                    "Supervised and unsupervised learning models",
                    "Time series forecasting and trend analysis",
                    "Computer vision and image recognition",
                    "NLP for sentiment and text analysis"
                  ]}
                  icon={Cog}
                  color="slate"
                  bgPattern="from-slate-600/10 to-slate-700/5"
                />
              </div>

              <div className="flex flex-col lg:flex-row gap-8 lg:ml-16">
                <TechCard
                  title="Generative AI"
                  description="Large Language Models (LLMs) for co-pilots and automation. Creative AI for content, reports, and conversational interfaces."
                  details={[
                    "GPT and transformer-based architectures",
                    "Custom fine-tuned models for enterprise",
                    "AI-powered content generation and automation",
                    "Conversational AI and intelligent chatbots"
                  ]}
                  icon={Sparkles}
                  color="orange"
                  bgPattern="from-orange-500/10 to-orange-600/5"
                />
                <TechCard
                  title="Big Data & Data Engineering"
                  description="Scalable data pipelines with Hadoop, Spark, Databricks, Snowflake. Real-time streaming, integration, and governance."
                  details={[
                    "Distributed computing with Hadoop and Spark",
                    "Modern data warehouses (Snowflake, BigQuery)",
                    "Real-time stream processing and ETL pipelines",
                    "Data governance and quality frameworks"
                  ]}
                  icon={BarChart3}
                  color="slate"
                  bgPattern="from-slate-600/10 to-slate-700/5"
                />
              </div>

              {/* Expandable Content */}
              {expandedSections.technology && (
                <>
                  <div className="flex flex-col lg:flex-row gap-8 lg:ml-8">
                    <TechCard
                      title="Cloud Platforms & Migration"
                      description="Expertise in AWS, Azure, GCP, and hybrid architectures. Cloud-native applications and enterprise modernization."
                      details={[
                        "Multi-cloud and hybrid cloud strategies",
                        "Containerization with Docker and Kubernetes",
                        "Serverless architectures and microservices",
                        "Legacy system migration and modernization"
                      ]}
                      icon={Cloud}
                      color="orange"
                      bgPattern="from-orange-500/10 to-orange-600/5"
                    />
                    <TechCard
                      title="Data Analytics & Visualization"
                      description="Power BI, Tableau, Azure Fabric for actionable insights. Dynamic dashboards, reporting, and trend forecasting."
                      details={[
                        "Interactive dashboards and real-time analytics",
                        "Business intelligence and data visualization",
                        "Predictive analytics and forecasting models",
                        "Self-service analytics platforms"
                      ]}
                      icon={TrendingUp}
                      color="slate"
                      bgPattern="from-slate-600/10 to-slate-700/5"
                    />
                  </div>

                  <div className="flex flex-col lg:flex-row gap-8 lg:ml-24">
                    <TechCard
                      title="Enterprise Systems & Integrations"
                      description="Microsoft Dynamics, SAP, Salesforce, custom ERP/CRM. Seamless API and microservices-based architectures."
                      details={[
                        "ERP/CRM system integration and customization",
                        "RESTful APIs and GraphQL implementations",
                        "Enterprise service bus and middleware",
                        "Legacy system integration and data sync"
                      ]}
                      icon={Link}
                      color="orange"
                      bgPattern="from-orange-500/10 to-orange-600/5"
                    />
                    <TechCard
                      title="DevOps, Security & Compliance"
                      description="CI/CD pipelines for agility and faster time-to-market. Role-based access control, encryption, and compliance frameworks."
                      details={[
                        "Automated CI/CD with GitLab, Jenkins, GitHub Actions",
                        "Infrastructure as Code (Terraform, CloudFormation)",
                        "Security scanning and vulnerability management",
                        "Compliance frameworks (SOC2, GDPR, HIPAA)"
                      ]}
                      icon={Shield}
                      color="slate"
                      bgPattern="from-slate-600/10 to-slate-700/5"
                    />
                  </div>
                </>
              )}
            </div>

            {/* Read More Button */}
            <div className="text-center mt-16">
              <button
                onClick={() => toggleSection('technology')}
                className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors duration-200"
              >
                {expandedSections.technology ? (
                  <>
                    <span>Show Less</span>
                    <ChevronUp size={20} />
                  </>
                ) : (
                  <>
                    <span>Read More</span>
                    <ChevronDown size={20} />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Existing Sections */}
      {/* <DesignForDesigners/>
      <StatsSection/>
      <PricingSection/>
      <FAQSection/>
      <CTASection/>
      <Footer/> */}
    </div>
  );
};

// Helper Components
const FeatureItem = ({ title, description, icon }) => (
  <div className="group bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-orange-500/30 transition-all duration-300">
    <div className="flex items-start gap-4">
      <div className="text-3xl">{icon}</div>
      <div>
        <h3 className="text-xl font-bold mb-2 group-hover:text-orange-400 transition-colors">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  </div>
);

const StatCard = ({ year, number, title, description, color }) => (
  <div className={`bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border ${
    color === 'orange' ? 'border-orange-500/30' : 'border-gray-700/50'
  }`}>
    <div className="text-4xl font-light mb-2">{year || number}</div>
    <h3 className="text-lg font-semibold mb-1">{title}</h3>
    <p className="text-gray-400 text-sm">{description}</p>
  </div>
);

const ServiceCard = ({ title, subtitle, description, features, icon: Icon, color, index }) => {
  const isOrange = color === 'orange';

  return (
    <div className="group relative h-full">
      <div className={`h-full bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 transition-all duration-300 hover:border-orange-500/30 hover:transform hover:scale-105 relative overflow-hidden`}>
        <div className={`absolute inset-0 bg-gradient-to-br ${
          isOrange ? 'from-orange-500/5 to-transparent' : 'from-slate-500/5 to-transparent'
        } opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl`}></div>

        <div className="flex items-start justify-between mb-6 relative z-10">
          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 ${
            isOrange
              ? 'bg-gradient-to-br from-orange-500 to-orange-600'
              : 'bg-gradient-to-br from-slate-600 to-slate-700'
          }`}>
            <Icon className="w-8 h-8 text-white" />
          </div>

          <div className={`text-xs font-bold px-3 py-1 rounded-full border ${
            isOrange
              ? 'text-orange-400 border-orange-500/30 bg-orange-500/10'
              : 'text-slate-400 border-slate-500/30 bg-slate-500/10'
          }`}>
            {String(index + 1).padStart(2, '0')}
          </div>
        </div>

        <div className="space-y-4 relative z-10">
          <div>
            <h3 className={`text-2xl font-bold mb-2 transition-colors duration-300 ${
              isOrange ? 'group-hover:text-orange-400' : 'group-hover:text-slate-300'
            }`}>
              {title}
            </h3>
            <p className="text-orange-400 font-medium text-sm uppercase tracking-wider mb-4">
              {subtitle}
            </p>
          </div>

          <p className="text-gray-300 leading-relaxed mb-6">
            {description}
          </p>

          <ul className="space-y-3">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 transition-all duration-300 ${
                  isOrange ? 'bg-orange-500 group-hover:bg-orange-400' : 'bg-slate-500 group-hover:bg-slate-400'
                }`}></div>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const ExpertiseCard = ({ id, title, subtitle, description, features, color, icon: Icon }) => {
  return (
    <div className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 hover:border-orange-500/30 transition-all duration-300 hover:transform hover:scale-105">
      <div className="flex items-start justify-between mb-6">
        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold transition-all duration-300 group-hover:scale-110 ${
          color === 'orange'
            ? 'bg-gradient-to-br from-orange-500 to-orange-600 text-white'
            : 'bg-gradient-to-br from-gray-600 to-gray-700 text-white'
        }`}>
          {id}
        </div>
        <div className="opacity-60 group-hover:opacity-100 transition-opacity">
          <Icon className="w-8 h-8 text-gray-400" />
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <h3 className={`text-xl font-bold mb-2 transition-colors ${
            color === 'orange' ? 'group-hover:text-orange-400' : 'group-hover:text-gray-300'
          }`}>
            {title}
          </h3>
          <p className="text-sm text-orange-400 font-medium uppercase tracking-wider">
            {subtitle}
          </p>
        </div>

        <p className="text-gray-300 text-sm leading-relaxed">
          {description}
        </p>

        <ul className="space-y-2">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-gray-400">
              <div className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${
                color === 'orange' ? 'bg-orange-500' : 'bg-gray-500'
              }`}></div>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className={`absolute bottom-4 left-8 right-8 h-1 rounded-full transition-all duration-300 ${
        color === 'orange'
          ? 'bg-gradient-to-r from-orange-500 to-orange-600'
          : 'bg-gradient-to-r from-gray-500 to-gray-600'
      }`}></div>

      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
    </div>
  );
};

const TechCard = ({ title, description, details, icon: Icon, color, bgPattern }) => {
  const isOrange = color === 'orange';

  return (
    <div className="group relative flex-1 transition-all duration-500 hover:transform hover:scale-105">
      <div className={`relative bg-gradient-to-br ${bgPattern} backdrop-blur-sm rounded-[2.5rem] p-8 border border-gray-700/50 hover:border-orange-500/30 transition-all duration-300 overflow-hidden`}>
        <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${
          isOrange ? 'from-orange-500 to-orange-600' : 'from-slate-500 to-slate-600'
        } transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>

        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 transition-all duration-300 group-hover:rotate-12 ${
          isOrange ? 'bg-gradient-to-br from-orange-500 to-orange-600' : 'bg-gradient-to-br from-slate-600 to-slate-700'
        }`}>
          <Icon className="w-8 h-8 text-white" />
        </div>

        <h3 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
          isOrange ? 'group-hover:text-orange-400' : 'group-hover:text-slate-300'
        }`}>
          {title}
        </h3>

        <p className="text-gray-300 mb-6 leading-relaxed">
          {description}
        </p>

        <ul className="space-y-3">
          {details.map((detail, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
              <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 transition-all duration-300 ${
                isOrange ? 'bg-orange-500 group-hover:bg-orange-400' : 'bg-slate-500 group-hover:bg-slate-400'
              }`}></div>
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LandingPage;
