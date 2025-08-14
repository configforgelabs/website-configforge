import React from 'react';
import OriginalNavbar from '@theme-original/Navbar';
import { twMerge } from 'tailwind-merge';

export default function Navbar(props) {
  return (
    <>
      {/* Construction Notice Banner */}
      <div className={twMerge(
        "bg-yellow-50 dark:bg-yellow-900/20",
        "border-b border-yellow-200 dark:border-yellow-800",
        "text-yellow-800 dark:text-yellow-200",
        "px-4 py-2",
        "text-center text-sm"
      )}>
        <div className="flex items-center justify-center gap-2">
          <span className="text-lg" role="img" aria-label="construction">🚧</span>
          <span>This page is still under construction</span>
          <span className="text-lg" role="img" aria-label="construction">🚧</span>
        </div>
      </div>
      
      {/* Original Navbar */}
      <OriginalNavbar {...props} />
    </>
  );
}
