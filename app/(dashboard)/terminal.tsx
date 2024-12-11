'use client';

import { useState, useEffect } from 'react';
import { Copy, Check } from 'lucide-react';

export function Terminal() {
  const [terminalStep, setTerminalStep] = useState(0);
  const [copied, setCopied] = useState(false);

  const terminalSteps = [
    'git clone https://github.com/leerob/next-saas-starter',
    'pnpm install',
    'pnpm db:setup',
    'pnpm db:migrate',
    'pnpm db:seed',
    'pnpm dev 🎉',
  ];

  // Run effects only in the client environment
  useEffect(() => {
    const timer = setTimeout(() => {
      setTerminalStep((prev) =>
        prev < terminalSteps.length - 1 ? prev + 1 : prev
      );
    }, 500);

    return () => clearTimeout(timer);
  }, [terminalStep]);

  const copyToClipboard = () => {
    if (typeof navigator !== 'undefined') {
      navigator.clipboard.writeText(terminalSteps.join('\n'));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="w-full rounded-lg shadow-lg overflow-hidden bg-gray-900 text-white font-mono text-sm relative">
      <div className="p-4">
        <div className="space-y-2">
          {terminalSteps.map((step, index) => (
            <p
              key={index}
              className={
                index <= terminalStep
                  ? 'text-green-400'
                  : 'text-gray-500'
              }
            >
              {index <= terminalStep ? `$ ${step}` : ''}
            </p>
          ))}
        </div>
        <button
          onClick={copyToClipboard}
          className="mt-4 flex items-center space-x-2 text-sm text-gray-400 hover:text-white focus:outline-none"
        >
          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          <span>{copied ? 'Copied!' : 'Copy'}</span>
        </button>
      </div>
    </div>
  );
}
