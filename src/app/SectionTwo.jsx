import React from 'react';

const DesignForDesigners = () => {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-start mb-12">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-light mb-4 leading-tight">
              Designed for Designers.
            </h1>
            <h2 className="text-5xl md:text-6xl font-light mb-6 leading-tight">
              Powered by <span className="text-orange-500">AI</span>.
            </h2>
            <p className="text-gray-300 text-lg max-w-lg leading-relaxed">
              Unlock the full potential of your creativity with our AI-powered design assistant.
              Explore new dimensions of design
            </p>
          </div>
          
          {/* Geometric Icon */}
          <div className="hidden md:block">
            <svg 
              width="120" 
              height="120" 
              viewBox="0 0 120 120" 
              className="text-white stroke-current"
              fill="none"
              strokeWidth="1"
            >
              {/* Icosahedron wireframe */}
              <polygon points="60,10 95,35 95,85 60,110 25,85 25,35" />
              <line x1="60" y1="10" x2="25" y2="35" />
              <line x1="60" y1="10" x2="95" y2="35" />
              <line x1="25" y1="35" x2="60" y2="60" />
              <line x1="95" y1="35" x2="60" y2="60" />
              <line x1="60" y1="60" x2="25" y2="85" />
              <line x1="60" y1="60" x2="95" y2="85" />
              <line x1="25" y1="85" x2="60" y2="110" />
              <line x1="95" y1="85" x2="60" y2="110" />
            </svg>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Instant Ideation */}
          <div className="group bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900/30 rounded-2xl p-8 hover:from-gray-800 hover:via-gray-700 hover:to-orange-800/40 transition-all duration-300 relative overflow-hidden">
            <div className="relative z-10">
              <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                Skip the blank canvas and spark creativity instantly. Our AI generates high-quality, on-brand design concepts within seconds
              </p>
              <h3 className="text-2xl font-medium mb-4">Instant Ideation</h3>
              <div className="inline-flex items-center justify-center w-10 h-10 bg-orange-500 rounded-full">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Smart Adaptability */}
          <div className="group bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 rounded-2xl p-8 hover:from-gray-800 hover:via-gray-700 hover:to-gray-600 transition-all duration-300 relative overflow-hidden">
            <div className="relative z-10">
              <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                No two creators are the same, and neither are their styles. Our AI learns from your inputs, understands your aesthetic preferences, and fine-tunes every design
              </p>
              <h3 className="text-2xl font-medium mb-4">Smart Adaptability</h3>
              <div className="inline-flex items-center justify-center w-10 h-10 bg-orange-500 rounded-full">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Multi-Format Export */}
          <div className="group bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 rounded-2xl p-8 hover:from-gray-800 hover:via-gray-700 hover:to-gray-600 transition-all duration-300 relative overflow-hidden">
            <div className="relative z-10">
              <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                Design once, export anywhere. Whether you need high-res graphics for print, responsive visuals for the web, mobile-optimized assets.
              </p>
              <h3 className="text-2xl font-medium mb-4">Multi-Format Export</h3>
              <div className="inline-flex items-center justify-center w-10 h-10 bg-orange-500 rounded-full">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Seamless Revisions */}
          <div className="group bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900/30 rounded-2xl p-8 hover:from-gray-800 hover:via-gray-700 hover:to-orange-800/40 transition-all duration-300 relative overflow-hidden">
            <div className="relative z-10">
              <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                Say goodbye to repetitive tweaks and endless back-and-forths. With intuitive prompt-based editing
              </p>
              <h3 className="text-2xl font-medium mb-4">Seamless Revisions</h3>
              <div className="inline-flex items-center justify-center w-10 h-10 bg-orange-500 rounded-full">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignForDesigners;
