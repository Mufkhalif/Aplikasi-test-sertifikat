import clsx from "clsx";
import { TransitionWrapper } from "../container-animation/transition-wrapper";

export const ButtonQuestion = ({ title, isSelected, keyItem, onClick }) => (
  <button
    {...{ onClick }}
    className={clsx(
      "w-full rounded-lg p-2 border  flex flex-row items-center mb-2 transition delay-150 justify-between",
      isSelected
        ? "border-primaryBlue bg-secondaryBlue"
        : "border-secondaryDark bg-[#F7F7F7]"
    )}
  >
    <div className="flex flex-row items-center">
      <div
        className={clsx(
          "rounded-lg  border  items-center justify-center px-2",
          isSelected
            ? "border-primaryBlue bg-primaryBlue"
            : "border-secondaryDark bg-white"
        )}
      >
        <h2 className={clsx(isSelected ? "text-white" : "")}>{keyItem}</h2>
      </div>
      <h2 className="font-bold text-xs text-primaryDark ml-1">{title}</h2>
    </div>
    <TransitionWrapper show={isSelected} onDismiss={() => null}>
      <CheckIcon />
    </TransitionWrapper>
  </button>
);

export const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 fill-current text-primaryGreen"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      clipRule="evenodd"
    />
  </svg>
);
