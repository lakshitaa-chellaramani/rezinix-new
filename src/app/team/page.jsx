'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Briefcase, Award, Building, Globe, Users, Linkedin, Mail } from 'lucide-react';

const TeamPage = () => {
  const stats = [
    { number: "40+", label: "Combined Years", icon: Award },
    { number: "800M+", label: "Assets Managed", icon: Building },
    { number: "20+", label: "Global Markets", icon: Globe },
    { number: "500+", label: "Teams Led", icon: Users },
  ];

  const leaders = [
    {
      name: "Sachin Jain",
      title: "Director",
      image: "https://media.licdn.com/dms/image/v2/D5603AQHemyBeqcYCaA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1686235409267?e=1762387200&v=beta&t=LMgovuVCv6mRKKZs4LQhfBkRKVDHCb_ojuxWNXrDsz4",
      location: "Boston, MA / Mumbai, India",
      experience: "15+ years",
      linkedin: "https://www.linkedin.com/in/sachingjain/?originalSubdomain=in",
      email: "contactus@rezinix.ai",
      specialties: ["Business Scaling", "AI Infrastructure", "Climate Tech", "Private Equity"],
      bio: [
        "Sachin Jain is a senior global executive with a proven track record in scaling businesses for infrastructure and private equity funds, managing over $600 million in assets across India and Asia.",
        "He is passionate about leveraging AI and exponential technologies to transform climate infrastructure, EPC, manufacturing, and industrial sectors, with a focus on operational efficiency, automation, and intelligent systems.",
        "In his previous role as CEO – India & Southeast Asia and Board Member, Sachin led business expansion across seven countries, while managing a team of over 200 professionals.",
        "He has held technology and management leadership roles at BCG, KPMG, Cognizant, Epic Systems Inc., EDS (now HP), and Cleantech Renewable Assets Pte. (backed by Shell and Keppel, a Temasek-backed entity), among others.",
        "A frequent speaker at prominent forums, Sachin has shared insights at the Bombay Chambers Sustainability Conclave, HSBC Asia Energy Transition Series, Chintan Shivir Roundtable, IIT Madras Geological Track Jury, EY Energy Transition CEO Roundtable, and ET EnergyWorld Roundtable.",
        "He holds an MBA from the University of Cambridge (UK) as a Tata Scholar, an MS in Industrial Systems Engineering from Ohio University (USA), and a BE in Engineering from KJSCE, University of Mumbai (India)."
      ],
      achievements: [
        "$600M+ Assets Managed",
        "7 Countries Expansion",
        "200+ Team Members Led",
        "Cambridge MBA (Tata Scholar)"
      ]
    },
    {
      name: "Nitin Sawant",
      title: "Senior Technology Advisor",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQFTCmVVe7wlEQ/profile-displayphoto-scale_200_200/B4DZi479ZJGgAc-/0/1755449383301?e=1762387200&v=beta&t=X5YO3OoTJ0eIyR7nrt-bOslLvgg0WilSgIxHhgPG0yA",
      location: "Global / Remote",
      experience: "25+ years",
      linkedin: "https://www.linkedin.com/in/nitin-sawant/?originalSubdomain=in",
      email: "contactus@rezinix.ai",
      specialties: ["Enterprise Architecture", "Cloud Strategy", "Digital Transformation", "AI/ML Integration"],
      bio: [
        "Nitin Sawant is a senior technology executive with over 25 years of leadership experience in enterprise architecture, cloud strategy, and digital transformation.",
        "He has worked as Partner and Managing Director with global firms such as EY, IBM, Deloitte and Accenture.",
        "As the Enterprise Architecture and Cloud Leader for the Data & Analytics business at LSEG, he drives AI-powered decision-making, cloud modernization, and scalable architecture across global financial markets.",
        "Nitin plays a key role in integrating AI and machine learning (ML) to enhance trading, risk management, and compliance, while leading fintech innovation through advanced technology adoption.",
        "He is a trusted advisor to CXOs, aligning technology strategies with business goals, and brings deep expertise in M&A, cloud migration, big data, DevOps, and IT strategy, with industry experience spanning banking, telecom, and retail."
      ],
      achievements: [
        "25+ Years Experience",
        "Global Firms Leadership",
        "CXO Trusted Advisor",
        "AI/ML Integration Expert"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img
              src="/logo.png"
              alt="Rezinix Logo"
              className="h-10 w-auto cursor-pointer"
            />
          </a>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="/" className="text-gray-300 hover:text-white transition-colors duration-200">Home</a>
            <a href="/solutions" className="text-gray-300 hover:text-white transition-colors duration-200">Our Solutions</a>
            <a href="/team" className="text-white hover:text-orange-400 transition-colors duration-200">Team</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-l from-orange-500/10 to-transparent opacity-50"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500/10 to-orange-600/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-orange-500/20">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <span className="text-orange-400 font-medium text-sm uppercase tracking-wider">Leadership Team</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Meet Our <span className="text-orange-500">Leaders</span>
            </h1>

            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Visionary executives driving innovation and transformation through cutting-edge AI solutions
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          >
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm border border-gray-800 rounded-xl p-6 text-center hover:border-orange-500/30 transition-all duration-300">
                  <IconComponent className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Team Members */}
      <div className="relative py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="space-y-12">
            {leaders.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden hover:border-orange-500/30 transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
                  {/* Left: Image and Quick Info */}
                  <div className="lg:col-span-1 space-y-6">
                    <div className="aspect-[3/4] w-full max-w-[300px] mx-auto lg:mx-0 rounded-lg overflow-hidden border-2 border-orange-500/20">
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">{leader.name}</h3>
                        <p className="text-orange-500 font-medium uppercase text-sm tracking-wider">{leader.title}</p>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                          <MapPin className="w-4 h-4 text-orange-500" />
                          <span>{leader.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                          <Briefcase className="w-4 h-4 text-orange-500" />
                          <span>{leader.experience}</span>
                        </div>
                      </div>

                      {/* Contact Buttons */}
                      <div className="flex gap-3 pt-4">
                        <a
                          href={leader.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-lg transition-all duration-200 flex items-center justify-center"
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                        <a
                          href={`mailto:${leader.email}`}
                          className="flex-1 border border-gray-700 hover:border-orange-500 text-gray-400 hover:text-orange-500 p-3 rounded-lg transition-all duration-200 flex items-center justify-center"
                        >
                          <Mail className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Right: Details */}
                  <div className="lg:col-span-2 space-y-6">
                    {/* Specialties */}
                    <div>
                      <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Expertise</h4>
                      <div className="flex flex-wrap gap-2">
                        {leader.specialties.map((specialty, idx) => (
                          <span
                            key={idx}
                            className="bg-gray-800/50 border border-gray-700 text-gray-300 px-3 py-1 rounded-lg text-sm"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Key Achievements</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {leader.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                            <span className="text-gray-300 text-sm">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bio */}
                    <div>
                      <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Biography</h4>
                      <div className="space-y-3">
                        {leader.bio.map((paragraph, idx) => (
                          <p key={idx} className="text-gray-400 text-sm leading-relaxed">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-20">
        <div className="max-w-4xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm border border-gray-800 rounded-2xl p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Connect with Our Leadership
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Interested in partnerships, investments, or strategic collaborations? Our leadership team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200">
                Schedule Meeting
              </button>
              <button className="border border-gray-700 hover:border-orange-500 text-white px-8 py-4 rounded-lg font-medium text-lg transition-all duration-200">
                View Company Overview
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
