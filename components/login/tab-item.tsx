import { Tab } from "@headlessui/react";
import { classNames } from "utils";

interface TabItemProps {
  category: string;
}

export const TabItem = ({ category }: TabItemProps) => (
  <Tab
    key={category}
    className={({ selected }) =>
      classNames(
        "w-full py-2.5 text-sm leading-5 font-bold text-primaryDark rounded-lg",
        "focus:outline-none  ring-white ring-opacity-60",
        selected
          ? "bg-white shadow"
          : "font-bold text-subDark  hover:bg-white/[0.12] hover:text-primaryBlue "
      )
    }
  >
    {category}
  </Tab>
);
