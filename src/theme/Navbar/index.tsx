import React from 'react';
import OriginalNavbar from '@theme-original/Navbar';
import { twMerge } from 'tailwind-merge';

export default function Navbar(props) {
  return (
    <>
      {/* Construction Notice Banner */}
      <div className={twMerge(
        "bg-yellow-400 dark:bg-yellow-600",
        "border-b-2 border-yellow-500 dark:border-yellow-700",
        "text-yellow-900 dark:text-yellow-100",
        "px-4 py-3",
        "text-center",
        "shadow-lg"
      )}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-3">
            <span className="text-xl" role="img" aria-label="construction">🚧</span>
            <span className="text-sm font-semibold bg-yellow-900/10 dark:bg-yellow-100/20 px-3 py-1.5 rounded-full">
              ConfigForge is still under construction
            </span>
            <span className="text-xl" role="img" aria-label="construction">🚧</span>
          </div>
        </div>
      </div>
      
      {/* Original Navbar */}
      <OriginalNavbar {...props} />
    </>
  );
}
