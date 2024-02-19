import React from "react";
import LinkedIn from "../../Icons/LinkedIn";
import RSS from "../../Icons/RSS";
import Github from "../../Icons/Github";
import Teams from "../../Icons/Teams";
import Gmail from "../../Icons/Gmail";
import BannerImage from "@site/static/img/home-hero.png";

export default function Hero() {
  return (
    <section
      className={`lg:bg-[url('/static/img/home-hero.png')] bg-no-repeat bg-cover bg-center bg-white lg:bg-gray-700 h-screen`}
    >
      <div className="lg:hidden relative w-full h-[270px]">
        <img src={BannerImage} className=" object-cover w-full h-full" />
      </div>
      <div className="flex items-center py-8 px-4 w-[343px] md:w-[500px] h-full lg:w-auto mx-auto md:max-w-screen-xl lg:pt-[76px] lg:pb-[116px]  py-16 z-1 shadow-sm rounded-md lg:shadow-none">
        <div className="mb-6 pt-[40px] lg:max-w-[455px] lg:mb-0 bg-white md:pt-16 md:pb-12 md:px-12 rounded-lg">
          <h1 className="mb-8 text-4xl font-extrabold tracking-tight leading-none md:text-5xl text-gray-950">
            Hello! I’m Tobias Schüle and it’s my blog
          </h1>
          <p className="font-regular text-gray-500 lg:mb-12 text-[18px] md:text-lg lg:text-xl">
            Here I will share the problems and solutions encountered by various
            technology stacks.
          </p>
          <div className="pt-8 border-b-0 border-x-0 border-t border-solid border-gray-900 border-opacity-10 flex justify-between">
            <a
              href="https://example.com"
              className="w-14 h-14 bg-[#111928] flex justify-center items-center text-white rounded-md"
            >
              <LinkedIn className="w-4 h-4" />
            </a>
            <a
              href="https://example.com"
              className="w-14 h-14 bg-[#111928] flex justify-center items-center text-white rounded-md"
            >
              <RSS className="w-4 h-4" />
            </a>
            <a
              href="https://example.com"
              className="w-14 h-14 bg-[#111928] flex justify-center items-center text-white rounded-md"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://example.com"
              className="w-14 h-14 bg-[#111928] flex justify-center items-center rounded-md text-transparent"
            >
              <Teams className="w-[26px] h-[22px]" />
            </a>
            <a
              href="https://example.com"
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
