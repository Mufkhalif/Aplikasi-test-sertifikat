import clsx from "clsx";

export const ButtonPrimary = ({
  title,
  onClick,
  className,
  type = "click",
}) => (
  <button
    className={clsx(
      "bg-primaryBlue w-full rounded-lg p-4 shadow-primary",
      className
    )}
    {...{ onClick, type }}
  >
    <h2 className="font-bold text-white text-xs">{title}</h2>
  </button>
);
