import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Head from '@docusaurus/Head';
import { translate } from '@docusaurus/Translate';

import Hero from "../components/Home/Hero";
import RelationshipStrip from "../components/Home/RelationshipStrip";
import LatestPosts from "../components/Home/LatestPosts";
import KBHighlights from "../components/Home/KBHighlights";
import ValueProposition from "../components/Home/ValueProposition";
import ServicesOverview from "../components/Home/ServicesOverview";
import Testimonials from "../components/Home/Testimonials";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <>
      <Head>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "ConfigForge",
            "url": "https://configforge.com",
            "publisher": {
              "@type": "Organization",
              "name": "Opsora",
              "url": "https://opsora.io"
            }
          })}
        </script>
      </Head>
      <Layout
        title={translate({
          id: 'home.head.metaTitle',
          message: 'ConfigForge - guides & tools I use in Microsoft 365 and Azure work',
        })}
        description={translate({
          id: 'home.head.metaDescription',
          message: 'I publish practical notes, templates, and small tools from real projects. For hands-on help, you can hire me via Opsora',
        })}
      >
        <Hero />
        <LatestPosts />
        <RelationshipStrip />
        {/* <KBHighlights /> */}
        <ValueProposition />
        {/* <ServicesOverview /> */}
        {/* <Testimonials /> */}
      </Layout>
    </>
  );
}
