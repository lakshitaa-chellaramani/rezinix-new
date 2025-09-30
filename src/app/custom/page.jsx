const CustomizedServices = () => {
  const services = [
    {
      id: 1,
      title: "AI & Data Consulting",
      subtitle: "Strategic Intelligence",
      description: "Strategic advisory for AI adoption and scaling. Data governance, readiness, and maturity assessments. Tailored roadmaps for measurable business outcomes.",
      features: [
        "AI readiness and maturity assessments",
        "Data governance framework implementation", 
        "Custom AI strategy and roadmap development",
        "ROI-driven transformation planning"
      ],
      icon: "🧠",
      color: "orange"
    },
    {
      id: 2,
      title: "Cloud & Enterprise Transformation",
      subtitle: "Modern Infrastructure",
      description: "Cloud migration, modernization, and integration. Enterprise software customization (ERP, CRM, HRMS). Secure, compliant architectures built for scale.",
      features: [
        "Multi-cloud migration and modernization",
        "Enterprise software customization",
        "Legacy system integration and transformation", 
        "Compliance and security architecture"
      ],
      icon: "☁️",
      color: "slate"
    },
    {
      id: 3,
      title: "UX/UI & Product Innovation",
      subtitle: "Human-Centered Design",
      description: "Human-centered product design and prototyping. Intuitive user experiences aligned with brand identity. Design thinking workshops for enterprise innovation.",
      features: [
        "User research and experience design",
        "Rapid prototyping and design systems",
        "Brand-aligned interface development",
        "Innovation workshops and design sprints"
      ],
      icon: "🎨", 
      color: "orange"
    },
    {
      id: 4,
      title: "Quality Assurance & Code Audit",
      subtitle: "Reliable Delivery",
      description: "Comprehensive manual and automated testing. Security, performance, and compliance audits. Continuous monitoring to ensure long-term reliability.",
      features: [
        "Automated testing framework implementation",
        "Security and performance auditing", 
        "Code quality and compliance assessment",
        "Continuous monitoring and optimization"
      ],
      icon: "🔍",
      color: "slate"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      
      {/* Modern Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-full bg-gradient-to-l from-orange-500/15 via-orange-600/8 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-orange-500/10 to-transparent rounded-full blur-3xl"></div>
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" 
             style={{
               backgroundImage: `linear-gradient(rgba(249, 115, 22, 0.1) 1px, transparent 1px), 
                                linear-gradient(90deg, rgba(249, 115, 22, 0.1) 1px, transparent 1px)`,
               backgroundSize: '50px 50px'
             }}>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-orange-500/30 rounded-full animate-bounce"></div>
        <div className="absolute top-2/3 right-1/3 w-2 h-16 bg-orange-500/20 transform rotate-45"></div>
        <div className="absolute bottom-1/4 left-1/2 w-8 h-8 border border-orange-500/40 rotate-45 animate-pulse"></div>
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
            
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              At Rezinx, our customized services span from AI & data consulting to cloud transformation, 
              ensuring enterprises adopt intelligent, future-ready systems. With our expertise in UX/UI 
              innovation and rigorous QA & code audits, we deliver solutions that are not only powerful 
              and scalable but also intuitive, secure, and reliable.
            </p>
            
            {/* Service Connection Visualization */}
            <div className="flex justify-center items-center gap-2 mb-8">
              <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
              <div className="w-12 h-0.5 bg-gradient-to-r from-orange-500 to-slate-500"></div>
              <div className="w-3 h-3 bg-slate-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
              <div className="w-12 h-0.5 bg-gradient-to-r from-slate-500 to-orange-500"></div>
              <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/60 backdrop-blur-sm rounded-3xl p-12 border border-gray-700/50 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to <span className="text-orange-500">Customize</span> Your Solution?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Let's design a service package that perfectly aligns with your business objectives and technical requirements.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:transform hover:scale-105 shadow-lg hover:shadow-orange-500/25">
                Schedule Consultation
              </button>
              <button className="border-2 border-gray-600 hover:border-orange-500 text-white hover:text-orange-400 px-10 py-4 rounded-full font-medium text-lg transition-all duration-300">
                View Case Studies
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-8 border-t border-gray-700/50">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">250+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Custom Solutions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">98%</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">24/7</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">150+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Enterprise Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Service Card Component
const ServiceCard = ({ service, index }) => {
  const isOrange = service.color === 'orange';
  
  return (
    <div className="group relative h-full">
      
      {/* Main Card */}
      <div className={`h-full bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 transition-all duration-300 hover:border-orange-500/30 hover:transform hover:scale-105 relative overflow-hidden`}>
        
        {/* Hover Glow Effect */}
        <div className={`absolute inset-0 bg-gradient-to-br ${
          isOrange ? 'from-orange-500/5 to-transparent' : 'from-slate-500/5 to-transparent'
        } opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl`}></div>
        
        {/* Card Header */}
        <div className="flex items-start justify-between mb-6 relative z-10">
          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 ${
            isOrange 
              ? 'bg-gradient-to-br from-orange-500 to-orange-600' 
              : 'bg-gradient-to-br from-slate-600 to-slate-700'
          }`}>
            {service.icon}
          </div>
          
          <div className={`text-xs font-bold px-3 py-1 rounded-full border ${
            isOrange 
              ? 'text-orange-400 border-orange-500/30 bg-orange-500/10' 
              : 'text-slate-400 border-slate-500/30 bg-slate-500/10'
          }`}>
            {String(index + 1).padStart(2, '0')}
          </div>
        </div>

        {/* Card Content */}
        <div className="space-y-4 relative z-10">
          <div>
            <h3 className={`text-2xl font-bold mb-2 transition-colors duration-300 ${
              isOrange ? 'group-hover:text-orange-400' : 'group-hover:text-slate-300'
            }`}>
              {service.title}
            </h3>
            <p className="text-orange-400 font-medium text-sm uppercase tracking-wider mb-4">
              {service.subtitle}
            </p>
          </div>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            {service.description}
          </p>
          
          {/* Features List */}
          <ul className="space-y-3">
            {service.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 transition-all duration-300 ${
                  isOrange ? 'bg-orange-500 group-hover:bg-orange-400' : 'bg-slate-500 group-hover:bg-slate-400'
                }`}></div>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Card Footer Accent */}
        <div className={`absolute bottom-4 left-8 right-8 h-1 rounded-full transition-all duration-300 ${
          isOrange 
            ? 'bg-gradient-to-r from-orange-500 to-orange-600' 
            : 'bg-gradient-to-r from-slate-500 to-slate-600'
        }`}></div>
        
        {/* Connection Lines */}
        <div className="absolute top-8 right-8 w-8 h-8 opacity-20 group-hover:opacity-60 transition-opacity duration-300">
          <div className={`absolute top-2 left-0 w-full h-0.5 ${isOrange ? 'bg-orange-500' : 'bg-slate-500'}`}></div>
          <div className={`absolute top-4 left-2 w-4 h-0.5 ${isOrange ? 'bg-orange-500' : 'bg-slate-500'}`}></div>
          <div className={`absolute top-6 left-0 w-full h-0.5 ${isOrange ? 'bg-orange-500' : 'bg-slate-500'}`}></div>
        </div>
      </div>
    </div>
  );
};

export default CustomizedServices;
