import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import FeatureList from "../components/About/FeatureList";
import Overview from "../components/About/Overview";
import Hero from "../components/About/Hero";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <Hero />
      <Overview />
      <FeatureList />
    </Layout>
  );
}
