import clsx from "clsx";

export const ButtonPrimary = ({ title, onClick }) => (
  <button
    className="bg-primaryBlue w-full rounded-lg p-4 shadow-primary"
    {...{ onClick }}
  >
    <h2 className="font-bold text-white text-xs">{title}</h2>
  </button>
);

export const ButtonOutlined = ({ title }) => (
  <button className="w-full rounded-lg p-4 bg-white border-2 border-primaryBlue">
    <h2 className="font-bold text-xs text-primaryBlue ">{title}</h2>
  </button>
);

export const ButtonQuestion = ({ title, isSelected, keyItem, onClick }) => (
  <button
    onClick={() => onClick()}
    className={clsx(
      "w-full rounded-lg p-2 border  flex flex-row items-center mb-2 transition delay-150",
      isSelected
        ? "border-primaryBlue bg-secondaryBlue"
        : "border-secondaryDark bg-gray-100"
    )}
  >
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
    <h2 className="font-bold text-xs text-primaryDark ml-1 ">{title}</h2>
  </button>
);
