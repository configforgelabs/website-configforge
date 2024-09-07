import React from "react";

export default function TestimonialCard({ title, quote, name, role, imageUrl }) {
  return (
    <div className="p-6 bg-gray-50 rounded dark:bg-gray-800 w-full rounded-lg">
      <div className="text-sm text-gray-500 dark:text-gray-400">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="my-4">
          {quote}
        </p>
      </div>
      <figcaption className="flex items-center space-x-3">
        <img
          className="w-9 h-9 rounded-full"
          src={imageUrl}
          alt="profile picture"
        />
        <div className="space-y-0.5 font-medium dark:text-white">
          <div>{name}</div>
          <div className="text-sm font-light text-gray-500 dark:text-gray-400">
            {role}
          </div>
        </div>
      </figcaption>
    </div>
  );
}
