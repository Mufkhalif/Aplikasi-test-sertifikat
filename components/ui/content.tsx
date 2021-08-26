import clsx from "clsx";
import React from "react";

interface ContentProps {
  children: React.ReactNode;
  className?: string;
}

export const Content = ({ children, className }: ContentProps) => {
  return <div className={clsx("py-6 px-4", className)}>{children}</div>;
};
