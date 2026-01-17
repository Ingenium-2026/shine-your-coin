import { LineChart, Line, ResponsiveContainer } from 'recharts';
import type { ServiceStatus } from '../App';

interface ServiceCardProps {
  service: ServiceStatus;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const data = service.metrics.map((value, i) => ({ value, index: i }));

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'Healthy':
        return {
          border: 'border-neutral-200',
          bg: 'bg-white',
          statusColor: 'text-emerald-600',
          dotColor: 'bg-emerald-500',
          lineColor: '#10b981'
        };
      case 'Suspicious':
        return {
          border: 'border-amber-200',
          bg: 'bg-amber-50',
          statusColor: 'text-amber-700',
          dotColor: 'bg-amber-500',
          lineColor: '#f59e0b'
        };
      case 'Isolated':
        return {
          border: 'border-red-200',
          bg: 'bg-red-50',
          statusColor: 'text-red-700',
          dotColor: 'bg-red-500',
          lineColor: '#ef4444'
        };
      default:
        return {
          border: 'border-neutral-200',
          bg: 'bg-white',
          statusColor: 'text-neutral-600',
          dotColor: 'bg-neutral-400',
          lineColor: '#6b7280'
        };
    }
  };

  const style = getStatusStyle(service.status);

  return (
    <div className={`p-5 rounded-lg border ${style.border} ${style.bg}`}>
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-medium text-neutral-900 mb-1">{service.name}</h3>
          <div className="flex items-center gap-2">
            <div className={`w-1.5 h-1.5 rounded-full ${style.dotColor}`} />
            <span className={`text-sm ${style.statusColor}`}>
              {service.status}
            </span>
          </div>
        </div>
      </div>

      <div className="h-16 -mx-2">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <Line
              type="monotone"
              dataKey="value"
              stroke={style.lineColor}
              strokeWidth={1.5}
              dot={false}
              isAnimationActive={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {service.status === 'Isolated' && (
        <div className="mt-4 pt-4 border-t border-red-200">
          <p className="text-xs text-red-700">
            Component isolated • Other services operational
          </p>
        </div>
      )}
    </div>
  );
}
