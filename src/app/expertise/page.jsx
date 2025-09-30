const OurExpertise = () => {
  const expertiseData = [
    {
      id: "01",
      title: "Enterprise Application Development",
      subtitle: "Scalable Solutions",
      description: "Design and build scalable enterprise-grade applications with seamless integration to ERP, CRM, and legacy systems.",
      features: [
        "Scalable enterprise-grade applications",
        "ERP, CRM, and legacy system integration", 
        "Performance, security, and regulatory compliance",
        "Custom workflow automation"
      ],
      color: "orange",
      icon: "💼"
    },
    {
      id: "02", 
      title: "SaaS & Cloud-Native Platforms",
      subtitle: "Modern Infrastructure",
      description: "End-to-end SaaS product design with multi-tenant architectures and elastic scaling capabilities.",
      features: [
        "End-to-end SaaS product design and deployment",
        "Multi-tenant architectures with elastic scaling",
        "Cloud-native development on AWS, Azure, and GCP",
        "Microservices architecture implementation"
      ],
      color: "slate",
      icon: "☁️"
    },
    {
      id: "03",
      title: "AI & ML Engineering", 
      subtitle: "Intelligent Automation",
      description: "Custom ML models for prediction, classification, and automation with generative AI integrations.",
      features: [
        "Custom ML models for prediction and classification",
        "Generative AI integrations for content and chat",
        "Deployment pipeline for continuous improvement",
        "Automated decision-making systems"
      ],
      color: "orange",
      icon: "🤖"
    },
    {
      id: "04",
      title: "Data Engineering & Analytics",
      subtitle: "Insights & Intelligence", 
      description: "Big data pipelines with real-time analytics and comprehensive data visualization solutions.",
      features: [
        "Big data pipelines (Hadoop, Databricks, Snowflake)",
        "Real-time analytics and data visualization",
        "Data integration from siloed enterprise systems",
        "Advanced reporting and business intelligence"
      ],
      color: "slate",
      icon: "📊"
    },
    {
      id: "05",
      title: "Mobile & Cross-Platform Solutions",
      subtitle: "Native Excellence",
      description: "Native Android/iOS development with secure frameworks and cross-platform capabilities.",
      features: [
        "Native Android/iOS development with secure frameworks",
        "Cross-platform apps with React Native / Flutter",
        "Mobile-first enterprise workflows with offline capability",
        "Enterprise app distribution and management"
      ],
      color: "orange", 
      icon: "📱"
    },
    {
      id: "06",
      title: "API Development & System Integration",
      subtitle: "Seamless Connectivity",
      description: "Secure REST, GraphQL, and gRPC APIs with comprehensive third-party service integration.",
      features: [
        "Secure REST, GraphQL, and gRPC APIs",
        "Third-party service integration (payments, identity, messaging)",
        "Microservices architecture for modularity and scalability",
        "API gateway and rate limiting solutions"
      ],
      color: "slate",
      icon: "🔗"
    },
    {
      id: "07", 
      title: "UX/UI Engineering",
      subtitle: "Human-Centered Design",
      description: "Human-centered design for intuitive digital experiences with accessibility-driven development.",
      features: [
        "Human-centered design for intuitive digital experiences",
        "Wireframes, prototypes, and design systems aligned with brand",
        "Accessibility-driven development (WCAG compliance)",
        "User research and usability testing"
      ],
      color: "orange",
      icon: "🎨"
    },
    {
      id: "08",
      title: "Quality Assurance & DevOps",
      subtitle: "Reliable Delivery",
      description: "Automated testing frameworks with continuous integration and proactive monitoring systems.",
      features: [
        "Automated testing frameworks for speed and reliability",
        "Continuous Integration / Continuous Deployment pipelines",
        "Proactive monitoring, logging, and incident response",
        "Infrastructure as Code and container orchestration"
      ],
      color: "slate",
      icon: "⚡"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Enterprise Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-full bg-gradient-to-l from-orange-500/15 via-orange-600/8 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-orange-500/10 to-transparent rounded-full blur-3xl"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" 
             style={{backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '50px 50px'}}>
        </div>
        
        {/* Floating geometric elements */}
        <div className="absolute top-32 left-1/4 w-3 h-24 bg-orange-500/20 transform rotate-12"></div>
        <div className="absolute top-1/3 right-1/3 w-16 h-3 bg-orange-500/30"></div>
        <div className="absolute bottom-1/4 right-1/4 w-8 h-8 border border-orange-500/40 rotate-45"></div>
      </div>

      <div className="relative z-10 px-8 py-24">
        <div className="max-w-8xl mx-auto">
          
          {/* Enterprise Header Section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500/10 to-orange-600/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-orange-500/20">
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
              <span className="text-orange-400 font-medium text-sm uppercase tracking-wider">Enterprise Solutions</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Our <span className="text-orange-500">Expertise</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
              From mobile-first applications to secure APIs and intuitive UX/UI, we deliver digital experiences 
              that engage and perform. With robust QA and DevOps practices, we guarantee reliability, agility, 
              and continuous innovation across every software product we develop.
            </p>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>SOC 2 Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>ISO 27001 Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>GDPR Ready</span>
              </div>
            </div>
          </div>

          {/* Enterprise Expertise Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
            {expertiseData.map((item, index) => (
              <div key={item.id} 
                   className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 hover:border-orange-500/30 transition-all duration-300 hover:transform hover:scale-105">
                
                {/* Card Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold transition-all duration-300 group-hover:scale-110 ${
                    item.color === 'orange' 
                      ? 'bg-gradient-to-br from-orange-500 to-orange-600 text-white' 
                      : 'bg-gradient-to-br from-gray-600 to-gray-700 text-white'
                  }`}>
                    {item.id}
                  </div>
                  <div className="text-3xl opacity-60 group-hover:opacity-100 transition-opacity">
                    {item.icon}
                  </div>
                </div>

                {/* Card Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className={`text-xl font-bold mb-2 transition-colors ${
                      item.color === 'orange' ? 'group-hover:text-orange-400' : 'group-hover:text-gray-300'
                    }`}>
                      {item.title}
                    </h3>
                    <p className="text-sm text-orange-400 font-medium uppercase tracking-wider">
                      {item.subtitle}
                    </p>
                  </div>
                  
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {item.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {item.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-400">
                        <div className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${
                          item.color === 'orange' ? 'bg-orange-500' : 'bg-gray-500'
                        }`}></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Footer */}
                <div className={`absolute bottom-4 left-8 right-8 h-1 rounded-full transition-all duration-300 ${
                  item.color === 'orange' 
                    ? 'bg-gradient-to-r from-orange-500 to-orange-600' 
                    : 'bg-gradient-to-r from-gray-500 to-gray-600'
                }`}></div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
              </div>
            ))}
          </div>

          {/* Enterprise CTA Section */}
          <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/60 backdrop-blur-sm rounded-3xl p-12 border border-gray-700/50 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your <span className="text-orange-500">Enterprise?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our comprehensive expertise can accelerate your digital transformation 
              and drive measurable business outcomes.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-200 hover:transform hover:scale-105 shadow-lg hover:shadow-orange-500/25">
                Schedule Enterprise Demo
              </button>
              <button className="border border-gray-600 hover:border-orange-500 text-white hover:text-orange-400 px-8 py-4 rounded-2xl font-medium text-lg transition-all duration-200">
                Download Case Studies
              </button>
            </div>
            
            {/* Enterprise Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-700/50">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">500+</div>
                <div className="text-gray-400 text-sm uppercase tracking-wider">Enterprise Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">99.9%</div>
                <div className="text-gray-400 text-sm uppercase tracking-wider">Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">24/7</div>
                <div className="text-gray-400 text-sm uppercase tracking-wider">Enterprise Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurExpertise;
