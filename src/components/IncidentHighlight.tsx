import { ArrowRight } from 'lucide-react';
import type { Incident } from '../App';

interface IncidentHighlightProps {
  incident: Incident;
  onViewIncident: () => void;
}

export function IncidentHighlight({ incident, onViewIncident }: IncidentHighlightProps) {
  return (
    <div className="p-5 bg-white border border-neutral-200 rounded-lg">
      <div className="flex items-start justify-between mb-4">
        <div>
          <span className="inline-block px-2 py-0.5 text-xs font-medium bg-red-100 text-red-700 rounded mb-2">
            {incident.severity}
          </span>
          <h3 className="font-medium text-neutral-900">{incident.type}</h3>
        </div>
      </div>

      <div className="space-y-2 mb-4 text-sm">
        <div>
          <span className="text-neutral-500">Source: </span>
          <span className="font-mono text-neutral-900">{incident.sourceIp}</span>
        </div>
        <div>
          <span className="text-neutral-500">Status: </span>
          <span className="text-amber-700">{incident.status}</span>
        </div>
      </div>

      {incident.reasons[0] && (
        <div className="p-3 bg-neutral-50 rounded mb-4">
          <p className="text-xs text-neutral-600 leading-relaxed">
            {incident.reasons[0].explanation}
          </p>
        </div>
      )}

      <button
        onClick={onViewIncident}
        className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-neutral-900 text-white text-sm font-medium rounded-md hover:bg-neutral-800 transition-colors"
      >
        <span>View Details</span>
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}
