import { Navbar } from "./navbar";
import React from "react";
import clsx from "clsx";

interface ContainerProps {
  children: React.ReactNode;
  isBottom: boolean;
  className?: string;
}

export const Container = ({
  children,
  isBottom,
  className,
}: ContainerProps) => {
  return (
    <div className={clsx("w-full sm:max-w-xl mx-auto  bg-gray-100", className)}>
      {children}
      {isBottom && <Navbar />}
    </div>
  );
};
