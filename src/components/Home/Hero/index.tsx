import React from "react";
import LinkedIn from "../../Icons/LinkedIn";
import RSS from "../../Icons/RSS";
import Github from "../../Icons/Github";
import Teams from "../../Icons/Teams";
import Gmail from "../../Icons/Gmail";

export default function Hero() {
  return (
    <section
      className={`bg-[url('/static/img/home-hero.png')] bg-no-repeat bg-cover bg-center bg-gray-700`}
    >
      <div className="relative py-8 px-4 mx-auto max-w-screen-xl lg:pt-[76px] lg:pb-[116px]  py-16 z-1">
        <div className="mb-6 max-w-[432px] lg:mb-0 bg-white pt-16 pb-12 px-12 rounded-lg">
          <h1 className="mb-8 text-4xl font-extrabold tracking-tight leading-none md:text-5xl">
            Hello! I’m Tobias Schüle and it’s my blog
          </h1>
          <p className="font-light text-gray-500 lg:mb-12 md:text-lg lg:text-xl">
            Here I will share the problems and solutions encountered by various
            technology stacks.
          </p>
          <div className="pt-8 border-b-0 border-x-0 border-t border-solid flex justify-between">
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
