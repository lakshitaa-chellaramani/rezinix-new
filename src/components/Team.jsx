"use client";

import { motion } from "framer-motion";
import {
  AlertTriangle,
  Award,
  Briefcase,
  GraduationCap,
  MapPin,
  Users,
  Globe,
  Building,
  Star,
  ArrowRight,
  LinkedinIcon,
  ExternalLink,
} from "lucide-react";

const Team = () => {
  const leaders = [
    {
      name: "Sachin Jain",
      title: "Director",
      image: "/api/placeholder/300/400", // Replace with actual image path
      location: "Boston, MA / Mumbai, India",
      experience: "15+ years",
      specialties: ["Business Scaling", "AI Infrastructure", "Climate Tech", "Private Equity"],
      bio: {
        intro: "Sachin Jain is a senior global executive with a proven track record in scaling businesses for infrastructure and private equity funds, managing over $600 million in assets across India and Asia.",
        focus: "He is passionate about leveraging AI and exponential technologies to transform climate infrastructure, EPC, manufacturing, and industrial sectors, with a focus on operational efficiency, automation, and intelligent systems.",
        leadership: "In his previous role as CEO – India & Southeast Asia and Board Member, Sachin led business expansion across seven countries, while managing a team of over 200 professionals.",
        experience: "He has held technology and management leadership roles at BCG, KPMG, Cognizant, Epic Systems Inc., EDS (now HP), and Cleantech Renewable Assets Pte. (backed by Shell and Keppel, a Temasek-backed entity), among others.",
        speaking: "A frequent speaker at prominent forums, Sachin has shared insights at the Bombay Chambers Sustainability Conclave, HSBC Asia Energy Transition Series, Chintan Shivir Roundtable, IIT Madras Geological Track Jury, EY Energy Transition CEO Roundtable, and ET EnergyWorld Roundtable.",
        education: "He holds an MBA from the University of Cambridge (UK) as a Tata Scholar, an MS in Industrial Systems Engineering from Ohio University (USA), and a BE in Engineering from KJSCE, University of Mumbai (India)."
      },
      achievements: [
        "$600M+ Assets Managed",
        "7 Countries Expansion", 
        "200+ Team Members Led",
        "Cambridge MBA (Tata Scholar)"
      ],
      color: "from-red-600 to-orange-600"
    },
    {
      name: "Nitin Sawant",
      title: "Senior Technology Advisor",
      image: "/api/placeholder/300/400", // Replace with actual image path
      location: "Global / Remote",
      experience: "25+ years",
      specialties: ["Enterprise Architecture", "Cloud Strategy", "Digital Transformation", "AI/ML Integration"],
      bio: {
        intro: "Nitin Sawant is a senior technology executive with over 25 years of leadership experience in enterprise architecture, cloud strategy, and digital transformation.",
        consulting: "He has worked as Partner and Managing Director with global firms such as EY, IBM, Deloitte and Accenture.",
        current: "As the Enterprise Architecture and Cloud Leader for the Data & Analytics business at LSEG, he drives AI-powered decision-making, cloud modernization, and scalable architecture across global financial markets.",
        expertise: "Nitin plays a key role in integrating AI and machine learning (ML) to enhance trading, risk management, and compliance, while leading fintech innovation through advanced technology adoption.",
        advisory: "He is a trusted advisor to CXOs, aligning technology strategies with business goals, and brings deep expertise in M&A, cloud migration, big data, DevOps, and IT strategy, with industry experience spanning banking, telecom, and retail."
      },
      achievements: [
        "25+ Years Experience",
        "Global Firms Leadership",
        "CXO Trusted Advisor",
        "AI/ML Integration Expert"
      ],
      color: "from-blue-600 to-purple-600"
    }
  ];

  // Leader Card Component
  const LeaderCard = ({ leader, index }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: index * 0.2 }}
        viewport={{ once: true }}
        className="group relative"
      >
        <div className="bg-white/90 border border-red-500/20 p-8 relative overflow-hidden group-hover:border-red-500/40 transition-all duration-500 shadow-xl hover:shadow-2xl">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-cyber-dots" />
          </div>

          <div className="relative z-10">
            {/* Leader Header */}
            <div className="flex flex-col lg:flex-row gap-8 mb-8">
              {/* Photo Section */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className={`w-48 h-64 bg-gradient-to-br ${leader.color} p-1 relative group-hover:scale-105 transition-transform duration-300`}>
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                    {/* Corner brackets */}
                    <div className="absolute -top-2 -left-2 w-6 h-6 border-l-2 border-t-2 border-white" />
                    <div className="absolute -top-2 -right-2 w-6 h-6 border-r-2 border-t-2 border-white" />
                    <div className="absolute -bottom-2 -left-2 w-6 h-6 border-l-2 border-b-2 border-white" />
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 border-r-2 border-b-2 border-white" />
                  </div>
                </div>
              </div>

              {/* Info Section */}
              <div className="flex-grow space-y-4">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 group-hover:text-red-600 transition-colors font-mono mb-2">
                    {leader.name}
                  </h3>
                  <div className={`inline-block bg-gradient-to-r ${leader.color} text-white px-4 py-2 font-mono text-sm font-bold tracking-wider`}>
                    {leader.title}
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center text-gray-600 font-mono text-sm">
                    <MapPin className="h-4 w-4 mr-2 text-red-500" />
                    <span>{leader.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600 font-mono text-sm">
                    <Briefcase className="h-4 w-4 mr-2 text-red-500" />
                    <span>{leader.experience}</span>
                  </div>
                </div>

                {/* Specialties */}
                <div>
                  <div className="text-gray-900 font-mono text-sm font-bold mb-2">EXPERTISE:</div>
                  <div className="flex flex-wrap gap-2">
                    {leader.specialties.map((specialty, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-100 text-gray-700 px-3 py-1 text-xs font-mono tracking-wider border border-gray-200"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Achievements */}
                <div>
                  <div className="text-gray-900 font-mono text-sm font-bold mb-2">KEY ACHIEVEMENTS:</div>
                  <div className="grid grid-cols-2 gap-2">
                    {leader.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-center text-gray-600 font-mono text-xs">
                        <Star className="h-3 w-3 text-orange-500 mr-2 flex-shrink-0" />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Biography */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-gray-900 font-mono">BIOGRAPHY</h4>
              <div className="space-y-4 text-gray-700 font-mono text-sm leading-relaxed">
                {Object.values(leader.bio).map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Contact Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button className="group bg-gradient-to-r from-red-600 to-orange-600 text-white px-6 py-3 font-mono font-bold text-sm tracking-wider flex items-center justify-center space-x-2 border border-red-500/50 relative overflow-hidden hover:shadow-lg flex-1">
                <span className="relative z-10">CONNECT</span>
                <LinkedinIcon className="h-4 w-4 group-hover:scale-110 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 transform skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              </button>

              <button className="group text-gray-900 border border-gray-400 px-6 py-3 font-mono font-bold text-sm tracking-wider hover:border-red-400 hover:text-red-400 transition-all duration-300 relative bg-white hover:shadow-lg flex items-center justify-center space-x-2 flex-1">
                <span>VIEW PROFILE</span>
                <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300" />
              </button>
            </div>
          </div>

          {/* Scanning line effect */}
          <motion.div
            className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent"
            animate={{
              y: [0, 600, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 5,
              delay: index * 1,
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
      {/* Scanning Lines */}
      <div className="absolute inset-0">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-20"
            style={{ top: `${25 + i * 20}%` }}
            animate={{
              x: ["-100%", "100%"],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: 8,
              delay: i * 1.5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          

          <h2 className="text-4xl lg:text-6xl font-bold mb-6 font-mono">
            <span className="text-gray-900">LEADERSHIP</span>
            <br />
            <span className="text-red-500">TEAM</span>
          </h2>

          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-mono">
            Meet the visionary leaders driving Rezinix's mission to transform businesses 
            through cutting-edge artificial intelligence solutions.
          </p>
        </motion.div>

        {/* Leadership Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16"
        >
          {[
            { number: "40+", label: "Combined Years", icon: Award },
            { number: "800M+", label: "Assets Managed", icon: Building },
            { number: "20+", label: "Global Markets", icon: Globe },
            { number: "500+", label: "Teams Led", icon: Users },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/80 border border-red-500/20 p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <stat.icon className="h-8 w-8 text-red-500 mx-auto mb-4" />
              <div className="text-2xl font-bold text-gray-900 font-mono mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-mono text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Leaders Grid */}
        <div className="space-y-12">
          {leaders.map((leader, index) => (
            <LeaderCard key={index} leader={leader} index={index} />
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gray-50/80 border border-red-500/20 p-8 max-w-4xl mx-auto backdrop-blur-sm shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-mono">
              Want to Connect with Our Leadership?
            </h3>
            <p className="text-gray-700 mb-6 font-mono text-sm">
              Our leadership team is committed to driving innovation and excellence. 
              Reach out to discuss partnerships, investments, or strategic collaborations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 font-mono font-bold text-sm tracking-wider relative overflow-hidden border border-red-500/50 hover:shadow-lg">
                <span className="relative z-10 flex items-center space-x-2">
                  <span>SCHEDULE EXECUTIVE MEETING</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 transform skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              </button>

              <button className="group text-gray-900 border border-gray-400 px-8 py-4 font-mono font-bold text-sm tracking-wider hover:border-red-400 hover:text-red-400 transition-all duration-300 relative bg-white hover:shadow-lg">
                <span>VIEW COMPANY OVERVIEW</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300" />
              </button>
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

export default Team;
