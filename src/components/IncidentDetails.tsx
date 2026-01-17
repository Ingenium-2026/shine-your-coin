import { CheckCircle, Circle } from 'lucide-react';
import type { Incident } from '../App';

interface IncidentDetailsProps {
  incident: Incident;
}

export function IncidentDetails({ incident }: IncidentDetailsProps) {
  return (
    <div className="space-y-6">
      {/* Incident Summary */}
      <div className="p-5 bg-white border border-neutral-200 rounded-lg">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold text-neutral-900 mb-1">{incident.type}</h3>
            <p className="text-sm text-neutral-500 font-mono">{incident.id}</p>
          </div>
          <span className={`px-2 py-1 text-xs font-medium rounded ${
            incident.severity === 'SEV1'
              ? 'bg-red-100 text-red-700'
              : incident.severity === 'SEV2'
              ? 'bg-amber-100 text-amber-700'
              : 'bg-blue-100 text-blue-700'
          }`}>
            {incident.severity}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-neutral-500 mb-1">Source IP</p>
            <p className="font-mono text-neutral-900">{incident.sourceIp}</p>
          </div>
          <div>
            <p className="text-neutral-500 mb-1">User</p>
            <p className="font-mono text-neutral-900">{incident.user}</p>
          </div>
          <div>
            <p className="text-neutral-500 mb-1">Started</p>
            <p className="text-neutral-900">{incident.startTime.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-neutral-500 mb-1">Status</p>
            <p className={`font-medium ${
              incident.status === 'Active' ? 'text-red-600' :
              incident.status === 'Contained' ? 'text-amber-600' :
              'text-emerald-600'
            }`}>
              {incident.status}
            </p>
          </div>
        </div>
      </div>

      {/* Detection Reasons */}
      <div>
        <h4 className="text-sm font-medium text-neutral-500 mb-3 uppercase tracking-wide">
          Detection Reasons
        </h4>
        <div className="space-y-3">
          {incident.reasons.map((reason, index) => (
            <div key={index} className="p-4 bg-white border border-neutral-200 rounded-lg">
              <h5 className="font-medium text-neutral-900 mb-3">{reason.rule}</h5>
              <div className="grid grid-cols-2 gap-3 text-sm mb-3">
                <div>
                  <span className="text-neutral-500">Observed: </span>
                  <span className="text-red-600 font-medium">{reason.observed}</span>
                </div>
                <div>
                  <span className="text-neutral-500">Threshold: </span>
                  <span className="text-neutral-900">{reason.threshold}</span>
                </div>
                <div>
                  <span className="text-neutral-500">Time Window: </span>
                  <span className="text-neutral-900">{reason.timeWindow}</span>
                </div>
                <div>
                  <span className="text-neutral-500">Delta: </span>
                  <span className="text-red-600 font-medium">{reason.delta}</span>
                </div>
              </div>
              <div className="p-3 bg-neutral-50 rounded">
                <p className="text-xs text-neutral-600 leading-relaxed">{reason.explanation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div>
        <h4 className="text-sm font-medium text-neutral-500 mb-3 uppercase tracking-wide">
          Timeline
        </h4>
        <div className="p-5 bg-white border border-neutral-200 rounded-lg">
          <div className="flex items-center justify-between">
            {incident.timeline.map((phase, index) => (
              <div key={index} className="flex-1 flex items-center">
                <div className="flex flex-col items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
                    phase.completed
                      ? 'bg-emerald-50 border-emerald-500'
                      : phase.active
                      ? 'bg-neutral-900 border-neutral-900'
                      : 'bg-white border-neutral-300'
                  }`}>
                    {phase.completed ? (
                      <CheckCircle className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Circle className={`w-4 h-4 ${phase.active ? 'text-white' : 'text-neutral-400'}`} />
                    )}
                  </div>
                  <p className={`mt-2 text-xs font-medium ${
                    phase.completed ? 'text-emerald-600' :
                    phase.active ? 'text-neutral-900' :
                    'text-neutral-400'
                  }`}>
                    {phase.phase}
                  </p>
                </div>
                {index < incident.timeline.length - 1 && (
                  <div className={`flex-1 h-0.5 mx-2 ${
                    phase.completed ? 'bg-emerald-500' : 'bg-neutral-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Actions Taken */}
      <div>
        <h4 className="text-sm font-medium text-neutral-500 mb-3 uppercase tracking-wide">
          Actions Taken
        </h4>
        <div className="space-y-2">
          {incident.actions.map((action, index) => (
            <div key={index} className="flex items-start gap-3 p-3 bg-white border border-neutral-200 rounded-lg">
              <div className="flex-1">
                <p className="text-sm text-neutral-900">{action.action}</p>
                <p className="text-xs text-neutral-500 mt-0.5">{action.timestamp.toLocaleString()}</p>
              </div>
              <span className={`px-2 py-0.5 text-xs font-medium rounded ${
                action.type === 'Auto'
                  ? 'bg-neutral-100 text-neutral-700'
                  : 'bg-blue-100 text-blue-700'
              }`}>
                {action.type}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Mitigations */}
      <div className="p-5 bg-emerald-50 border border-emerald-200 rounded-lg">
        <h4 className="text-sm font-medium text-neutral-900 mb-4">Active Mitigations</h4>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-neutral-600 mb-1">Blocked IPs</p>
            <p className="text-lg font-semibold text-neutral-900">1</p>
          </div>
          <div>
            <p className="text-neutral-600 mb-1">Isolated Endpoints</p>
            <p className="text-lg font-semibold text-neutral-900">1</p>
          </div>
          <div>
            <p className="text-neutral-600 mb-1">Rate Limits</p>
            <p className="text-lg font-semibold text-neutral-900">Active</p>
          </div>
          <div>
            <p className="text-neutral-600 mb-1">System Status</p>
            <p className="text-sm font-medium text-emerald-700">Operational</p>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-emerald-200">
          <p className="text-xs text-emerald-800">
            ✓ Affected component isolated • Other services operational
          </p>
        </div>
      </div>
    </div>
  );
}
