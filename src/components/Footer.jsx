"use client";

import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-red-500/20 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-6">
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative">
                <Shield className="h-10 w-10 text-orange-500" />
              </div>
              <div>
                <span className="text-2xl tracking-wide font-bold text-black">
                  Rezenix
                </span>
              </div>
            </motion.div>
            <p className="text-gray-800 font-mono text-sm">
              Elite AI solutions powered by advanced technology.
              Transforming businesses in an era of digital evolution.
            </p>
            {/* <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-green-400 font-mono text-sm">AI SYSTEMS ONLINE</span>
            </div> */}
          </div>
          
          <div>
            <h3 className="text-black font-mono font-bold mb-4 tracking-wider">AI SERVICES</h3>
            <ul className="space-y-2">
              {['AI Strategy & Consulting', 'Custom AI Development', 'Machine Learning Models', 'NLP Solutions', 'Computer Vision'].map(item => (
                <li key={item}>
                  <a href="#" className="text-gray-800 hover:text-red-400 transition-colors font-mono text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-black font-mono font-bold mb-4 tracking-wider">SOLUTIONS</h3>
            <ul className="space-y-2">
              {['AI Platform Engineering', 'MLOps & Deployment', 'Data Analytics', 'AI Training Programs', 'Responsible AI'].map(item => (
                <li key={item}>
                  <a href="#" className="text-gray-800 hover:text-red-400 transition-colors font-mono text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-black font-mono font-bold mb-4 tracking-wider">COMPANY</h3>
            <ul className="space-y-2">
              {['About Us', 'Leadership Team', 'Careers', 'Contact Us', 'Blog'].map(item => (
                <li key={item}>
                  <a href="#" className="text-gray-800 hover:text-red-400 transition-colors font-mono text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-700 font-mono text-sm">
              © 2025 REZENIX AI. ALL RIGHTS RESERVED. | INNOVATIVE AI TECHNOLOGY
            </div>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
