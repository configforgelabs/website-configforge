import React from "react";
import Translate from '@docusaurus/Translate';

export default function RelationshipStrip() {
  return (
    <div className="py-12 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="flex items-center justify-center">
            <p className="text-gray-700 dark:text-gray-300">
              <Translate id="strip.opsora.prefix">I do client work under</Translate> <strong>Opsora</strong>.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <p className="text-gray-700 dark:text-gray-300">
              <Translate id="strip.configforge.prefix">ConfigForge is where I publish my</Translate> <strong><Translate id="strip.configforge.strong">knowledge & tools</Translate></strong>.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <p className="text-gray-700 dark:text-gray-300">
              <Translate id="strip.bookMe">Need help?</Translate> <a 
                href="https://opsora.io/contact?utm_source=configforge&utm_medium=strip&utm_campaign=book-me"
                className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
              >
                <strong><Translate id="strip.bookMe.link">Book me</Translate></strong>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
