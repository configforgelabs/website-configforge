import React from "react";

export default function BookingCallout() {
  return (
    <div className="my-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-800 rounded-xl">
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0">
          <svg className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div className="flex-1">
          <p className="text-gray-800 dark:text-gray-200">
            <strong>Need hands-on help?</strong> If you want me to apply this in your environment, <a 
              href="https://opsora.io/contact?utm_source=configforge&utm_medium=callout&utm_campaign=book"
              className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
            >
              <strong>book a consultation</strong>
            </a> (via Opsora).
          </p>
        </div>
      </div>
    </div>
  );
}
