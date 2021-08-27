import React from "react";
import { Transition } from "@headlessui/react";

interface TransitionWrapperProps {
  show: boolean;
  children: React.ReactNode;
  onDismiss: () => void;
}

export const TransitionWrapper = ({
  show,
  children,
  onDismiss,
}: TransitionWrapperProps) => (
  <Transition
    show={show}
    enter="transition-opacity duration-75"
    enterFrom="opacity-0"
    enterTo="opacity-100"
    leave="transition-opacity duration-150"
    leaveFrom="opacity-100"
    leaveTo="opacity-0"
  >
    {children}
    <div
      className="w-full h-full absolute  z-2 sm:max-w-xl sm:max-h-xl"
      onClick={onDismiss}
    ></div>
  </Transition>
);
