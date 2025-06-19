import React, { useState } from 'react';

export default function TestButton() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center space-y-3">
      <button
        onClick={() => setCount(count + 1)}
        className="bg-primary-900 hover:bg-primary-800 dark:bg-primary-100 dark:hover:bg-primary-200 text-white dark:text-primary-900 px-4 py-2 rounded-md font-medium transition-colors duration-200 border border-primary-300 dark:border-primary-700"
      >
        Clicked {count} times
      </button>
      <p className="text-primary-600 dark:text-primary-400 text-sm">
      </p>
    </div>
  );
} 
