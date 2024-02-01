import React from "react";
import LinkedIn from "../../Icons/LinkedIn";

export default function Hero() {
  return (
    <section className="bg-[url('https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/coast-house-view.jpg')] bg-no-repeat bg-cover bg-center bg-gray-700 bg-blend-multiply ">
      <div className="relative py-8 px-4 mx-auto max-w-screen-xl lg:py-16 z-1">
        <div className="mb-6 max-w-[432px] lg:mb-0 bg-white pt-16 pb-12 px-12 rounded-lg">
          <h1 className="mb-8 text-4xl font-extrabold tracking-tight leading-none md:text-5xl">
            Hello! I’m Tobias Schüle and it’s my blog
          </h1>
          <p className="font-light text-gray-500 lg:mb-12 md:text-lg lg:text-xl">
            Here I will share the problems and solutions encountered by various
            technology stacks.
          </p>
          <div className="pt-8 border-b-0 border-x-0 border-t border-solid flex justify-between">
            <div className="w-14 h-14 bg-[#111928] flex justify-center items-center text-white rounded-md">
                <LinkedIn className="w-4 h-4"/>
            </div>
            <div className="w-14 h-14 bg-[#111928] flex justify-center items-center text-white rounded-md">
                <LinkedIn className="w-4 h-4"/>
            </div>
            <div className="w-14 h-14 bg-[#111928] flex justify-center items-center text-white rounded-md">
                <LinkedIn className="w-4 h-4"/>
            </div>
            <div className="w-14 h-14 bg-[#111928] flex justify-center items-center text-white rounded-md">
                <LinkedIn className="w-4 h-4"/>
            </div>
            <div className="w-14 h-14 bg-[#111928] flex justify-center items-center text-white rounded-md">
                <LinkedIn className="w-4 h-4"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
