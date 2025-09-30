"use client";

import { motion } from "framer-motion";
import {
  AlertTriangle,
  Brain,
  Database,
  Cpu,
  MessageSquare,
  Settings,
  Shield,
  Users,
  MapPin,
  Clock,
  ArrowRight,
  Star,
} from "lucide-react";

const CareersSection = () => {
  const positions = [
    {
      icon: Brain,
      title: "Machine Learning Engineer",
      department: "AI Engineering",
      location: "Boston, MA / Mumbai, India",
      type: "Full-Time",
      experience: "3-5 years",
      skills: ["Python", "TensorFlow", "PyTorch", "MLOps"],
      color: "from-blue-600 to-purple-600",
    },
    {
      icon: Database,
      title: "Data Scientist",
      department: "Data & Analytics",
      location: "Boston, MA / Mumbai, India", 
      type: "Full-Time",
      experience: "2-4 years",
      skills: ["Python", "R", "SQL", "Statistics"],
      color: "from-green-600 to-teal-600",
    },
    {
      icon: Cpu,
      title: "AI Solutions Architect",
      department: "Solutions",
      location: "Boston, MA / Remote",
      type: "Full-Time",
      experience: "5-8 years",
      skills: ["System Design", "Cloud", "AI/ML", "Leadership"],
      color: "from-red-600 to-orange-600",
    },
    {
      icon: MessageSquare,
      title: "NLP Specialist",
      department: "AI Research",
      location: "Mumbai, India / Remote",
      type: "Full-Time",
      experience: "3-6 years",
      skills: ["NLP", "Transformers", "BERT", "GPT"],
      color: "from-purple-600 to-pink-600",
    },
    {
      icon: Settings,
      title: "MLOps Engineer",
      department: "Platform Engineering",
      location: "Boston, MA / Mumbai, India",
      type: "Full-Time", 
      experience: "3-5 years",
      skills: ["Docker", "Kubernetes", "CI/CD", "AWS"],
      color: "from-orange-600 to-yellow-600",
    },
    {
      icon: Shield,
      title: "AI Ethics and Policy Consultant",
      department: "AI Governance",
      location: "Boston, MA / Remote",
      type: "Full-Time",
      experience: "4-7 years",
      skills: ["AI Ethics", "Policy", "Compliance", "Research"],
      color: "from-indigo-600 to-blue-600",
    },
  ];

  // Job Card Component
  const JobCard = ({ position, index }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        viewport={{ once: true }}
        whileHover={{ y: -10, scale: 1.02 }}
        className="group relative"
      >
        <div className="bg-white/80 border border-red-500/20 p-8 relative overflow-hidden group-hover:border-red-500/40 transition-all duration-500 shadow-lg hover:shadow-xl">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-cyber-dots" />
          </div>

          {/* Content */}
          <div className="relative z-10">
            <div className="flex items-start justify-between mb-6">
              <div className={`w-16 h-16 bg-gradient-to-br ${position.color} flex items-center justify-center relative group-hover:scale-110 transition-transform duration-300`}>
                <position.icon className="h-8 w-8 text-white" />
                
                {/* Corner brackets */}
                <div className="absolute -top-1 -left-1 w-3 h-3 border-l border-t border-white/50" />
                <div className="absolute -top-1 -right-1 w-3 h-3 border-r border-t border-white/50" />
                <div className="absolute -bottom-1 -left-1 w-3 h-3 border-l border-b border-white/50" />
                <div className="absolute -bottom-1 -right-1 w-3 h-3 border-r border-b border-white/50" />
              </div>

              <div className="text-right">
                <span className="inline-block bg-green-100 text-green-800 px-3 py-1 text-xs     font-bold tracking-wider">
                  {position.type}
                </span>
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors     tracking-wider">
              {position.title}
            </h3>

            <div className="space-y-3 mb-6">
              <div className="flex items-center text-gray-600     text-sm">
                <Users className="h-4 w-4 mr-2 text-red-500" />
                <span>{position.department}</span>
              </div>
              
              <div className="flex items-center text-gray-600     text-sm">
                <MapPin className="h-4 w-4 mr-2 text-red-500" />
                <span>{position.location}</span>
              </div>
              
              <div className="flex items-center text-gray-600     text-sm">
                <Clock className="h-4 w-4 mr-2 text-red-500" />
                <span>{position.experience} experience</span>
              </div>
            </div>

            {/* Skills */}
            <div className="mb-6">
              <div className="text-gray-900     text-sm font-bold mb-2">KEY SKILLS:</div>
              <div className="flex flex-wrap gap-2">
                {position.skills.map((skill, idx) => (
                  <span 
                    key={idx}
                    className="bg-gray-100 text-gray-700 px-3 py-1 text-xs     tracking-wider border border-gray-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Apply Button */}
            <button className="w-full bg-gradient-to-r from-red-600 to-orange-600 text-white py-3 px-6     font-bold text-sm tracking-wider hover:from-red-500 hover:to-orange-500 transition-all duration-300 group flex items-center justify-center space-x-2">
              <span>APPLY NOW</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Scanning line effect */}
          <motion.div
            className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent"
            animate={{
              y: [0, 380, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4,
              delay: index * 0.3,
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
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-20"
            style={{ top: `${30 + i * 20}%` }}
            animate={{
              x: ["-100%", "100%"],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: 6,
              delay: i * 1.2,
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
          {/* <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-red-500" />
            <AlertTriangle className="h-6 w-6 text-red-500" />
            <span className="text-red-600     text-sm tracking-widest">
              JOIN OUR TEAM
            </span>
            <AlertTriangle className="h-6 w-6 text-red-500" />
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-red-500" />
          </div> */}

          <h2 className="text-4xl lg:text-6xl font-bold mb-6    ">
            <span className="text-orange-500 small">CAREERS</span>
          </h2>

          <p className="text-xl text-gray-700 max-w-3xl newq mx-auto    ">
            We are looking for passionate and driven individuals to join our team 
            in building the future of artificial intelligence.
          </p>
        </motion.div>

        {/* Company Culture Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16"
        >
          {[
            { number: "50+", label: "Team Members", icon: Users },
            { number: "15+", label: "Countries", icon: MapPin },
            { number: "4.8/5", label: "Employee Rating", icon: Star },
            { number: "100%", label: "Remote Friendly", icon: Settings },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/80 border border-red-500/20 p-6 text-center shadow-lg"
            >
              <stat.icon className="h-8 w-8 text-red-500 mx-auto mb-4" />
              <div className="text-4xl font-bold text-gray-900     mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600   newq  text-md">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Open Positions Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4    ">
            OPEN POSITIONS
          </h3>
          <p className="text-gray-600    ">
            Discover opportunities to shape the future of AI technology
          </p>
        </motion.div>

        {/* Job Listings Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {positions.map((position, index) => (
            <JobCard key={index} position={position} index={index} />
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gray-50/80 border border-red-500/20 p-8 max-w-4xl mx-auto backdrop-blur-sm shadow-lg">
            <h3 className="text-4xl font-bold small text-gray-900 mb-4    ">
              Don't See Your Perfect Role?
            </h3>
            <p className="text-gray-700 mb-6  max-w-xl mx-auto newq   text-md">
              We're always looking for exceptional talent. Send us your resume and 
              tell us how you'd like to contribute to our AI mission.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4     font-bold text-sm tracking-wider relative overflow-hidden border border-red-500/50 hover:shadow-lg">
                <span className="relative z-10">SEND GENERAL APPLICATION</span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 transform skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              </button>

              <button className="group text-gray-900 border border-gray-400 px-8 py-4     font-bold text-sm tracking-wider hover:border-red-400 hover:text-red-400 transition-all duration-300 relative bg-white hover:shadow-lg">
                <span>LEARN ABOUT OUR CULTURE</span>
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

export default CareersSection;
