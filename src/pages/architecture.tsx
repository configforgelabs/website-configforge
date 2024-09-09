import React from "react";
import { RoundedIconsFeatureSection } from "../components/flowbite/RoundedIconsFeatureSection";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

const featuresData = [
    {
        title: "Automatic Categorization",
        description: "Flow Budget automatically categorizes your income and expenses, making it easy to track where your money is going.",
        iconPath: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
    },
    {
        title: "Budgeting Methods",
        description: "The app offers a variety of budgeting methods, such as the 50/30/20 rule, to help users find the approach that works best for them.",
        iconPath: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z",
    },
    {
        title: "Budget Goals",
        description: "Set budget goals for each category and get real-time updates on how close you are to reaching them.",
        iconPath: "M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z",
    },
    {
        title: "Reports and Analytics",
        description: "We provide detailed reports and analytics that help users understand their spending habits and make more informed financial decisions.",
        iconPath: "M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z",
    },
    {
        title: "Cloud Synchronization",
        description: "Sync your data across multiple devices, so you can access your budget and expenses from anywhere, at any time, and on any device.",
        iconPath: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
    },
    {
        title: "Alerts and Notifications",
        description: "Flow budget will alert you if you are over-budgeting and remind you of upcoming bills, so you'll never miss a payment again.",
        iconPath: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9",
    },
    // Additional features can be added here
];

function App() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={`M365 Architecture Design`}
            description="Description will go into a meta tag in <head />"
        >
            <RoundedIconsFeatureSection
                title="Microsoft 365 Architecture Design"
                description="We tailor Microsoft 365 solutions to align with your business goals, ensuring a scalable and secure infrastructure that enhances collaboration and productivity across your organization."
                features={featuresData}
                buttonText="Get a demo"
                buttonLink="#"
            />
        </Layout>
    );
}

export default App;
