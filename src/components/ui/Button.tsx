import { cn } from "@site/src/lib/utils";
import React, { ReactNode, forwardRef } from "react";

type TButton = {
  children: ReactNode;
  className?: string;
};

const Button = forwardRef<HTMLButtonElement, TButton>((props, ref) => {
  const { children, className } = props;
  return (
    <button
      ref={ref}
      type="button"
      className={cn(
        "py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-solid border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 hover:cursor-pointer",
        className
      )}
    >
      {children} 
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
