import { useState, useEffect } from 'react';

interface TelemetryFeedProps {
  demoState: 'normal' | 'credential-stuffing' | 'data-exfiltration';
}

interface LogEntry {
  id: string;
  timestamp: string;
  level: 'info' | 'warning' | 'error';
  message: string;
}

export function TelemetryFeed({ demoState }: TelemetryFeedProps) {
  const [logs, setLogs] = useState<LogEntry[]>([]);

  useEffect(() => {
    const generateLog = (): LogEntry => {
      const now = new Date();
      const timestamp = now.toLocaleTimeString();

      const normalLogs = [
        { level: 'info' as const, message: 'User authentication successful' },
        { level: 'info' as const, message: 'Query executed successfully (12ms)' },
        { level: 'info' as const, message: 'Payment processed' },
        { level: 'info' as const, message: 'Health check passed' },
      ];

      const credentialStuffingLogs = [
        { level: 'warning' as const, message: 'High velocity login attempts detected' },
        { level: 'error' as const, message: 'Credential stuffing attack - 2847 req/min' },
        { level: 'error' as const, message: 'IP 203.45.167.89 blocked' },
        { level: 'warning' as const, message: 'Isolating /auth/login endpoint' },
        { level: 'info' as const, message: 'Rate limiting enabled' },
      ];

      const dataExfiltrationLogs = [
        { level: 'warning' as const, message: 'Unusual export volume detected' },
        { level: 'error' as const, message: 'Admin account exporting 4.7 GB (47x normal)' },
        { level: 'error' as const, message: 'Data exfiltration from 198.51.100.42' },
        { level: 'warning' as const, message: 'Rate limiting /data/export' },
        { level: 'info' as const, message: 'Data export isolated' },
      ];

      let logPool = normalLogs;
      if (demoState === 'credential-stuffing') {
        logPool = credentialStuffingLogs;
      } else if (demoState === 'data-exfiltration') {
        logPool = dataExfiltrationLogs;
      }

      const log = logPool[Math.floor(Math.random() * logPool.length)];

      return {
        id: `${Date.now()}-${Math.random()}`,
        timestamp,
        ...log,
      };
    };

    const interval = setInterval(() => {
      const newLog = generateLog();
      setLogs((prev) => [newLog, ...prev].slice(0, 15));
    }, demoState === 'normal' ? 2000 : 1000);

    return () => clearInterval(interval);
  }, [demoState]);

  const getLevelStyle = (level: string) => {
    switch (level) {
      case 'error':
        return 'text-red-600';
      case 'warning':
        return 'text-amber-600';
      default:
        return 'text-neutral-600';
    }
  };

  return (
    <section>
      <h2 className="text-sm font-medium text-neutral-500 mb-4 uppercase tracking-wide flex items-center gap-2">
        <span>Activity Feed</span>
        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
      </h2>

      <div className="bg-white border border-neutral-200 rounded-lg p-4 h-64 overflow-auto">
        <div className="space-y-2 font-mono text-xs">
          {logs.map((log) => (
            <div key={log.id} className="flex items-start gap-3">
              <span className="text-neutral-400 whitespace-nowrap">{log.timestamp}</span>
              <span className={`font-medium uppercase ${getLevelStyle(log.level)} whitespace-nowrap`}>
                [{log.level}]
              </span>
              <span className="text-neutral-700">{log.message}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
