'use client'
import React, { useState } from 'react';
import { Brain, User, Database, Search, Network, BarChart3, Shield, Mail, CheckSquare, Lock, Activity, MessageSquare, FileText, Folder, Github, Code } from 'lucide-react';

const ElevateAIDiagram = () => {
  const [hoveredAgent, setHoveredAgent] = useState(null);

  const agents = {
    orchestrator: {
      id: 'orchestrator',
      name: 'Orchestrator Agent',
      subtitle: 'ElevateAI Core',
      description: 'The brain of ElevateAI. Receives user queries, understands intent, delegates tasks to specialized agents, synthesizes final responses, and enforces security.',
      technologies: ['LangChain', 'LlamaIndex', 'FastAPI', 'GraphQL', 'Kubernetes'],
      position: { x: 50, y: 45 },
      color: 'orange',
      icon: Brain
    },
    ui: {
      id: 'ui',
      name: 'User Interface Agent',
      description: 'User-facing portal. Handles authentication, query input, and displays synthesized results.',
      technologies: ['React', 'Vue.js', 'OAuth', 'OIDC'],
      position: { x: 20, y: 15 },
      color: 'slate',
      icon: User
    },
    ingestion: {
      id: 'ingestion',
      name: 'Ingestion & Embedding Agent',
      description: 'Processes raw data from Connector Agents, cleans it, chunks it, and generates vector embeddings.',
      technologies: ['SpaCy', 'NLTK', 'Sentence Transformers', 'OpenAI Embeddings'],
      position: { x: 25, y: 65 },
      color: 'slate',
      icon: Database
    },
    vectorSearch: {
      id: 'vectorSearch',
      name: 'Vector Search Agent',
      description: 'Stores and retrieves high-dimensional vector embeddings, performing semantic similarity searches.',
      technologies: ['Pinecone', 'Weaviate', 'Qdrant', 'Faiss'],
      position: { x: 50, y: 75 },
      color: 'orange',
      icon: Search
    },
    keywordSearch: {
      id: 'keywordSearch',
      name: 'Keyword Search Agent',
      description: 'Stores and performs precise keyword-based retrieval for exact matches and filters.',
      technologies: ['Elasticsearch', 'Apache Solr'],
      position: { x: 70, y: 75 },
      color: 'slate',
      icon: FileText
    },
    knowledgeGraph: {
      id: 'knowledgeGraph',
      name: 'Knowledge Graph Agent',
      description: 'Builds and queries dynamic graph of relationships between entities. Enhances context and multi-hop reasoning.',
      technologies: ['Neo4j', 'ArangoDB', 'RDF', 'OWL'],
      position: { x: 85, y: 65 },
      color: 'orange',
      icon: Network
    },
    analyst: {
      id: 'analyst',
      name: 'Analyst Agent',
      description: 'Analyzes reports (financial, sales, market data), identifies trends, and provides executive summaries.',
      technologies: ['Pandas', 'Matplotlib', 'Seaborn', 'NLP Models'],
      position: { x: 75, y: 25 },
      color: 'slate',
      icon: BarChart3
    },
    compliance: {
      id: 'compliance',
      name: 'Compliance Agent',
      description: 'Audits documents for legal clauses, regulatory requirements, and flags potential risks.',
      technologies: ['RegEx', 'Fine-tuned NLP Models'],
      position: { x: 85, y: 40 },
      color: 'orange',
      icon: Shield
    },
    communication: {
      id: 'communication',
      name: 'Communication Agent',
      description: 'Drafts context-aware email replies, summarizes threads, and generates internal communications.',
      technologies: ['GPT-4', 'SendGrid API'],
      position: { x: 75, y: 55 },
      color: 'slate',
      icon: Mail
    },
    projectManager: {
      id: 'projectManager',
      name: 'Project Manager Agent',
      description: 'Monitors project progress, provides status updates, identifies bottlenecks, and suggests next steps.',
      technologies: ['Jira API', 'Asana API', 'Scheduling Algorithms'],
      position: { x: 65, y: 15 },
      color: 'orange',
      icon: CheckSquare
    },
    security: {
      id: 'security',
      name: 'Security & RBAC Agent',
      description: 'Enforces Role-Based Access Control, ensures data encryption, and logs audit trails.',
      technologies: ['Open Policy Agent', 'Keycloak', 'Vault'],
      position: { x: 15, y: 40 },
      color: 'slate',
      icon: Lock
    },
    analytics: {
      id: 'analytics',
      name: 'Analytics & Monitoring Agent',
      description: 'Collects usage data, performance metrics, identifies knowledge gaps.',
      technologies: ['Prometheus', 'Grafana', 'ELK Stack'],
      position: { x: 30, y: 28 },
      color: 'orange',
      icon: Activity
    }
  };

  const connectors = [
    { name: 'Slack', icon: MessageSquare, technologies: ['Slack API'] },
    { name: 'Jira', icon: CheckSquare, technologies: ['Jira API'] },
    { name: 'Notion', icon: FileText, technologies: ['Notion API'] },
    { name: 'Drive', icon: Folder, technologies: ['Google Drive API', 'Microsoft Graph'] },
    { name: 'GitHub', icon: Github, technologies: ['GitHub API'] }
  ];

  return (
    <div className="w-full bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-700/50">
      <div className="mb-8 text-center">
        <h3 className="text-3xl font-bold mb-3">
          ElevateAI: <span className="text-orange-500">The Agentic Enterprise Intelligence Network</span>
        </h3>
        <p className="text-gray-400">Hover over components to see details</p>
      </div>

      <div className="relative min-h-[800px] bg-black/40 rounded-2xl p-8 pb-40 backdrop-blur-sm border border-gray-800/50">
        {/* Connection Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f97316" stopOpacity="0.3"/>
              <stop offset="100%" stopColor="#f97316" stopOpacity="0.1"/>
            </linearGradient>
          </defs>

          {/* Main connections from orchestrator */}
          {Object.values(agents).filter(a => a.id !== 'orchestrator').map(agent => (
            <line
              key={`line-${agent.id}`}
              x1={`${agents.orchestrator.position.x}%`}
              y1={`${agents.orchestrator.position.y}%`}
              x2={`${agent.position.x}%`}
              y2={`${agent.position.y}%`}
              stroke="url(#lineGradient)"
              strokeWidth={hoveredAgent === agent.id || hoveredAgent === 'orchestrator' ? "2" : "1"}
              strokeDasharray="5,5"
              className="transition-all duration-300"
            />
          ))}
        </svg>

        {/* Agent Nodes */}
        {Object.values(agents).map(agent => (
          <div
            key={agent.id}
            className={`absolute transition-all duration-300 cursor-pointer ${
              hoveredAgent === agent.id ? 'z-30 scale-110' : 'z-10'
            }`}
            style={{
              left: `${agent.position.x}%`,
              top: `${agent.position.y}%`,
              transform: `translate(-50%, -50%) ${hoveredAgent === agent.id ? 'scale(1.1)' : 'scale(1)'}`
            }}
            onMouseEnter={() => setHoveredAgent(agent.id)}
            onMouseLeave={() => setHoveredAgent(null)}
          >
            <div className={`relative bg-gradient-to-br ${
              agent.color === 'orange'
                ? 'from-orange-500/20 to-orange-600/10 border-orange-500/40'
                : 'from-slate-600/20 to-slate-700/10 border-slate-500/40'
            } backdrop-blur-md rounded-2xl p-4 border-2 ${
              agent.id === 'orchestrator' ? 'w-48 h-48' : 'w-32 h-32'
            } flex flex-col items-center justify-center text-center transition-all duration-300 ${
              hoveredAgent === agent.id ? 'shadow-2xl shadow-orange-500/20' : ''
            }`}>

              {/* Icon */}
              <div className={`${agent.color === 'orange' ? 'text-orange-400' : 'text-slate-400'} mb-2`}>
                {agent.icon && <agent.icon className={agent.id === 'orchestrator' ? 'w-10 h-10' : 'w-6 h-6'} />}
              </div>

              {/* Name */}
              <div className={`font-bold ${
                agent.id === 'orchestrator' ? 'text-base' : 'text-xs'
              } text-white mb-1`}>
                {agent.name}
              </div>

              {/* Subtitle for orchestrator */}
              {agent.subtitle && (
                <div className="text-xs text-orange-400 font-medium">{agent.subtitle}</div>
              )}
            </div>

            {/* Hover Details */}
            {hoveredAgent === agent.id && (
              <div className="absolute left-full ml-4 top-0 w-80 bg-gray-900 border border-orange-500/40 rounded-xl p-4 shadow-2xl shadow-orange-500/20 z-40">
                <h4 className="font-bold text-white mb-2">{agent.name}</h4>
                <p className="text-sm text-gray-300 mb-3">{agent.description}</p>
                <div className="space-y-1">
                  <div className="text-xs font-semibold text-orange-400 mb-1">Technologies:</div>
                  {agent.technologies.map((tech, idx) => (
                    <div key={idx} className="text-xs text-gray-400 flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full ${
                        agent.color === 'orange' ? 'bg-orange-500' : 'bg-slate-500'
                      }`}></div>
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Data Connectors Section - Positioned Lower */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur-md rounded-xl p-4 border border-gray-700/50">
            <div className="text-sm font-semibold text-orange-400 mb-3">Data Connector Agents</div>
            <div className="flex justify-around items-center gap-3">
              {connectors.map((connector, idx) => {
                const IconComponent = connector.icon;
                return (
                  <div
                    key={idx}
                    className="group relative flex flex-col items-center justify-center w-20 h-20 bg-gradient-to-br from-slate-700/30 to-slate-800/30 rounded-xl border border-slate-600/40 hover:border-orange-500/40 transition-all duration-300 cursor-pointer"
                    onMouseEnter={() => setHoveredAgent(`connector-${idx}`)}
                    onMouseLeave={() => setHoveredAgent(null)}
                  >
                    <IconComponent className="w-6 h-6 text-slate-400 mb-1" />
                    <div className="text-xs text-gray-400 text-center px-1">{connector.name}</div>

                    {hoveredAgent === `connector-${idx}` && (
                      <div className="absolute bottom-full mb-2 w-48 bg-gray-900 border border-orange-500/40 rounded-lg p-3 shadow-xl z-50">
                        <div className="text-xs font-semibold text-white mb-1">{connector.name} Connector</div>
                        <div className="text-xs text-gray-400">
                          {connector.technologies.join(', ')}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="absolute top-4 right-4 bg-gray-900/80 backdrop-blur-md rounded-lg p-3 border border-gray-700/50">
          <div className="text-xs font-semibold text-gray-400 mb-2">Legend</div>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-gradient-to-br from-orange-500/30 to-orange-600/20 border border-orange-500/40"></div>
              <span className="text-xs text-gray-400">Core Agent</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-gradient-to-br from-slate-600/30 to-slate-700/20 border border-slate-500/40"></div>
              <span className="text-xs text-gray-400">Task Agent</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElevateAIDiagram;
