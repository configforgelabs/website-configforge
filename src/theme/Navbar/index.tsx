import React from 'react';
import OriginalNavbar from '@theme-original/Navbar';
import { twMerge } from 'tailwind-merge';

export default function Navbar(props) {
  return (
    <>
      {/* Construction Notice Banner */}
      <div className={twMerge(
        "bg-orange-600 dark:bg-orange-700",
        "border-b-2 border-orange-600 dark:border-orange-700",
        "text-white dark:text-orange-50",
        "px-4 py-3",
        "text-center",
        "shadow-lg"
      )}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-3">
            <span className="text-xl" role="img" aria-label="construction">🚧</span>
            <span className="text-sm font-semibold bg-black/10 dark:bg-white/20 px-3 py-1.5 rounded-full backdrop-blur-sm">
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
