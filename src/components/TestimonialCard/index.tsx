import React from "react";

export default function TestimonialCard() {
  return (
    <div className="p-6 bg-gray-50 rounded dark:bg-gray-800 w-full rounded-lg">
      <div className="text-sm text-gray-500 dark:text-gray-400">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Solid foundation for any project
        </h3>
        <p className="my-4">
          "This is a very complex and beautiful set of elements. Under the hood
          it comes with the best things from 2 different worlds: Figma and
          Tailwind.”
        </p>
      </div>
      <figcaption className="flex items-center space-x-3">
        <img
          className="w-9 h-9 rounded-full"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
          alt="profile picture"
        />
        <div>
          <span className="block font-semi-bold text-gray-900 text-base">
            Bonnie Green
          </span>
          <span className="text-[14px] font-regular text-gray-500 dark:text-gray-400">
            Web developer @themesberg
          </span>
        </div>
      </figcaption>
    </div>
  );
}
