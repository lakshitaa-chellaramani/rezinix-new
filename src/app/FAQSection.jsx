'use client'
import React, { useState } from 'react';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqs = [
    {
      question: "What is this platform used for?",
      answer: "It's an AI-powered design assistant that helps you generate, customize, and export creative assets in seconds—whether for personal projects, brand work, or commercial use."
    },
    {
      question: "What happens if I hit my free generation limit?",
      answer: "Once you reach your free generation limit, you'll need to upgrade to a paid plan to continue generating designs. You can also wait until your monthly limit resets."
    },
    {
      question: "Do I need design experience to use it?",
      answer: "No design experience required! Our AI-powered platform is built to be intuitive and user-friendly, making professional design accessible to everyone regardless of their background."
    },
    {
      question: "Can I collaborate with my team?",
      answer: "Yes! With our Team plan, you can collaborate seamlessly with unlimited shared commands, quicklinks, and priority support for team workflows."
    },
    {
      question: "Is it really free to use?",
      answer: "Yes, we offer a completely free tier that includes 20 design generations per month, basic style presets, and low-resolution downloads to get you started."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white px-8 py-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Left orange curved element */}
        <div className="absolute -left-20 top-0 w-40 h-full">
          <div className="w-full h-full bg-gradient-to-r from-orange-500 to-transparent rounded-r-full opacity-80"></div>
        </div>
        
        {/* Right orange curved element */}
        <div className="absolute -right-20 top-0 w-40 h-full">
          <div className="w-full h-full bg-gradient-to-l from-orange-500 to-transparent rounded-l-full opacity-80"></div>
        </div>
        
        {/* Bottom left white curved element */}
        <div className="absolute -left-32 bottom-0 w-64 h-64">
          <div className="w-full h-full bg-gradient-to-tr from-white/20 to-transparent rounded-full"></div>
        </div>
        
        {/* Diagonal stripe elements */}
        <div className="absolute right-1/4 top-1/2 w-2 h-32 bg-gradient-to-b from-orange-500/30 to-transparent transform rotate-45"></div>
        <div className="absolute right-1/3 top-1/3 w-1 h-24 bg-gradient-to-b from-orange-400/20 to-transparent transform rotate-45"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 leading-tight">
            Frequently Asked<br />
            Questions
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Got questions? We've got answers. Find everything you need to know about using our 
            platform, plans, and features.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-800 transition-all duration-300"
            >
              <button
                onClick={() => setOpenFAQ(openFAQ === index ? -1 : index)}
                className="w-full py-6 px-0 text-left flex justify-between items-center group hover:text-orange-400 transition-colors duration-200"
              >
                <span className="text-lg md:text-xl font-medium pr-8">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className={`transform transition-transform duration-300 ${
                      openFAQ === index ? 'rotate-180' : ''
                    }`}
                  >
                    <path
                      d="M6 9L12 15L18 9"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>
              
              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openFAQ === index
                    ? 'max-h-48 opacity-100 pb-6'
                    : 'max-h-0 opacity-0 pb-0'
                }`}
              >
                <p className="text-gray-400 leading-relaxed text-base md:text-lg pr-8">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
