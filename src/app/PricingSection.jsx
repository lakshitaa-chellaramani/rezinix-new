'use client'
import React, { useState } from 'react';

const PricingSection = () => {
  const [billingPeriod, setBillingPeriod] = useState('Monthly');

  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: '/ month',
      description: 'Everything you need to supercharge your productivity.',
      features: [
        { text: '20 design generations/month', included: true },
        { text: 'Low-res downloads', included: true },
        { text: 'Basic style presets', included: true },
        { text: 'Limited customization options', included: true }
      ],
      buttonText: 'Subscribe',
      buttonStyle: 'bg-gray-700 hover:bg-gray-600 text-white',
      cardStyle: 'bg-gray-800/50 border-gray-700',
      featured: false
    },
    {
      name: 'Pro',
      price: '$17',
      period: '/ month',
      badge: '30%',
      description: 'Unlock a new level of your personal productivity.',
      features: [
        { text: 'Everything in Free', included: true },
        { text: 'Enigma AI', included: true },
        { text: 'Unlimited design generations', included: true },
        { text: 'Custom Themes', included: true },
        { text: 'High-resolution exports', included: true },
        { text: 'Custom Extensions', included: true },
        { text: 'Developer Tools', included: true }
      ],
      buttonText: 'Subscribe',
      buttonStyle: 'bg-orange-500 hover:bg-orange-600 text-white',
      cardStyle: 'bg-gray-800/70 border-orange-500 border-2',
      featured: true
    },
    {
      name: 'Team',
      price: '$37',
      period: '/ month',
      badge: '30%',
      description: 'Everything you need to supercharge your productivity.',
      features: [
        { text: 'Everything in Free', included: true },
        { text: 'Unlimited Shared Commands', included: true },
        { text: 'Unlimited Shared Quicklinks', included: true },
        { text: 'Priority support', included: true }
      ],
      buttonText: 'Subscribe',
      buttonStyle: 'bg-gray-700 hover:bg-gray-600 text-white',
      cardStyle: 'bg-gray-800/50 border-gray-700',
      featured: false
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white px-8 py-16 relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-orange-500/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-500/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 leading-tight">
            Choose the Plan<br />
            That's Right for You
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed mb-8">
            Giving you access to essential features and over 1,000 creative tools. Upgrade to the
            Pro Plan to unlock powerful AI capabilities, cloud syncing, and a whole new level of
            creative freedom.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex bg-gray-800 rounded-lg p-1 mb-12">
            <button
              onClick={() => setBillingPeriod('Monthly')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                billingPeriod === 'Monthly'
                  ? 'bg-gray-700 text-white shadow-lg'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod('Yearly')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                billingPeriod === 'Yearly'
                  ? 'bg-gray-700 text-white shadow-lg'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Yearly
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 relative transition-all duration-300 hover:scale-105 ${
                plan.cardStyle
              } ${plan.featured ? 'transform scale-105' : ''}`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-3 -right-3 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {plan.badge}
                </div>
              )}

              {/* Plan Header */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  {plan.description}
                </p>
                
                {/* Price */}
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl md:text-5xl font-light">{plan.price}</span>
                  <span className="text-gray-400 ml-2">{plan.period}</span>
                </div>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h4 className="text-sm font-medium mb-4 text-gray-300">What's included</h4>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1">
                        {feature.included ? (
                          <div className="w-4 h-4 rounded-full bg-orange-500 flex items-center justify-center">
                            <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                              <path
                                d="M9 1L3.5 6.5L1 4"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        ) : (
                          <div className="w-4 h-4 rounded-full border border-gray-600"></div>
                        )}
                      </div>
                      <span className="text-sm text-gray-300 leading-relaxed">
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Subscribe Button */}
              <button
                className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 ${plan.buttonStyle}`}
              >
                {plan.buttonText}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-current">
                  <path
                    d="M7 17L17 7M17 7H7M17 7V17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
