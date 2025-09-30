const OurTechnologies = () => {
  const techStackData = [
    {
      title: "Artificial Intelligence & Agentic AI",
      description: "Intelligent systems with reasoning, synthesis, and decision-making. Agent-based AI workflows for enterprises.",
      details: [
        "Advanced neural networks and deep learning",
        "Computer vision and natural language processing", 
        "Autonomous AI agents and decision systems",
        "Enterprise AI workflow automation"
      ],
      icon: "🧠",
      color: "orange",
      bgPattern: "from-orange-500/10 to-orange-600/5"
    },
    {
      title: "Machine Learning & Predictive Models", 
      description: "Advanced algorithms for classification, forecasting, and automation. Natural language processing and computer vision.",
      details: [
        "Supervised and unsupervised learning models",
        "Time series forecasting and trend analysis",
        "Computer vision and image recognition",
        "NLP for sentiment and text analysis"
      ],
      icon: "⚙️",
      color: "slate", 
      bgPattern: "from-slate-600/10 to-slate-700/5"
    },
    {
      title: "Generative AI",
      description: "Large Language Models (LLMs) for co-pilots and automation. Creative AI for content, reports, and conversational interfaces.",
      details: [
        "GPT and transformer-based architectures",
        "Custom fine-tuned models for enterprise",
        "AI-powered content generation and automation",
        "Conversational AI and intelligent chatbots"
      ],
      icon: "✨",
      color: "orange",
      bgPattern: "from-orange-500/10 to-orange-600/5"
    },
    {
      title: "Big Data & Data Engineering",
      description: "Scalable data pipelines with Hadoop, Spark, Databricks, Snowflake. Real-time streaming, integration, and governance.",
      details: [
        "Distributed computing with Hadoop and Spark",
        "Modern data warehouses (Snowflake, BigQuery)",
        "Real-time stream processing and ETL pipelines", 
        "Data governance and quality frameworks"
      ],
      icon: "📊",
      color: "slate",
      bgPattern: "from-slate-600/10 to-slate-700/5"
    },
    {
      title: "Cloud Platforms & Migration",
      description: "Expertise in AWS, Azure, GCP, and hybrid architectures. Cloud-native applications and enterprise modernization.",
      details: [
        "Multi-cloud and hybrid cloud strategies",
        "Containerization with Docker and Kubernetes",
        "Serverless architectures and microservices",
        "Legacy system migration and modernization"
      ],
      icon: "☁️",
      color: "orange",
      bgPattern: "from-orange-500/10 to-orange-600/5"
    },
    {
      title: "Data Analytics & Visualization",
      description: "Power BI, Tableau, Azure Fabric for actionable insights. Dynamic dashboards, reporting, and trend forecasting.",
      details: [
        "Interactive dashboards and real-time analytics",
        "Business intelligence and data visualization",
        "Predictive analytics and forecasting models",
        "Self-service analytics platforms"
      ],
      icon: "📈",
      color: "slate",
      bgPattern: "from-slate-600/10 to-slate-700/5"
    },
    {
      title: "Enterprise Systems & Integrations",
      description: "Microsoft Dynamics, SAP, Salesforce, custom ERP/CRM. Seamless API and microservices-based architectures.",
      details: [
        "ERP/CRM system integration and customization",
        "RESTful APIs and GraphQL implementations",
        "Enterprise service bus and middleware",
        "Legacy system integration and data sync"
      ],
      icon: "🔗",
      color: "orange",
      bgPattern: "from-orange-500/10 to-orange-600/5"
    },
    {
      title: "DevOps, Security & Compliance",
      description: "CI/CD pipelines for agility and faster time-to-market. Role-based access control, encryption, and compliance frameworks.",
      details: [
        "Automated CI/CD with GitLab, Jenkins, GitHub Actions",
        "Infrastructure as Code (Terraform, CloudFormation)",
        "Security scanning and vulnerability management",
        "Compliance frameworks (SOC2, GDPR, HIPAA)"
      ],
      icon: "🛡️",
      color: "slate",
      bgPattern: "from-slate-600/10 to-slate-700/5"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Flowing Background Design */}
      <div className="absolute inset-0">
        {/* Main flowing wave */}
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
        
        {/* Secondary wave */}
        <div className="absolute top-20 right-0 w-3/4 h-full">
          <svg viewBox="0 0 900 600" className="w-full h-full opacity-5">
            <path d="M0,200 Q225,50 450,150 T900,100 L900,600 L0,600 Z" fill="#f97316"/>
          </svg>
        </div>

        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-orange-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-orange-500/30 rounded-full animate-bounce"></div>
      </div>

      <div className="relative z-10 px-8 py-24">
        <div className="max-w-7xl mx-auto">
          
          {/* Flowing Header Section */}
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
                  scalability of big data and cloud platforms. By integrating analytics, enterprise systems, 
                  and DevOps security practices, organizations can confidently operate with intelligence, speed, and resilience.
                </p>
              </div>
            </div>
          </div>

          {/* Flowing Technology Grid */}
          <div className="space-y-8">
            {/* Row 1 - Flowing Left to Right */}
            <div className="flex flex-col lg:flex-row gap-8 lg:ml-0">
              {techStackData.slice(0, 2).map((tech, index) => (
                <TechCard key={index} tech={tech} index={index} direction="right" />
              ))}
            </div>

            {/* Row 2 - Flowing Right to Left */}
            <div className="flex flex-col lg:flex-row gap-8 lg:ml-16">
              {techStackData.slice(2, 4).map((tech, index) => (
                <TechCard key={index + 2} tech={tech} index={index + 2} direction="left" />
              ))}
            </div>

            {/* Row 3 - Flowing Left to Right */}
            <div className="flex flex-col lg:flex-row gap-8 lg:ml-8">
              {techStackData.slice(4, 6).map((tech, index) => (
                <TechCard key={index + 4} tech={tech} index={index + 4} direction="right" />
              ))}
            </div>

            {/* Row 4 - Flowing Right to Left */}
            <div className="flex flex-col lg:flex-row gap-8 lg:ml-24">
              {techStackData.slice(6, 8).map((tech, index) => (
                <TechCard key={index + 6} tech={tech} index={index + 6} direction="left" />
              ))}
            </div>
          </div>

          {/* Flowing CTA Section */}
          <div className="mt-24 relative">
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm rounded-[3rem] p-12 border border-gray-700/50 overflow-hidden">
              
              {/* Flowing background accent */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-orange-500/10 to-transparent rounded-full blur-3xl"></div>
              
              <div className="relative z-10 text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Ready to <span className="text-orange-500">Modernize</span> Your Tech Stack?
                </h2>
                <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
                  Let's architect a technology solution that scales with your business and drives innovation across your organization.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:transform hover:scale-105 shadow-lg hover:shadow-orange-500/25">
                    Explore Technology Solutions
                  </button>
                  <button className="border border-gray-600 hover:border-orange-500 text-white hover:text-orange-400 px-10 py-4 rounded-full font-medium text-lg transition-all duration-300">
                    View Architecture Diagrams
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Flowing Tech Card Component
const TechCard = ({ tech, index, direction }) => {
  const isOrange = tech.color === 'orange';
  
  return (
    <div className={`group relative flex-1 transition-all duration-500 hover:transform hover:scale-105 ${
      direction === 'left' ? 'lg:hover:-translate-x-4' : 'lg:hover:translate-x-4'
    }`}>
      
      {/* Flowing card container */}
      <div className={`relative bg-gradient-to-br ${tech.bgPattern} backdrop-blur-sm rounded-[2.5rem] p-8 border border-gray-700/50 hover:border-orange-500/30 transition-all duration-300 overflow-hidden`}>
        
        {/* Flowing accent line */}
        <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${
          isOrange ? 'from-orange-500 to-orange-600' : 'from-slate-500 to-slate-600'
        } transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
        
        {/* Tech icon with flowing animation */}
        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 text-2xl transition-all duration-300 group-hover:rotate-12 ${
          isOrange ? 'bg-gradient-to-br from-orange-500 to-orange-600' : 'bg-gradient-to-br from-slate-600 to-slate-700'
        }`}>
          {tech.icon}
        </div>
        
        {/* Content */}
        <h3 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
          isOrange ? 'group-hover:text-orange-400' : 'group-hover:text-slate-300'
        }`}>
          {tech.title}
        </h3>
        
        <p className="text-gray-300 mb-6 leading-relaxed">
          {tech.description}
        </p>
        
        {/* Flowing details list */}
        <ul className="space-y-3">
          {tech.details.map((detail, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
              <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 transition-all duration-300 ${
                isOrange ? 'bg-orange-500 group-hover:bg-orange-400' : 'bg-slate-500 group-hover:bg-slate-400'
              }`}></div>
              <span>{detail}</span>
            </li>
          ))}
        </ul>
        
        {/* Flowing hover effect */}
        <div className={`absolute -bottom-2 -right-2 w-24 h-24 rounded-full blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-30 ${
          isOrange ? 'bg-orange-500' : 'bg-slate-500'
        }`}></div>
      </div>
    </div>
  );
};

export default OurTechnologies;
