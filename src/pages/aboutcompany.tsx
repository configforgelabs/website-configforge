import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import FeatureList from "../components/About/FeatureList";
import Overview from "../components/About/Overview";
import Hero from "../components/About/Hero";

export default function Home() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={`${siteConfig.title}`}
            description=""
        >
            <Hero />
            <Overview />
            <FeatureList />
        </Layout>
    );
}
