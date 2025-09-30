"use client";

import { motion } from "framer-motion";
import {
  AlertTriangle,
  Mail,
  MapPin,
  Phone,
  Send,
  Globe,
  Clock,
  Users,
  ArrowRight,
} from "lucide-react";

const ContactUsSection = () => {
  const services = [
    "AI Integration Solutions",
    "Custom AI Model Development", 
    "AI Integration And Deployment",
    "AI Strategy And Consulting",
    "Machine Learning Optimization",
    "Monitoring Data Services",
    "Neural Network Integration"
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative bg-white min-h-screen">
      {/* Scanning Lines */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-full h-px bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-20"
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
              GET IN TOUCH
            </span>
            <AlertTriangle className="h-6 w-6 text-red-500" />
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-red-500" />
          </div> */}

          <h1 className="text-4xl lg:text-6xl small font-bold mb-6    ">
            <span className="text-orange-500">CONNECT WITH US TO</span>
            <br />
            <span className="text-orange-500">EXPLORE AI SOLUTIONS</span>
          </h1>

          <p className="text-xl text-gray-700 max-w-3xl mx-auto    ">
            Talk to our team to discover how AI can create real value for your business.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-6">
              {/* USA Address */}
              <div className="bg-white/80 border border-red-500/20 p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-orange-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2    ">USA OFFICE</h3>
                    <p className="text-gray-600     text-sm">
                      3 Gordon St, Unit 3, Boston, MA, 02134, USA.
                    </p>
                  </div>
                </div>
              </div>

              {/* India Address */}
              <div className="bg-white/80 border border-red-500/20 p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2    ">INDIA OFFICE</h3>
                    <p className="text-gray-600     text-sm">
                      327, V Mall, Thakur Complex, Kandivali (E), Mumbai 400101, India.
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-white/80 border border-red-500/20 p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-teal-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2    ">EMAIL US</h3>
                    <a 
                      href="mailto:contactus@rezinix.ai" 
                      className="text-red-600     text-sm hover:text-red-800 transition-colors underline"
                    >
                      contactus@rezinix.ai
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-gray-50/80 border border-red-500/20 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4    ">
                Why Choose Rezinix?
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-red-500" />
                  <span className="text-gray-700     text-sm">24/7 Support</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4 text-red-500" />
                  <span className="text-gray-700     text-sm">Expert Team</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="h-4 w-4 text-red-500" />
                  <span className="text-gray-700     text-sm">Global Reach</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Send className="h-4 w-4 text-red-500" />
                  <span className="text-gray-700     text-sm">Fast Response</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/80 border border-red-500/20 p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6    ">
                GET IN TOUCH
              </h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-gray-900     font-semibold mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full border border-gray-300 px-4 py-3     text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your first name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="block text-gray-900     font-semibold mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full border border-gray-300 px-4 py-3     text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-900     font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full border border-gray-300 px-4 py-3     text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                    placeholder="you@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-gray-900     font-semibold mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full border border-gray-300 px-4 py-3     text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-gray-900     font-semibold mb-2">
                    Service Interest *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="w-full border border-gray-300 px-4 py-3     text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {services.map((service, index) => (
                      <option key={index} value={service.toLowerCase().replace(/\s+/g, '_')}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-900     font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full border border-gray-300 px-4 py-3     text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us about your AI requirements and how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  className="group w-full bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4     font-bold text-sm tracking-wider flex items-center justify-center space-x-2 border border-red-500/50 relative overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <span className="relative z-10">SUBMIT REQUEST</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 transform skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gray-50/80 border border-red-500/20 p-8 max-w-4xl mx-auto backdrop-blur-sm shadow-lg">
            <h3 className="text-4xl small font-bold text-gray-900 mb-4    ">
              Ready to Start Your AI Journey?
            </h3>
            <p className="text-gray-700 mb-6 newq max-w-xl mx-auto    text-md">
              Our AI experts are standing by to help transform your business with cutting-edge solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4     font-bold text-sm tracking-wider relative overflow-hidden border border-red-500/50 hover:shadow-lg">
                <span className="relative z-10">SCHEDULE CONSULTATION</span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 transform skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              </button>

              <button className="group text-gray-900 border border-gray-400 px-8 py-4     font-bold text-sm tracking-wider hover:border-red-400 hover:text-red-400 transition-all duration-300 relative bg-white hover:shadow-lg">
                <span>VIEW OUR PORTFOLIO</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-red-500/20 rotate-45"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 border border-orange-500/20 rotate-12"></div>
      <div className="absolute top-1/2 right-20 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
      <div className="absolute top-1/3 left-20 w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
    </section>
  );
};

export default ContactUsSection;
