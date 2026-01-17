interface DemoControlsProps {
  autoResponse: boolean;
  onAutoResponseToggle: () => void;
  onDemoAction: (action: string) => void;
  currentState: 'normal' | 'credential-stuffing' | 'data-exfiltration';
}

export function DemoControls({ autoResponse, onAutoResponseToggle, onDemoAction, currentState }: DemoControlsProps) {
  return (
    <section className="p-5 bg-white border border-neutral-200 rounded-lg">
      <h2 className="text-sm font-medium text-neutral-500 mb-4 uppercase tracking-wide">
        Demo Controls
      </h2>

      <div className="flex flex-wrap gap-2 mb-5">
        <button
          onClick={() => onDemoAction('normal')}
          disabled={currentState === 'normal'}
          className={`px-4 py-2 text-sm font-medium rounded-md border transition-colors ${
            currentState === 'normal'
              ? 'bg-neutral-900 text-white border-neutral-900'
              : 'bg-white text-neutral-700 border-neutral-300 hover:border-neutral-400'
          } disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          Normal Traffic
        </button>

        <button
          onClick={() => onDemoAction('credential-stuffing')}
          disabled={currentState === 'credential-stuffing'}
          className={`px-4 py-2 text-sm font-medium rounded-md border transition-colors ${
            currentState === 'credential-stuffing'
              ? 'bg-neutral-900 text-white border-neutral-900'
              : 'bg-white text-neutral-700 border-neutral-300 hover:border-neutral-400'
          } disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          Credential Stuffing
        </button>

        <button
          onClick={() => onDemoAction('data-exfiltration')}
          disabled={currentState === 'data-exfiltration'}
          className={`px-4 py-2 text-sm font-medium rounded-md border transition-colors ${
            currentState === 'data-exfiltration'
              ? 'bg-neutral-900 text-white border-neutral-900'
              : 'bg-white text-neutral-700 border-neutral-300 hover:border-neutral-400'
          } disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          Data Exfiltration
        </button>

        <button
          onClick={() => onDemoAction('reset')}
          className="px-4 py-2 text-sm font-medium rounded-md border bg-white text-neutral-700 border-neutral-300 hover:border-neutral-400 transition-colors"
        >
          Reset
        </button>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-neutral-200">
        <div className="flex items-center gap-3">
          <span className="text-sm text-neutral-600">Auto Response</span>
          <button
            onClick={onAutoResponseToggle}
            className={`relative w-11 h-6 rounded-full transition-colors ${
              autoResponse ? 'bg-neutral-900' : 'bg-neutral-300'
            }`}
          >
            <div
              className={`absolute top-0.5 w-5 h-5 rounded-full bg-white transition-transform ${
                autoResponse ? 'translate-x-5' : 'translate-x-0.5'
              }`}
            />
          </button>
          <span className={`text-sm font-medium ${autoResponse ? 'text-neutral-900' : 'text-neutral-500'}`}>
            {autoResponse ? 'ON' : 'OFF'}
          </span>
        </div>
      </div>
    </section>
  );
}
