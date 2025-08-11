import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import Hero from "../components/Home/Hero";
import RelationshipStrip from "../components/Home/RelationshipStrip";
import LatestPosts from "../components/Home/LatestPosts";
import KBHighlights from "../components/Home/KBHighlights";
import ValueProposition from "../components/Home/ValueProposition";
import ServicesOverview from "../components/Home/ServicesOverview";
import Testimonials from "../components/Home/Testimonials";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "ConfigForge",
    "url": "https://configforge.opsora.io",
    "publisher": {
      "@type": "Organization",
      "name": "Opsora",
      "url": "https://opsora.io"
    }
  };

  return (
    <Layout
      title={`ConfigForge - Microsoft 365 and Azure Guides`}
      description="Practical docs, runbooks, and references for Microsoft 365 and Azure work by Opsora"
    >
      <Hero />
      <LatestPosts />
      {/* <ServicesOverview /> */}
      <LatestDocs />
      {/* <Testimonials /> */}
    </Layout>
  );
}
