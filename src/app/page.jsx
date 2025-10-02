'use client'
import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, ChevronUp, Menu, X, Sparkles, Zap, TrendingUp, Brain, Users, Shield, Settings, BookOpen, Camera, Code, MessageSquare, Cpu, Cloud, Palette, Search, Briefcase, Bot, BarChart3, Smartphone, Link, Cog } from 'lucide-react';
import { motion } from 'framer-motion';
import LaserFlow from '../components/LaserFlow';
import GlareHover from '../components/GlareHover';
import DesignForDesigners from './SectionTwo';
import StatsSection from './StatsSection';
import PricingSection from './PricingSection';
import FAQSection from './FAQSection';
import CTASection from './CTASection';
import Footer from './Footer';

const LandingPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const revealRef = useRef(null);
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
      <div
        id="hero"
        className="min-h-screen bg-black text-white relative overflow-hidden pt-16 md:pt-20"
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const el = revealRef.current;
          if (el) {
            el.style.setProperty('--mx', `${x}px`);
            el.style.setProperty('--my', `${y + rect.height * 0.5}px`);
          }
        }}
        onMouseLeave={() => {
          const el = revealRef.current;
          if (el) {
            el.style.setProperty('--mx', '-9999px');
            el.style.setProperty('--my', '-9999px');
          }
        }}
      >
        {/* Mobile Gradient Background */}
        <div className="absolute inset-0 lg:hidden bg-black">
          {/* Primary radial gradient */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-orange-500/20 rounded-full blur-[120px]"></div>

          {/* Secondary accent gradients */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-orange-600/10 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-1/4 left-0 w-[250px] h-[250px] bg-orange-500/15 rounded-full blur-[90px]"></div>

          {/* Subtle overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>

          {/* Refined grid pattern */}
          <div className="absolute inset-0 opacity-[0.015]"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(249, 115, 22, 0.3) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(249, 115, 22, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '80px 80px'
            }}>
          </div>

          {/* Subtle noise texture for depth */}
          <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
            style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")'
            }}>
          </div>
        </div>

        {/* LaserFlow Background - Desktop Only */}
        <div className="absolute inset-0 w-full h-full hidden lg:block">
          <LaserFlow
            horizontalBeamOffset={0.0}
            verticalBeamOffset={-0.25}
            color="#f97316"
            fogIntensity={0.6}
            wispIntensity={6.0}
            verticalSizing={1.8}
            horizontalSizing={0.6}
          />
        </div>

        {/* Technologies Background Image for Reveal - Desktop Only */}
        <div
          ref={revealRef}
          className="hidden lg:block absolute top-0 left-0 w-full h-full pointer-events-none z-[5]"
          style={{
            '--mx': '-9999px',
            '--my': '-9999px',
            WebkitMaskImage: 'radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 100px, rgba(255,255,255,0.6) 180px, rgba(255,255,255,0.25) 260px, rgba(255,255,255,0) 340px)',
            maskImage: 'radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 100px, rgba(255,255,255,0.6) 180px, rgba(255,255,255,0.25) 260px, rgba(255,255,255,0) 340px)',
            WebkitMaskRepeat: 'no-repeat',
            maskRepeat: 'no-repeat',
            mixBlendMode: 'lighten',
            opacity: 0.6
          }}
        >
          {/* Tech Stack Pattern - Full Coverage */}
          <div className="absolute inset-0 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-9 gap-x-6 gap-y-8 sm:gap-x-8 sm:gap-y-10 md:gap-x-10 md:gap-y-12 lg:gap-x-12 lg:gap-y-16 px-4 sm:px-6 md:px-8 py-8 md:py-12 content-evenly opacity-60">
            {[
              { name: 'React', icon: Code },
              { name: 'TensorFlow', icon: Brain },
              { name: 'PyTorch', icon: Cpu },
              { name: 'AWS', icon: Cloud },
              { name: 'Azure', icon: Cloud },
              { name: 'GCP', icon: Cloud },
              { name: 'Python', icon: Code },
              { name: 'Node.js', icon: Zap },
              { name: 'Docker', icon: Cog },
              { name: 'Kubernetes', icon: Settings },
              { name: 'OpenAI', icon: Sparkles },
              { name: 'LangChain', icon: Link },
              { name: 'Databricks', icon: BarChart3 },
              { name: 'Snowflake', icon: Cloud },
              { name: 'MongoDB', icon: Cog },
              { name: 'PostgreSQL', icon: Cog },
              { name: 'Hadoop', icon: BarChart3 },
              { name: 'Spark', icon: Zap },
              { name: 'Kafka', icon: TrendingUp },
              { name: 'Redis', icon: Zap },
              { name: 'FastAPI', icon: Code },
              { name: 'GraphQL', icon: Link },
              { name: 'TypeScript', icon: Code },
              { name: 'Next.js', icon: Code },
              { name: 'Flutter', icon: Smartphone },
              { name: 'React Native', icon: Smartphone },
              { name: 'Angular', icon: Code },
              { name: 'Vue.js', icon: Code },
              { name: 'Tailwind', icon: Palette },
              { name: 'Terraform', icon: Settings },
              { name: 'Jenkins', icon: Cog },
              { name: 'GitHub', icon: Code },
              { name: 'Vercel', icon: Cloud },
              { name: 'Supabase', icon: Cog },
              { name: 'Prisma', icon: Cog },
              { name: 'Django', icon: Code },
              { name: 'Flask', icon: Code },
              { name: 'Spring', icon: Code },
              { name: 'Golang', icon: Code },
              { name: 'Rust', icon: Code },
              { name: 'Elasticsearch', icon: Search },
              { name: 'Nginx', icon: Settings },
              { name: 'Apache', icon: Settings },
              { name: 'MySQL', icon: Cog },
              { name: 'Figma', icon: Palette }
            ].map((tech, i) => {
              const TechIcon = tech.icon;
              return (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center gap-1.5 sm:gap-2 md:gap-2.5 text-white font-medium text-[10px] xs:text-xs md:text-sm"
                  style={{
                    transform: `rotate(${(i % 4) * 1.2 - 1.8}deg)`,
                  }}
                >
                  <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-md md:rounded-lg bg-gradient-to-br from-orange-500/10 to-orange-600/5 border border-orange-500/20 flex items-center justify-center backdrop-blur-sm">
                    <TechIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-4.5 md:h-4.5 lg:w-5 lg:h-5 text-orange-500" strokeWidth={2} />
                  </div>
                  <span className="text-white/90 text-center leading-tight">{tech.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Fixed Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-lg border-b border-gray-800/50 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <div className="flex justify-between items-center h-16 sm:h-18 md:h-20">
              {/* Logo */}
              <div className="flex items-center flex-shrink-0">
                <img
                  src="/logo.png"
                  alt="Rezinix Logo"
                  className="h-7 sm:h-8 md:h-9 lg:h-10 w-auto cursor-pointer"
                  onClick={() => scrollToSection('hero')}
                />
              </div>

              {/* Desktop Navigation Links */}
              <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
                <button onClick={() => scrollToSection('hero')} className="text-white hover:text-orange-400 transition-colors duration-200 font-medium text-sm xl:text-base">Home</button>
                <button onClick={() => scrollToSection('expertise')} className="text-gray-300 hover:text-white transition-colors duration-200 font-medium text-sm xl:text-base">Expertise</button>
                <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-white transition-colors duration-200 font-medium text-sm xl:text-base">About</button>
                <a href="/solutions" className="text-gray-300 hover:text-white transition-colors duration-200 font-medium text-sm xl:text-base">Solutions</a>
                <a href="/team" className="text-gray-300 hover:text-white transition-colors duration-200 font-medium text-sm xl:text-base">Team</a>
                <button onClick={() => scrollToSection('custom-services')} className="text-gray-300 hover:text-white transition-colors duration-200 font-medium text-sm xl:text-base">Services</button>
                <button onClick={() => scrollToSection('technology')} className="text-gray-300 hover:text-white transition-colors duration-200 font-medium text-sm xl:text-base">Technology</button>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden text-white p-2 rounded-lg hover:bg-gray-800/50 transition-colors duration-200"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden bg-black/98 backdrop-blur-lg border-t border-gray-800/50 shadow-2xl"
            >
              <div className="px-4 sm:px-6 md:px-8 py-6 flex flex-col space-y-1 max-h-[calc(100vh-5rem)] overflow-y-auto">
                <button
                  onClick={() => {
                    scrollToSection('hero');
                    setMobileMenuOpen(false);
                  }}
                  className="text-left text-white hover:text-orange-400 hover:bg-gray-900/50 transition-all duration-200 py-3 px-4 rounded-lg font-medium text-base"
                >
                  Home
                </button>
                <button
                  onClick={() => {
                    scrollToSection('expertise');
                    setMobileMenuOpen(false);
                  }}
                  className="text-left text-gray-300 hover:text-white hover:bg-gray-900/50 transition-all duration-200 py-3 px-4 rounded-lg font-medium text-base"
                >
                  Expertise
                </button>
                <button
                  onClick={() => {
                    scrollToSection('about');
                    setMobileMenuOpen(false);
                  }}
                  className="text-left text-gray-300 hover:text-white hover:bg-gray-900/50 transition-all duration-200 py-3 px-4 rounded-lg font-medium text-base"
                >
                  About
                </button>
                <a
                  href="/solutions"
                  className="text-left text-gray-300 hover:text-white hover:bg-gray-900/50 transition-all duration-200 py-3 px-4 rounded-lg font-medium text-base block"
                >
                  Solutions
                </a>
                <a
                  href="/team"
                  className="text-left text-gray-300 hover:text-white hover:bg-gray-900/50 transition-all duration-200 py-3 px-4 rounded-lg font-medium text-base block"
                >
                  Team
                </a>
                <button
                  onClick={() => {
                    scrollToSection('custom-services');
                    setMobileMenuOpen(false);
                  }}
                  className="text-left text-gray-300 hover:text-white hover:bg-gray-900/50 transition-all duration-200 py-3 px-4 rounded-lg font-medium text-base"
                >
                  Services
                </button>
                <button
                  onClick={() => {
                    scrollToSection('technology');
                    setMobileMenuOpen(false);
                  }}
                  className="text-left text-gray-300 hover:text-white hover:bg-gray-900/50 transition-all duration-200 py-3 px-4 rounded-lg font-medium text-base"
                >
                  Technology
                </button>
              </div>
            </motion.div>
          )}
        </nav>

        {/* Main Hero Content */}
        <div className="relative z-10 px-4 sm:px-6 md:px-8 pt-24 sm:pt-28 md:pt-24 lg:pt-20 pb-20 sm:pb-24 md:pb-20 flex items-center justify-center min-h-screen">
          <div className="max-w-7xl mx-auto w-full">
            {/* Main Headline */}
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-6 sm:mb-8"
              >
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-4 sm:mb-6 px-2">
                  Start your <span className="text-orange-500">AI Journey</span>
                  <br className="hidden sm:block" />
                  <span className="sm:hidden"> </span>
                  with Rezinix
                </h1>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white max-w-4xl mx-auto leading-relaxed mb-10 sm:mb-12 md:mb-14 px-2"
              >
                We deliver cutting-edge AI solutions that transform businesses, enhance customer experiences, and unlock new growth opportunities
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4"
              >
                <button className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-lg font-semibold text-lg sm:text-xl transition-all duration-200 shadow-lg hover:shadow-orange-500/50">
                  Get Started
                </button>
                <button className="w-full sm:w-auto border-2 border-gray-700 hover:border-orange-500 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-lg font-medium text-lg sm:text-xl transition-all duration-200">
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

      {/* Expertise Section */}
      <div id="expertise" className="min-h-screen bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[600px] h-full bg-gradient-to-l from-orange-500/15 via-orange-600/8 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-orange-500/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute inset-0 opacity-[0.02]"
               style={{backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '50px 50px'}}>
          </div>
        </div>

        <div className="relative z-10 px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24">
          <div className="max-w-8xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-12 sm:mb-16 md:mb-20">
              <div className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-orange-500/10 to-orange-600/10 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8 border border-orange-500/20">
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                <span className="text-orange-400 font-medium text-xs sm:text-sm uppercase tracking-wider">Enterprise Solutions</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight px-2">
                Our <span className="text-orange-500">Expertise</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
                From mobile-first applications to secure APIs and intuitive UX/UI, we deliver digital experiences
                that engage and perform.
              </p>
            </div>

            {/* Expertise Grid - Show 4 initially */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
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
            <div className="text-center mt-4 sm:mt-0">
              <button
                onClick={() => toggleSection('expertise')}
                className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors duration-200 px-4 py-2 rounded-lg hover:bg-orange-500/10"
              >
                {expandedSections.expertise ? (
                  <>
                    <span className="text-sm sm:text-base font-medium">Show Less</span>
                    <ChevronUp size={18} className="sm:w-5 sm:h-5" />
                  </>
                ) : (
                  <>
                    <span className="text-sm sm:text-base font-medium">Read More</span>
                    <ChevronDown size={18} className="sm:w-5 sm:h-5" />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
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
                    >
                      <GlareHover
                        width="100%"
                        height="100%"
                        background="linear-gradient(135deg, rgba(17, 17, 17, 0.9) 0%, rgba(26, 26, 26, 0.8) 100%)"
                        borderRadius="12px"
                        borderColor="rgb(55, 65, 81)"
                        glareColor="#f97316"
                        glareOpacity={0.4}
                        glareAngle={-45}
                        glareSize={350}
                        transitionDuration={800}
                        playOnce={false}
                        className="backdrop-blur-sm hover:border-orange-500/50 transition-all duration-300"
                        style={{
                          padding: '1.5rem'
                        }}
                      >
                        <div className="flex flex-col h-full">
                          <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-orange-600/10 rounded-lg flex items-center justify-center mb-4 border border-orange-500/20">
                            <IconComponent className="w-6 h-6 text-orange-500" />
                          </div>
                          <h3 className="text-white font-semibold text-base mb-2">{item.title}</h3>
                          <p className="text-gray-400 text-sm">{item.description}</p>
                        </div>
                      </GlareHover>
                    </motion.div>
                  );
                })}
              </motion.div>
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

        <div className="relative z-10 px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24">
          <div className="max-w-7xl mx-auto">
            {/* Header Section */}
            <div className="mb-12 sm:mb-16 md:mb-20">
              <div className="flex flex-col lg:flex-row items-start lg:items-end gap-8 sm:gap-10 lg:gap-12">
                <div className="lg:w-2/3">
                  <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                    <div className="w-12 sm:w-16 md:w-20 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"></div>
                    <span className="text-orange-400 font-medium text-xs sm:text-sm uppercase tracking-wider">Technology Stack</span>
                  </div>

                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 sm:mb-8">
                    Our <span className="text-orange-500">Technologies</span>
                  </h1>
                </div>

                <div className="lg:w-1/3">
                  <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
                    Our technology stack combines the power of AI, machine learning, and generative AI with the
                    scalability of big data and cloud platforms.
                  </p>
                </div>
              </div>
            </div>

            {/* Technology Grid - Show 4 initially */}
            <div className="space-y-6 sm:space-y-8">
              <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
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

            {/* Technology Logos Grid */}
            <div className="mt-24">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Technologies <span className="text-orange-500">We Use</span>
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Our comprehensive technology stack powers enterprise-grade solutions
                </p>
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 md:gap-8">
                {[
                  { name: 'React', logo: 'https://cdn.simpleicons.org/react/61DAFB' },
                  { name: 'Python', logo: 'https://cdn.simpleicons.org/python/3776AB' },
                  { name: 'TensorFlow', logo: 'https://cdn.simpleicons.org/tensorflow/FF6F00' },
                  { name: 'PyTorch', logo: 'https://cdn.simpleicons.org/pytorch/EE4C2C' },
                  { name: 'AWS', logo: 'https://static.cdnlogo.com/logos/a/88/amazon-web-services.svg' },
                  { name: 'Azure', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg' },
                  { name: 'GCP', logo: 'https://cdn.simpleicons.org/googlecloud/4285F4' },
                  { name: 'Docker', logo: 'https://cdn.simpleicons.org/docker/2496ED' },
                  { name: 'Kubernetes', logo: 'https://cdn.simpleicons.org/kubernetes/326CE5' },
                  { name: 'Node.js', logo: 'https://cdn.simpleicons.org/nodedotjs/339933' },
                  { name: 'MongoDB', logo: 'https://cdn.simpleicons.org/mongodb/47A248' },
                  { name: 'PostgreSQL', logo: 'https://cdn.simpleicons.org/postgresql/4169E1' },
                  { name: 'Redis', logo: 'https://cdn.simpleicons.org/redis/DC382D' },
                  { name: 'Kafka', logo: 'https://cdn.simpleicons.org/apachekafka/231F20' },
                  { name: 'Spark', logo: 'https://cdn.simpleicons.org/apachespark/E25A1C' },
                  { name: 'Hadoop', logo: 'https://cdn.simpleicons.org/apachehadoop/66CCFF' },
                  { name: 'Snowflake', logo: 'https://cdn.simpleicons.org/snowflake/29B5E8' },
                  { name: 'Databricks', logo: 'https://cdn.simpleicons.org/databricks/FF3621' },
                  { name: 'Next.js', logo: 'https://cdn.simpleicons.org/nextdotjs/000000' },
                  { name: 'TypeScript', logo: 'https://cdn.simpleicons.org/typescript/3178C6' },
                  { name: 'GraphQL', logo: 'https://cdn.simpleicons.org/graphql/E10098' },
                  { name: 'FastAPI', logo: 'https://cdn.simpleicons.org/fastapi/009688' },
                  { name: 'Flutter', logo: 'https://cdn.simpleicons.org/flutter/02569B' },
                  { name: 'OpenAI', logo: 'https://cdn.simpleicons.org/openai/412991' },
                  { name: 'Terraform', logo: 'https://cdn.simpleicons.org/terraform/7B42BC' },
                  { name: 'Jenkins', logo: 'https://cdn.simpleicons.org/jenkins/D24939' },
                  { name: 'GitHub', logo: 'https://cdn.simpleicons.org/github/181717' },
                  { name: 'GitLab', logo: 'https://cdn.simpleicons.org/gitlab/FC6D26' },
                  { name: 'Figma', logo: 'https://cdn.simpleicons.org/figma/F24E1E' },
                  { name: 'Tableau', logo: 'https://cdn.simpleicons.org/tableau/E97627' },
                  { name: 'Salesforce', logo: 'https://cdn.simpleicons.org/salesforce/00A1E0' },
                  { name: 'SAP', logo: 'https://cdn.simpleicons.org/sap/0FAAFF' }
                ].map((tech, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center gap-3 p-4 rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-800 hover:border-orange-500/30 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-all duration-300">
                      <img
                        src={tech.logo}
                        alt={tech.name}
                        className="w-full h-full object-contain filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    </div>
                    <span className="text-xs sm:text-sm text-gray-400 group-hover:text-white transition-colors duration-300 text-center font-medium">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Read More Button */}
            <div className="text-center mt-12 sm:mt-16">
              <button
                onClick={() => toggleSection('technology')}
                className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors duration-200 px-4 py-2 rounded-lg hover:bg-orange-500/10"
              >
                {expandedSections.technology ? (
                  <>
                    <span className="text-sm sm:text-base font-medium">Show Less</span>
                    <ChevronUp size={18} className="sm:w-5 sm:h-5" />
                  </>
                ) : (
                  <>
                    <span className="text-sm sm:text-base font-medium">Read More</span>
                    <ChevronDown size={18} className="sm:w-5 sm:h-5" />
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
