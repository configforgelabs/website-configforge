import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";

import Hero from "../components/Home/Hero";
import LatestPosts from "../components/Home/LatestPosts";
import LatestDocs from "../components/Home/LatestDocs";
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
    <>
      <Head>
        <meta name="theme-color" content="#2563EB" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Head>
      <Layout
        title={`ConfigForge · by Opsora`}
        description="Practical docs, runbooks, and references for Microsoft 365 and Azure work by Opsora"
      >
        <Hero />
        <LatestPosts />
        {/* <ServicesOverview /> */}
        <LatestDocs />
        {/* <Testimonials /> */}
      </Layout>
    </>
  );
}
