import React from 'react';
import { Helmet } from 'react-helmet';

// Default implementation, that you can customize
export default function Root({children}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "ConfigForge",
    "description": "Practical docs, runbooks, and references for Microsoft 365 and Azure work",
    "url": "https://configforge.opsora.io",
    "publisher": {
      "@type": "Organization",
      "name": "Opsora",
      "url": "https://opsora.io"
    },
    "author": {
      "@type": "Organization", 
      "name": "Opsora"
    }
  };

  return (
    <>
      <Helmet>
        <meta name="theme-color" content="#2563EB" />
        <meta name="msapplication-navbutton-color" content="#2563EB" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>
      {children}
    </>
  );
}
