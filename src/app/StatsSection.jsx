import React from 'react';

const StatsSection = () => {
  return (
    <div className="min-h-screen bg-black text-white px-8 py-16 relative overflow-hidden">
      {/* Decorative dots/particles */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-2 h-2 bg-orange-500 rounded-full"></div>
        <div className="absolute top-32 right-20 w-1 h-1 bg-orange-400 rounded-full"></div>
        <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
        <div className="absolute top-1/2 right-10 w-1 h-1 bg-orange-300 rounded-full"></div>
        <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-orange-400 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Text */}
        <div className="mb-20">
          <div className="text-gray-400 text-sm mb-4">2025</div>
          <p className="text-lg md:text-xl leading-relaxed max-w-3xl text-gray-300">
            Whether you're designing for personal projects, creative teams, or 
            large-scale campaigns, our AI-powered platform is built to bring 
            your ideas to life—quickly, beautifully, and intelligently. 
            And the results? The numbers speak for themselves:
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
          {/* Left Column */}
          <div className="space-y-16">
            {/* 2014 - Year of establishment */}
            <div className="relative">
              <div className="flex items-start gap-8">
                <div>
                  <h2 className="text-6xl md:text-7xl font-light mb-2">2014</h2>
                  <h3 className="text-xl font-medium mb-2">Year of establishment</h3>
                  <p className="text-gray-400 text-sm">More than 10 years in the field</p>
                </div>
                
                {/* Profile images */}
                <div className="flex -space-x-3 mt-8">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-gray-600 to-gray-400 border-2 border-black flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-gray-300"></div>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 border-2 border-black flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-blue-200"></div>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-600 to-orange-400 border-2 border-black flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-orange-200"></div>
                  </div>
                </div>
              </div>
              
              {/* Connecting line */}
              <div className="absolute right-0 top-16 w-20 h-px bg-gray-600"></div>
              <div className="absolute right-0 top-16 w-2 h-2 bg-gray-600 rounded-full transform translate-x-1"></div>
            </div>

            {/* 304 - Projects launched */}
            <div className="relative">
              <div className="flex items-start gap-8">
                <div>
                  <h2 className="text-6xl md:text-7xl font-light mb-2">304</h2>
                  <h3 className="text-xl font-medium mb-2">Projects are launched</h3>
                  <p className="text-gray-400 text-sm">A lot of projects are done</p>
                </div>
                
                {/* Project thumbnail */}
                <div className="mt-8">
                  <div className="w-20 h-12 bg-gradient-to-r from-amber-800 to-amber-600 rounded-lg border border-gray-700 flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-1 p-2">
                      <div className="w-2 h-2 bg-amber-200 rounded-sm"></div>
                      <div className="w-2 h-2 bg-amber-300 rounded-sm"></div>
                      <div className="w-2 h-2 bg-amber-100 rounded-sm"></div>
                      <div className="w-2 h-2 bg-amber-200 rounded-sm"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Connecting line */}
              <div className="absolute right-0 top-16 w-20 h-px bg-gray-600"></div>
              <div className="absolute right-0 top-16 w-2 h-2 bg-gray-600 rounded-full transform translate-x-1"></div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-16">
            {/* 189 - Clients satisfied */}
            <div className="relative">
              <div className="flex items-start gap-8">
                <div>
                  <h2 className="text-6xl md:text-7xl font-light mb-2">189</h2>
                  <h3 className="text-xl font-medium mb-2">Clients are satisfied</h3>
                  <p className="text-gray-400 text-sm">These people love us</p>
                </div>
                
                {/* Client profile images */}
                <div className="flex -space-x-3 mt-8">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-600 to-green-400 border-2 border-black flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-green-200"></div>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-purple-400 border-2 border-black flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-purple-200"></div>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-600 to-pink-400 border-2 border-black flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-pink-200"></div>
                  </div>
                </div>
              </div>
              
              {/* Connecting line */}
              <div className="absolute right-0 top-16 w-20 h-px bg-gray-600"></div>
              <div className="absolute right-0 top-16 w-2 h-2 bg-gray-600 rounded-full transform translate-x-1"></div>
            </div>

            {/* 12 - Projects in work */}
            <div className="relative">
              <div className="flex items-start gap-8">
                <div>
                  <h2 className="text-6xl md:text-7xl font-light mb-2">12</h2>
                  <h3 className="text-xl font-medium mb-2">Projects in work</h3>
                  <p className="text-gray-400 text-sm">What we do right now</p>
                </div>
                
                {/* Work in progress thumbnail */}
                <div className="mt-8">
                  <div className="w-20 h-12 bg-gradient-to-r from-gray-800 to-gray-600 rounded-lg border border-gray-700 flex items-center justify-center">
                    <div className="flex gap-1 p-2">
                      <div className="w-1 h-6 bg-gray-300 rounded-full"></div>
                      <div className="w-1 h-4 bg-gray-400 rounded-full"></div>
                      <div className="w-1 h-5 bg-gray-300 rounded-full"></div>
                      <div className="w-1 h-3 bg-gray-400 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Connecting line */}
              <div className="absolute right-0 top-16 w-20 h-px bg-gray-600"></div>
              <div className="absolute right-0 top-16 w-2 h-2 bg-gray-600 rounded-full transform translate-x-1"></div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-24 flex flex-col sm:flex-row items-center justify-between gap-8">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors duration-300">
            Get Started
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          <div className="flex items-center gap-2 text-gray-400">
            <span className="text-sm">Slots are available</span>
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
