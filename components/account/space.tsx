import clsx from "clsx";

interface SpaceProps {
  className?: string;
}

export const Space = ({ className }: SpaceProps) => (
  <div className={clsx("h-2 w-full bg-[#f8f8f8] my-6", className)}></div>
);
