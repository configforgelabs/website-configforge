import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import React from "react";
import ProjectSection from "../components/flowbite/AlternateSections";

const Services: React.FC = () => {
    const { siteConfig } = useDocusaurusContext();
    const projects = [
        {
            title: "Microsoft 365 Architecture Design",
            description: "We tailor Microsoft 365 solutions to align with your business goals, ensuring a scalable and secure infrastructure that enhances collaboration and productivity across your organization.",
            imageSrc: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/flowbite-dashboard.jpg",
            darkImageSrc: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/flowbite-dashboard-dark.jpg",
            technologies: [
                { name: "HTML5", icon: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/html5.svg" },
                { name: "CSS3", icon: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/css-3.svg" },
                { name: "JavaScript", icon: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/javascript.svg" },
                { name: "Tailwind CSS", icon: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/tailwind-css.svg" },
                { name: "TypeScript", icon: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/typescript.svg" },
            ],
            linkUrl: "/architecture"
        },
        {
            title: "Agency Landing Page",
            link: "https://themesberg.com",
            linkText: "https://themesberg.com",
            description: "Flowbite helps you connect with friends, family and communities of people who share your interests. Connecting with your friends and family as well as discovering new ones is easy with features like Groups.",
            imageSrc: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/agency-landing-page.jpg",
            darkImageSrc: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/agency-landing-page-dark.jpg",
            technologies: [
                { name: "WordPress", icon: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/wordpress.svg" },
                { name: "HTML5", icon: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/html5.svg" },
                { name: "CSS3", icon: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/css-3.svg" },
                { name: "WooCommerce", icon: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/woocommerce.svg" },
            ],
            linkUrl: "https://themesberg.com/landing-page-case-study"
        },
        {
            title: "Mail management system",
            link: "https://ui.glass",
            linkText: "https://ui.glass",
            description: "Flowbite helps you connect with friends, family and communities of people who share your interests. Connecting with your friends and family as well as discovering new ones is easy with features like Groups.",
            imageSrc: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/mail-management-system.jpg",
            darkImageSrc: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/mail-management-system-dark.jpg",
            technologies: [
                { name: "TypeScript", icon: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/typescript.svg" },
                { name: "Java", icon: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/java.svg" },
                { name: "Tailwind CSS", icon: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/tailwind-css.svg" },
                { name: "React", icon: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/react.svg" },
                { name: "HTML5", icon: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/html5.svg" },
                { name: "Amazon Web Services", icon: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/amazon-web-services.svg" },
            ],
            linkUrl: "https://ui.glass/mail-management-case-study"
        },
    ];

    return (
        <Layout
            title={`${siteConfig.title}`}
            description="Description will go into a meta tag in <head />"
        >
            <section className="bg-white antialiased dark:bg-gray-900">
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6 lg:py-24">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                            Our Services
                        </h2>
                        <p className="mt-4 text-base font-normal text-gray-500 dark:text-gray-400 sm:text-xl">
                            Select one of our services and find out how we can help you.
                        </p>
                    </div>
                    <div className="mt-12 space-y-16 sm:mt-16">
                        {projects.map((project, index) => (
                            <ProjectSection key={index} reverse={index % 2 !== 0} {...project} />
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Services;