import React from 'react';
import Head from '@docusaurus/Head';

// Default implementation, that you can customize
export default function Root({children}) {
  return (
    <>
      <Head>
        <meta name="theme-color" content="#2563EB" />
        <meta name="msapplication-navbutton-color" content="#2563EB" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </Head>
      {children}
    </>
  );
}
