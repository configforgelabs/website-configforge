import { cn } from "@site/src/lib/utils";
import React, { ReactNode } from "react";

type TContainer = {
  children: ReactNode;
  className?: string;
};

const Container = ({ children, className }: TContainer) => {
  return (
    <div className={cn("lg:w-[900px] xl:w-[1300px] px-[20px]", className)}>
      {children}
    </div>
  );
};

export default Container;
