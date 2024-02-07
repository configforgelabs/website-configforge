import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import ContactAddressSection from "@site/src/components/ContactUs/ContactAddressSection";
import ContactBannerSection from "@site/src/components/ContactUs/ContactBannerSection";
import ContactFromSection from "@site/src/components/ContactUs/ContactFromSection";
import Layout from "@theme/Layout";
import React from "react";

const ContactUs = () => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <ContactBannerSection />
      <div className="px-5 lg:px-0">
        <ContactFromSection />
      </div>
      <ContactAddressSection />
    </Layout>
  );
};

export default ContactUs;
