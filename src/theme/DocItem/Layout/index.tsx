import React from 'react';
import Layout from '@theme-original/DocItem/Layout';
import HyvorTalkComponent from '@site/src/components/HyvorTalk';

export default function LayoutWrapper(props) {
  return (
    <>
      <Layout {...props} />
      <HyvorTalkComponent />
    </>
  );
}