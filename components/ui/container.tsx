import { Navbar } from "./navbar";
import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  isBottom: boolean;
}

export const Container = ({ children, isBottom }: ContainerProps) => {
  return (
    <div className="w-full sm:max-w-xl mx-auto  bg-gray-100">
      {children}
      {isBottom && <Navbar />}
    </div>
  );
};
