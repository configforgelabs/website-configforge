import inputFields from "@site/src/constant/input.constant";
import React from "react";
import Button from "../ui/Button";

const ContactFromSection = () => {
  return (
    <div className="w-full lg:w-[811px] bg-white rounded-[8px] lg:mx-auto shadow-md -mt-[330px] md:-mt-[300px]">
      <form action="" className="p-5 lg:p-8">
        <div className="grid lg:grid-cols-2 gap-x-8 gap-y-6">
          {inputFields.map((input) => (
            <div>
              <label htmlFor="" className="text-sm font-medium">
                {input.label}
              </label>
              <input
                type={input.type}
                className="block w-full bg-gray-50 text-sm px-4 py-3.5 rounded-[8px] border-none ring-1 ring-gray-300 focus:outline-gray-300 mt-2"
                placeholder={input.placeHolder}
              />
            </div>
          ))}
        </div>
        <div className="mt-8">
          <label htmlFor="" className="text-sm font-medium">
            Your message
          </label>
          <textarea className="block w-full bg-gray-50 text-sm px-4 py-3.5 rounded-[8px] border-none ring-1 ring-gray-300 focus:outline-gray-300 mt-2 h-[163px] resize-none" />
        </div>
        <div className="flex md:items-center mt-8">
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            className="w-4 h-4 accent-primary-700 bg-gray-50"
          />
          <label
            htmlFor="default-checkbox"
            className="ms-1 text-xs font-medium text-gray-500 "
          >
            By submitting this form, you confirm that you have read and agree to JustInn's {" "}
            <span className="text-gray-900 underline">
              Terms of Service
            </span>{" "}
            and{" "}
            <span className="text-gray-900 underline">Privacy Statement</span>
          </label>
        </div>
        <Button className="text-white bg-primary-700 hover:text-white hover:bg-primary-700 cursor-pointer mt-6 w-full md:w-auto">
          Send message
        </Button>
      </form>
    </div>
  );
};

export default ContactFromSection;
