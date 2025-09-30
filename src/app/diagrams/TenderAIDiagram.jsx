'use client'
import React, { useState } from 'react';
import { Monitor, Search, FileUp, Database, Brain, BarChart3, TrendingUp, AlertTriangle, DollarSign, CheckCircle } from 'lucide-react';

const TenderAIDiagram = () => {
  const [hoveredNode, setHoveredNode] = useState(null);

  const nodes = {
    ui: {
      id: 'ui',
      number: 1,
      name: 'User Interface',
      shortName: 'UI/UX',
      description: 'Frontend interaction, query input, report visualization.',
      technologies: ['React/Angular', 'Tailwind CSS'],
      icon: Monitor,
      position: { x: 50, y: 10 },
      color: 'slate'
    },
    discovery: {
      id: 'discovery',
      number: 2,
      name: 'Tender Discovery Agent',
      shortName: 'Discovery',
      description: 'Proactive finding of new tenders, integration with external APIs.',
      technologies: ['Python', 'Scrapy', 'REST API'],
      icon: Search,
      position: { x: 20, y: 30 },
      color: 'orange'
    },
    ingestion: {
      id: 'ingestion',
      number: 3,
      name: 'Document Ingestion Agent',
      shortName: 'Ingestion',
      description: 'Handles user uploads, OCR/parsing, cleaning, and segmentation.',
      technologies: ['Tesseract', 'LangChain', 'LlamaIndex'],
      icon: FileUp,
      position: { x: 50, y: 45 },
      color: 'slate'
    },
    storage: {
      id: 'storage',
      number: 4,
      name: 'Vector & Document Store',
      shortName: 'Storage',
      description: 'Persistent storage for processed documents and semantic embeddings.',
      technologies: ['AWS S3', 'Pinecone', 'Chroma'],
      icon: Database,
      position: { x: 50, y: 70 },
      color: 'orange'
    },
    orchestrator: {
      id: 'orchestrator',
      number: 5,
      name: 'Core Orchestration Agent',
      shortName: 'Orchestrator',
      description: 'Routes queries to appropriate specialized agents.',
      technologies: ['CrewAI', 'AutoGen', 'FastAPI'],
      icon: Brain,
      position: { x: 20, y: 70 },
      color: 'orange'
    },
    saaRisk: {
      id: 'saaRisk',
      number: '6a',
      name: 'SAA-Risk',
      shortName: 'Risk Analysis',
      description: 'Analyzes contractual and operational risks.',
      technologies: ['Gemini 2.5 Pro', 'RAG'],
      icon: AlertTriangle,
      position: { x: 70, y: 85 },
      color: 'red'
    },
    saaFinancial: {
      id: 'saaFinancial',
      number: '6b',
      name: 'SAA-Financial',
      shortName: 'Financial Analysis',
      description: 'Evaluates financial viability and requirements.',
      technologies: ['Gemini 2.5 Pro', 'RAG'],
      icon: DollarSign,
      position: { x: 85, y: 75 },
      color: 'green'
    },
    saaEligibility: {
      id: 'saaEligibility',
      number: '6c',
      name: 'SAA-Eligibility',
      shortName: 'Eligibility Check',
      description: 'Checks compliance and eligibility criteria.',
      technologies: ['Gemini 2.5 Pro', 'RAG'],
      icon: CheckCircle,
      position: { x: 85, y: 60 },
      color: 'blue'
    },
    reporting: {
      id: 'reporting',
      number: 7,
      name: 'Reporting & Feedback Agent',
      shortName: 'Reporting',
      description: 'Generates reports, spider charts, and collects feedback.',
      technologies: ['Pandas', 'Matplotlib', 'D3.js'],
      icon: BarChart3,
      position: { x: 80, y: 30 },
      color: 'orange'
    }
  };

  const connections = [
    { from: 'ui', to: 'discovery', label: '1' },
    { from: 'discovery', to: 'ingestion', label: '2' },
    { from: 'ingestion', to: 'storage', label: '3' },
    { from: 'ui', to: 'orchestrator', label: '4' },
    { from: 'orchestrator', to: 'storage', label: '5' },
    { from: 'storage', to: 'saaRisk', label: '7a' },
    { from: 'storage', to: 'saaFinancial', label: '7b' },
    { from: 'storage', to: 'saaEligibility', label: '7c' },
    { from: 'orchestrator', to: 'saaRisk', label: '6a' },
    { from: 'orchestrator', to: 'saaFinancial', label: '6b' },
    { from: 'orchestrator', to: 'saaEligibility', label: '6c' },
    { from: 'saaRisk', to: 'reporting', label: '8a' },
    { from: 'saaFinancial', to: 'reporting', label: '8b' },
    { from: 'saaEligibility', to: 'reporting', label: '8c' },
    { from: 'reporting', to: 'ui', label: '9' }
  ];

  const getNodeColor = (color) => {
    switch(color) {
      case 'orange': return { bg: 'from-orange-500/20 to-orange-600/10', border: 'border-orange-500/40', iconBg: 'from-orange-500 to-orange-600', text: 'text-orange-400' };
      case 'slate': return { bg: 'from-slate-600/20 to-slate-700/10', border: 'border-slate-500/40', iconBg: 'from-slate-600 to-slate-700', text: 'text-slate-400' };
      case 'red': return { bg: 'from-red-500/20 to-red-600/10', border: 'border-red-500/40', iconBg: 'from-red-500 to-red-600', text: 'text-red-400' };
      case 'green': return { bg: 'from-green-500/20 to-green-600/10', border: 'border-green-500/40', iconBg: 'from-green-500 to-green-600', text: 'text-green-400' };
      case 'blue': return { bg: 'from-blue-500/20 to-blue-600/10', border: 'border-blue-500/40', iconBg: 'from-blue-500 to-blue-600', text: 'text-blue-400' };
      default: return { bg: 'from-gray-600/20 to-gray-700/10', border: 'border-gray-500/40', iconBg: 'from-gray-600 to-gray-700', text: 'text-gray-400' };
    }
  };

  return (
    <div className="w-full bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-700/50">
      <div className="mb-8 text-center">
        <h3 className="text-3xl font-bold mb-3">
          TenderAI: <span className="text-orange-500">Agentic System Architecture</span>
        </h3>
        <p className="text-gray-400">Hover over nodes to see details • Lines show data flow between components</p>
      </div>

      {/* Main Diagram */}
      <div className="relative bg-black/40 rounded-2xl p-8 backdrop-blur-sm border border-gray-800/50" style={{ minHeight: '700px' }}>
        {/* Connection Lines with SVG */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
          <defs>
            <marker id="arrowhead-tender" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#f97316" opacity="0.6" />
            </marker>
            <linearGradient id="lineGradient-tender" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f97316" stopOpacity="0.4"/>
              <stop offset="100%" stopColor="#f97316" stopOpacity="0.1"/>
            </linearGradient>
          </defs>

          {connections.map((conn, idx) => {
            const fromNode = nodes[conn.from];
            const toNode = nodes[conn.to];
            const isHighlighted = hoveredNode === conn.from || hoveredNode === conn.to;

            return (
              <g key={idx}>
                <line
                  x1={`${fromNode.position.x}%`}
                  y1={`${fromNode.position.y}%`}
                  x2={`${toNode.position.x}%`}
                  y2={`${toNode.position.y}%`}
                  stroke="url(#lineGradient-tender)"
                  strokeWidth={isHighlighted ? "2.5" : "1.5"}
                  strokeDasharray="4,4"
                  markerEnd="url(#arrowhead-tender)"
                  className="transition-all duration-300"
                  opacity={isHighlighted ? "1" : "0.4"}
                />
              </g>
            );
          })}
        </svg>

        {/* Nodes */}
        {Object.values(nodes).map((node) => {
          const IconComponent = node.icon;
          const colors = getNodeColor(node.color);
          const isHovered = hoveredNode === node.id;

          return (
            <div
              key={node.id}
              className={`absolute transition-all duration-300 cursor-pointer ${isHovered ? 'z-30 scale-110' : 'z-10'}`}
              style={{
                left: `${node.position.x}%`,
                top: `${node.position.y}%`,
                transform: `translate(-50%, -50%) ${isHovered ? 'scale(1.1)' : 'scale(1)'}`
              }}
              onMouseEnter={() => setHoveredNode(node.id)}
              onMouseLeave={() => setHoveredNode(null)}
            >
              {/* Node Box */}
              <div className={`relative bg-gradient-to-br ${colors.bg} backdrop-blur-md rounded-2xl p-4 border-2 ${colors.border} w-36 transition-all duration-300 ${
                isHovered ? 'shadow-2xl shadow-orange-500/20' : ''
              }`}>
                {/* Number Badge */}
                <div className={`absolute -top-3 -right-3 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shadow-lg bg-gradient-to-br ${colors.iconBg} text-white`}>
                  {node.number}
                </div>

                {/* Icon */}
                <div className={`w-12 h-12 mx-auto mb-3 rounded-xl flex items-center justify-center bg-gradient-to-br ${colors.iconBg}`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>

                {/* Name */}
                <div className="text-center">
                  <div className="text-xs font-bold text-white mb-1">{node.shortName}</div>
                </div>
              </div>

              {/* Hover Tooltip */}
              {isHovered && (
                <div className="absolute left-full ml-4 top-0 w-72 bg-gray-900 border border-orange-500/40 rounded-xl p-4 shadow-2xl shadow-orange-500/20 z-40">
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold bg-gradient-to-br ${colors.iconBg} text-white`}>
                      {node.number}
                    </div>
                    <h4 className="font-bold text-white text-sm">{node.name}</h4>
                  </div>
                  <p className="text-xs text-gray-300 mb-3 leading-relaxed">{node.description}</p>
                  <div className="space-y-1">
                    <div className={`text-xs font-semibold ${colors.text} mb-1`}>Technologies:</div>
                    {node.technologies.map((tech, idx) => (
                      <div key={idx} className="text-xs text-gray-400 flex items-center gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${colors.iconBg}`}></div>
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {/* Legend */}
        <div className="absolute top-4 right-4 bg-gray-900/90 backdrop-blur-md rounded-lg p-3 border border-gray-700/50">
          <div className="text-xs font-semibold text-gray-400 mb-2">Components</div>
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded bg-gradient-to-br from-orange-500/30 to-orange-600/20 border border-orange-500/40"></div>
              <span className="text-xs text-gray-400">Core Agent</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded bg-gradient-to-br from-slate-600/30 to-slate-700/20 border border-slate-500/40"></div>
              <span className="text-xs text-gray-400">Support Agent</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded bg-gradient-to-br from-red-500/30 to-red-600/20 border border-red-500/40"></div>
              <span className="text-xs text-gray-400">Risk SAA</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded bg-gradient-to-br from-green-500/30 to-green-600/20 border border-green-500/40"></div>
              <span className="text-xs text-gray-400">Financial SAA</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded bg-gradient-to-br from-blue-500/30 to-blue-600/20 border border-blue-500/40"></div>
              <span className="text-xs text-gray-400">Eligibility SAA</span>
            </div>
          </div>
        </div>

        {/* Flow Indicator */}
        <div className="absolute bottom-4 left-4 bg-gray-900/90 backdrop-blur-md rounded-lg p-3 border border-gray-700/50">
          <div className="text-xs font-semibold text-orange-400 mb-2">Data Flow</div>
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <div className="w-6 h-0.5 bg-gradient-to-r from-orange-500/60 to-orange-500/20"></div>
            <span>UI → Discovery → Process → Analysis → Report</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TenderAIDiagram;
