'use client';

import { useState } from 'react';

import { Value } from '@udecode/plate';

function Sidebar({
  debugValue,
  html,
}: {
  debugValue: Value;
  html: string;
}) {
  const [jsonCollapsed, setJsonCollapsed] = useState(false);
  const [htmlCollapsed, setHtmlCollapsed] = useState(false);

  return (
    <div className="p-4 overflow-auto h-full">
      <h3
        className={`text-lg font-semibold mb-2 cursor-pointer hover:text-blue-600 flex items-center ${
          jsonCollapsed ? 'text-gray-500' : 'text-gray-900'
        }`}
        onClick={() => setJsonCollapsed(!jsonCollapsed)}
      >
        <span className="mr-2">{jsonCollapsed ? '►' : '▼'}</span>
        Document JSON
      </h3>
      <div
        className={`mb-6 transition-all duration-200 ${
          jsonCollapsed ? 'hidden' : 'block'
        }`}
      >
        <pre className="bg-gray-50 p-4 rounded-lg overflow-x-auto">
          <code className="text-sm">{JSON.stringify(debugValue, null, 2)}</code>
        </pre>
      </div>

      <h3
        className={`text-lg font-semibold mb-2 cursor-pointer hover:text-blue-600 flex items-center ${
          htmlCollapsed ? 'text-gray-500' : 'text-gray-900'
        }`}
        onClick={() => setHtmlCollapsed(!htmlCollapsed)}
      >
        <span className="mr-2">{htmlCollapsed ? '►' : '▼'}</span>
        Output HTML
      </h3>
      <div
        className={`transition-all duration-200 ${
          htmlCollapsed ? 'hidden' : 'block'
        }`}
      >
        <pre className="bg-gray-50 p-4 rounded-lg overflow-x-auto">
          <code className="text-sm">{html}</code>
        </pre>
      </div>
    </div>
  );
}

export default Sidebar; 