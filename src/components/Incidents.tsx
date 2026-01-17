import { useState } from 'react';
import { ArrowLeft, Search } from 'lucide-react';
import { IncidentDetails } from './IncidentDetails';
import type { Incident } from '../App';

interface IncidentsProps {
  onNavigateToDashboard: () => void;
  selectedIncident: Incident | null;
}

const mockIncidents: Incident[] = [
  {
    id: 'INC-2025-002',
    severity: 'SEV1',
    type: 'Data Exfiltration',
    status: 'Contained',
    sourceIp: '198.51.100.42',
    user: 'admin@company.com',
    startTime: new Date(Date.now() - 180000),
    lastSeen: new Date(),
    reasons: [
      {
        rule: 'Anomalous Data Export Volume',
        observed: '4.7 GB exported',
        threshold: '100 MB/hour',
        timeWindow: '15 minutes',
        delta: '+4700%',
        explanation: 'Legitimate admin account exporting 47x normal data volume'
      },
      {
        rule: 'Unusual Export Endpoint Usage',
        observed: '347 requests to /data/export',
        threshold: '5 requests/hour',
        timeWindow: '30 minutes',
        delta: '+6940%',
        explanation: 'Authorized user making bulk export requests at unprecedented rate'
      }
    ],
    actions: [
      { action: 'Rate limit /data/export endpoint', timestamp: new Date(Date.now() - 90000), type: 'Auto' },
      { action: 'Isolate data export functionality', timestamp: new Date(Date.now() - 75000), type: 'Auto' },
      { action: 'Notify security team', timestamp: new Date(Date.now() - 60000), type: 'Auto' }
    ],
    timeline: [
      { phase: 'Normal', active: false, completed: true },
      { phase: 'Suspicious', active: false, completed: true },
      { phase: 'Confirmed', active: false, completed: true },
      { phase: 'Isolated', active: true, completed: false },
      { phase: 'Stabilized', active: false, completed: false }
    ]
  },
  {
    id: 'INC-2025-001',
    severity: 'SEV1',
    type: 'Credential Stuffing',
    status: 'Resolved',
    sourceIp: '203.45.167.89',
    user: 'automated-bot-network',
    startTime: new Date(Date.now() - 7200000),
    lastSeen: new Date(Date.now() - 3600000),
    reasons: [
      {
        rule: 'High-Velocity Login Attempts',
        observed: '2,847 requests/min',
        threshold: '50 requests/min',
        timeWindow: '5 minutes',
        delta: '+5594%',
        explanation: 'Detected 56x normal login rate from single IP address'
      },
      {
        rule: 'Distributed User Enumeration',
        observed: '1,203 unique usernames',
        threshold: '10 unique users/IP',
        timeWindow: '10 minutes',
        delta: '+12030%',
        explanation: 'Single IP attempting to authenticate as 1,203 different users'
      }
    ],
    actions: [
      { action: 'Block source IP: 203.45.167.89', timestamp: new Date(Date.now() - 7140000), type: 'Auto' },
      { action: 'Isolate /auth/login endpoint', timestamp: new Date(Date.now() - 7135000), type: 'Auto' },
      { action: 'Enable aggressive rate limiting', timestamp: new Date(Date.now() - 7130000), type: 'Auto' },
      { action: 'Restore normal operations', timestamp: new Date(Date.now() - 3600000), type: 'Manual' }
    ],
    timeline: [
      { phase: 'Normal', active: false, completed: true },
      { phase: 'Suspicious', active: false, completed: true },
      { phase: 'Confirmed', active: false, completed: true },
      { phase: 'Isolated', active: false, completed: true },
      { phase: 'Stabilized', active: false, completed: true }
    ]
  },
  {
    id: 'INC-2025-000',
    severity: 'SEV2',
    type: 'API Abuse',
    status: 'Resolved',
    sourceIp: '45.123.89.201',
    user: 'api-scraper-bot',
    startTime: new Date(Date.now() - 86400000),
    lastSeen: new Date(Date.now() - 82800000),
    reasons: [
      {
        rule: 'Excessive API Calls',
        observed: '15,000 requests/hour',
        threshold: '1,000 requests/hour',
        timeWindow: '1 hour',
        delta: '+1400%',
        explanation: 'Automated scraper exceeding rate limits by 15x'
      }
    ],
    actions: [
      { action: 'Apply rate limiting', timestamp: new Date(Date.now() - 86340000), type: 'Auto' },
      { action: 'Block IP temporarily', timestamp: new Date(Date.now() - 82800000), type: 'Manual' }
    ],
    timeline: [
      { phase: 'Normal', active: false, completed: true },
      { phase: 'Suspicious', active: false, completed: true },
      { phase: 'Confirmed', active: false, completed: true },
      { phase: 'Isolated', active: false, completed: true },
      { phase: 'Stabilized', active: false, completed: true }
    ]
  }
];

export function Incidents({ onNavigateToDashboard, selectedIncident }: IncidentsProps) {
  const [selectedIncidentState, setSelectedIncidentState] = useState<Incident | null>(selectedIncident);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredIncidents = mockIncidents.filter(incident => {
    const matchesSearch = 
      incident.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      incident.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      incident.sourceIp.includes(searchQuery) ||
      incident.user.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <header className="bg-white border-b border-neutral-200">
        <div className="max-w-[1400px] mx-auto px-6 py-4 flex items-center gap-6">
          <button
            onClick={onNavigateToDashboard}
            className="flex items-center gap-2 px-3 py-1.5 text-sm text-neutral-600 hover:text-neutral-900 border border-neutral-300 rounded-md hover:border-neutral-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </button>
          
          <div>
            <h1 className="text-xl font-semibold text-neutral-900">Incidents</h1>
            <p className="text-sm text-neutral-500">{filteredIncidents.length} total incidents</p>
          </div>
        </div>
      </header>

      <div className="max-w-[1400px] mx-auto px-6 py-8">
        <div className="grid grid-cols-12 gap-6">
          {/* Left: Incidents Table */}
          <div className={selectedIncidentState ? 'col-span-5' : 'col-span-12'}>
            {/* Search */}
            <div className="mb-4 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
              <input
                type="text"
                placeholder="Search incidents..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-sm bg-white border border-neutral-300 rounded-md focus:outline-none focus:border-neutral-400"
              />
            </div>

            {/* Incidents Table */}
            <div className="bg-white border border-neutral-200 rounded-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-neutral-50 border-b border-neutral-200">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-neutral-500 uppercase">Severity</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-neutral-500 uppercase">Type</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-neutral-500 uppercase">Status</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-neutral-500 uppercase">Source</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-neutral-500 uppercase">Started</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredIncidents.map((incident) => (
                    <tr
                      key={incident.id}
                      onClick={() => setSelectedIncidentState(incident)}
                      className={`border-b border-neutral-100 cursor-pointer hover:bg-neutral-50 transition-colors ${
                        selectedIncidentState?.id === incident.id ? 'bg-neutral-50' : ''
                      }`}
                    >
                      <td className="px-4 py-3">
                        <span className={`inline-block px-2 py-0.5 text-xs font-medium rounded ${
                          incident.severity === 'SEV1'
                            ? 'bg-red-100 text-red-700'
                            : incident.severity === 'SEV2'
                            ? 'bg-amber-100 text-amber-700'
                            : 'bg-blue-100 text-blue-700'
                        }`}>
                          {incident.severity}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm text-neutral-900">{incident.type}</td>
                      <td className="px-4 py-3">
                        <span className={`text-xs ${
                          incident.status === 'Active' ? 'text-red-600' :
                          incident.status === 'Contained' ? 'text-amber-600' :
                          'text-emerald-600'
                        }`}>
                          {incident.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm font-mono text-neutral-600">{incident.sourceIp}</td>
                      <td className="px-4 py-3 text-sm text-neutral-600">
                        {new Date(incident.startTime).toLocaleTimeString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right: Incident Details */}
          {selectedIncidentState && (
            <div className="col-span-7">
              <IncidentDetails incident={selectedIncidentState} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
