/**
 * useLogger Hook
 * Provides logging functions that both update UI and browser console
 */

import { createSignal } from '@pulsar-framework/pulsar.dev'

type LogEntry = {
  timestamp: string;
  level: 'log' | 'info' | 'warn' | 'error';
  message: string;
};

export interface ILogger {
  log: (message: string) => void;
  warn: (message: string) => void;
  error: (message: string) => void;
  info: (message: string) => void;
  clear: () => void;
  logs: () => LogEntry[];
}

/**
 * Creates a logger that updates both UI and browser console
 * @param prefix - Optional prefix for console logs (e.g., '[ComponentName]')
 * @returns Logger instance with log methods and logs signal
 */
export function useLogger(prefix?: string): ILogger {
  const [logs, setLogs] = createSignal<LogEntry[]>([]);

  const addLog = (level: LogEntry['level'], message: string) => {
    const timestamp = new Date().toLocaleTimeString('en-US', { hour12: false });
    setLogs((current) => [...current, { timestamp, level, message }]);

    // Also log to browser console
    const consoleMessage = prefix ? `${prefix} ${message}` : message;
    switch (level) {
      case 'error':
        console.error(consoleMessage);
        break;
      case 'warn':
        console.warn(consoleMessage);
        break;
      case 'info':
        console.info(consoleMessage);
        break;
      default:
        console.log(consoleMessage);
    }
  };

  return {
    log: (message: string) => addLog('log', message),
    warn: (message: string) => addLog('warn', message),
    error: (message: string) => addLog('error', message),
    info: (message: string) => addLog('info', message),
    clear: () => setLogs([]),
    logs,
  };
}
