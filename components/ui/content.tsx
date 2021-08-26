import clsx from "clsx";
import React from "react";

interface ContentProps {
  children: React.ReactNode;
  className?: string;
  noPadding?: boolean;
}

export const Content = ({ children, className, noPadding }: ContentProps) => {
  return (
    <div className={clsx("py-6 ", className, noPadding ? "px-0" : "px-4")}>
      {children}
    </div>
  );
};
