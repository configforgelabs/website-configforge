import React from "react";

const ContactBannerSection = () => {
  return (
    <div className="bg-[url('/static/img/contact_page_banner.png')] bg-no-repeat bg-cover bg-center h-[608px] w-full text-center">
      <h1 className="mt-[85px] text-4xl text-white font-extra-bold">Contact</h1>
      <p className="mt-4 px-2 md:w-[674px] mx-auto text-gray-400 text-xl">
        We use an agile approach to test assumptions and connect with the needs
        of your audience early and often.
      </p>
    </div>
  );
};

export default ContactBannerSection;
