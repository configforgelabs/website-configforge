import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import Hero from "../components/Home/Hero";
import LatestPosts from "../components/Home/LatestPosts";
import KBHighlights from "../components/Home/KBHighlights";
import ValueProposition from "../components/Home/ValueProposition";
import ServicesOverview from "../components/Home/ServicesOverview";
import Testimonials from "../components/Home/Testimonials";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`ConfigForge - Microsoft 365 and Azure Guides`}
      description="Practical docs, runbooks, and references for Microsoft 365 and Azure work by Opsora"
    >
      <Hero />
      <LatestPosts />
      <KBHighlights />
      <ValueProposition />
      {/* <ServicesOverview /> */}
      {/* <Testimonials /> */}
    </Layout>
  );
}
