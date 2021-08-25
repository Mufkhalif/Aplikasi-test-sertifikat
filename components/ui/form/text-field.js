import React, { forwardRef } from "react";
import { CheckIcon } from "../button/button-question";

export const TextField = forwardRef(
  ({ message, label, placeholder, isValid, type, ...props }, ref) => {
    return (
      <div className="flex flex-col mb-4 relative">
        <label className="text-primaryDark font-normal text-sm">{label}</label>

        <div className="flex flex-row relative items-center justify-center">
          <input
            type={type}
            placeholder={placeholder}
            className="border-2 border-subDark mt-2 p-2 rounded-lg text-sm text-primaryDark outline-none flex-1"
            ref={ref}
            {...props}
          />
          {isValid && (
            <span className="absolute inset-y-2 top-4 right-2 flex items-center pl-2">
              <CheckIcon />
            </span>
          )}
        </div>
        {message}
      </div>
    );
  }
);
