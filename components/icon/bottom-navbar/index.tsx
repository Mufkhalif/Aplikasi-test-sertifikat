import clsx from "clsx";

const onActiveIcon = (isActive = false) => {
  return clsx(
    "h-6 w-6 transition",
    isActive ? "fill-current text-primaryBlue" : "fill-current text-subDark"
  );
};

interface IconProps {
  isActive?: boolean;
}

export const BookmarkIcon = ({ isActive }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={onActiveIcon(isActive)}
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
  </svg>
);

export const HomeIcon = ({ isActive }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={onActiveIcon(isActive)}
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
  </svg>
);

export const UserIcon = ({ isActive }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={onActiveIcon(isActive)}
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
      clipRule="evenodd"
    />
  </svg>
);

export const CalendarIcon = ({ isActive }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={onActiveIcon(isActive)}
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
      clipRule="evenodd"
    />
  </svg>
);
