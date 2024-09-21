import React from "react";
import LinkedIn from "../../Icons/LinkedIn";
import RSS from "../../Icons/RSS";
import Github from "../../Icons/Github";
import Teams from "../../Icons/Teams";
import Gmail from "../../Icons/Gmail";
import BannerImage from "@site/static/img/home-hero-gray.jpg";
import { HiEye, HiInformationCircle } from "react-icons/hi";
import { Alert } from "flowbite-react";

export default function Hero() {
  return (

    <section

      className={`lg:bg-[url('/static/img/home-hero-gray.jpg')] bg-no-repeat bg-cover bg-center bg-white lg:bg-gray-700 lg:h-[calc(100vh-100px)]`}
    >
      {/* <Alert additionalContent="We are currently working on improving this site. Some features may be incomplete or unavailable. Thank you for your patience and understanding." color="warning" rounded icon={HiInformationCircle}>
        <span className="font-medium">Notice</span> This Website is Under Development
      </Alert> */}
      <div className="lg:hidden relative w-full h-[270px]">
        <img src={BannerImage} className=" object-cover w-full h-full" />
      </div>
      <div className="flex w-[343px] md:w-[500px] h-full lg:w-auto mx-auto md:max-w-screen-xl  ">
        <div className="mb-6 h-min mt-6 md:mt-[74px] pt-[40px] lg:max-w-[555px] lg:mb-0 bg-white md:pt-16 pb-8 md:pb-12 px-6 md:px-12 rounded-lg shadow-md lg:shadow-none z-1">
          <h1 className="mb-8 text-4xl font-extrabold tracking-tight leading-none md:text-5xl text-gray-950">
            Turning Vision into Innovation</h1>
          <p className="font-regular text-gray-500 lg:mb-12 text-[18px] md:text-lg lg:text-xl">
            Join Tobias Schuele at InnovationForge, where expertise in Microsoft 365 and cloud automation helps transform your tech landscape.
          </p>
          <div className="pt-8 border-b-0 border-x-0 border-t border-solid border-gray-900 border-opacity-10 flex justify-between">
            <a
              href="https://www.linkedin.com/in/tobias-schuele/"
              className="w-14 h-14 bg-[#111928] flex justify-center items-center text-white rounded-md"
            >
              <LinkedIn className="w-4 h-4" />
            </a>
            <a
              href="https://innovationforge.com/blog/rss.xml"
              className="w-14 h-14 bg-[#111928] flex justify-center items-center text-white rounded-md"
            >
              <RSS className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/InnovationForge-com"
              className="w-14 h-14 bg-[#111928] flex justify-center items-center text-white rounded-md"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://teams.microsoft.com/l/chat/0/0?users=tobias@innovationforge.com"
              className="w-14 h-14 bg-[#111928] flex justify-center items-center rounded-md text-transparent"
            >
              <Teams className="w-[26px] h-[22px]" />
            </a>
            <a
              href="mailto:tobias@innovationforge.com"
              className="w-14 h-14 bg-[#111928] flex justify-center items-center text-white rounded-md"
            >
              <Gmail className="w-[22px] h-[22px]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
