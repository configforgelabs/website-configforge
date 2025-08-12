import React from "react";

const ContactBannerSection = () => {
  return (
    <div className="bg-[url('/static/img/contact_page_banner.jpg')] bg-no-repeat bg-cover bg-center h-[608px] w-full text-center">
      <h1 className="mt-[85px] text-4xl text-white font-extra-bold">Contact</h1>
      <p className="mt-4 px-2 md:w-[974px] mx-auto text-gray-400 text-xl">
        We’re always open to exploring new partnerships and business opportunities.
        If you have a proposal or idea that could lead to mutual success, we’d love to hear from you.
        Whether it’s a question, feedback, or a potential collaboration, please fill out the form below with your details and message.
        Our team will get back to you promptly
      </p>
    </div>
  );
};

export default ContactBannerSection;
