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
      title={`Contact`}
    // description=""
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
