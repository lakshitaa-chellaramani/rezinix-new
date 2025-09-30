'use client';

import { motion, useTransform } from 'framer-motion';
import { Shield, ArrowRight } from 'lucide-react';

const Navigation = ({ scrollYProgress }) => {
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.1],
    ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.9)"]
  );

  return (
    <motion.nav 
     
      className="fixed top-0 w-full z-50 backdrop-blur-xl border-b border-red-500/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative">
              <Shield className="h-10 w-10 text-orange-500" />
            </div>
            <div>
              <span className="text-2xl tracking-wide font-bold text-black  ">
                Rezenix
              </span>
            </div>
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-8">
            {['THREAT INTEL', 'AI DEFENSE', 'SERVICES', 'CONTACT'].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-black hover:text-red-400 transition-all duration-300   text-sm tracking-wider relative group"
                whileHover={{ y: -2 }}
              >
                {item}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
            <motion.button
              className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-6 py-2 rounded-sm   text-sm tracking-wider hover:from-red-500 hover:to-orange-500 border border-red-500/50 relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">SECURE NOW</span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 opacity-0 group-hover:opacity-20 transition-opacity" />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
