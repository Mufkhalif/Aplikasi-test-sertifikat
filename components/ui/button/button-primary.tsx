import clsx from "clsx";

interface ButtonProps {
  title: string;
  type: "button" | "submit" | "reset";
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export const ButtonPrimary = ({
  title,
  onClick,
  className,
  type,
  disabled,
}: ButtonProps) => (
  <button
    className={clsx(
      "bg-primaryBlue w-full rounded-lg p-4 shadow-primary flex flex-row justify-center items-center",
      className
    )}
    {...{ onClick, type, disabled }}
  >
    {disabled ? (
      <>
        <LoadingIcon />
        <h2 className="font-normal text-white text-xs">Memuat</h2>
      </>
    ) : (
      <h2 className="font-bold text-white text-xs">{title}</h2>
    )}
  </button>
);

const LoadingIcon = () => (
  <svg
    fill="none"
    className="w-6 h-6 animate-spin fill-current text-white"
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      clipRule="evenodd"
      d="M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);
