import React from "react";
import Container from "../layout/Container";
import contactInfo from "@site/src/constant/contactInfo.constant";
import { LuArrowRight } from "react-icons/lu";
import useBaseUrl from "@docusaurus/useBaseUrl";

type TConatctInfoCard = {
  icon: string;
  title: string;
  about: string;
  address: string;
};

const ContactInfoCard = ({ icon, title, about, address }: TConatctInfoCard) => {
  return (
    <div className=" text-center">
      <div className="w-[64px] h-[64px] relative mx-auto">
        <img src={useBaseUrl(icon)} className=" object-contain w-full h-full" />
      </div>
      <h3 className="font-bold text-xl mb-0 mt-4">{title}</h3>
      <p className=" w-[328px] mx-auto text-gray-500 text-base mb-0 mt-1">
        {about}
      </p>
      <div className="mt-1">
        {title == "Support" ? (
          <button className="w-[134px] h-[34px] text-primary-700 border bg-transparent border-primary-700 rounded-lg flex gap-x-2 items-center mx-auto justify-center cursor-pointer">
            <span>{address}</span>
            <LuArrowRight />
          </button>
        ) : (
          <span className="text-sm font-bold text-primary-700">{address}</span>
        )}
      </div>
    </div>
  );
};

const ContactAddressSection = () => {
  return (
    <Container className="mt-24 mb-[123px] mx-auto">
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-[64px] ">
        {contactInfo.map((contact) => (
          <ContactInfoCard
            icon={contact.icon}
            title={contact.title}
            about={contact.about}
            address={contact.address}
          />
        ))}
      </div>
    </Container>
  );
};

export default ContactAddressSection;
