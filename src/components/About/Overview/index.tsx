import React from "react";

export default function Overview() {
  return (
    <div className="bg-[#F9FAFB]">
      <div className="relative py-24 px-4 mx-auto max-w-screen-xl container ">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          <div className="flex flex-col space-y-4">
            <div className="text-3xl lg:text-4xl font-extra-bold text-gray-900">
              <span className="text-primary-700">Hi.</span> I’m Tobias Schuele.
            </div>
            <div className="text-gray-500 text-[18px]">
              I’ve spent years providing technical solutions to leading
              businesses, building successful cloud platforms, and automations
              for global businesses.
            </div>
          </div>
          <div className="flex flex-col space-y-4 text-gray-500 text-[18px]">
            <div className="text-lg mb-4">
              I believe technology should work for businesses. It should make
              life simple. Yet technology is painfully time-consuming, difficult
              to understand, and hard to execute.
            </div>
            <div className="text-lg">
              That’s when businesses call me – I know what it’s like to have
              your business and reputation on the line. I’m here to make sure
              companies have the tech they need to do their thing, without the
              hassle, and with all the perks, making sure their teams feel heard
              and their future is secure.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
