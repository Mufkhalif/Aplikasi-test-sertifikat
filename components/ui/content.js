import clsx from "clsx";

export const Content = ({ children, className }) => {
  return <div className={clsx("py-6 px-4", className)}>{children}</div>;
};
