import { useState } from "react";
import clsx from "clsx";
import { bottomItems, BottomItems } from "data/list_bottom_navigation";

interface NavbarItemProps {
  isActive: boolean;
  Icon: React.ReactNode;
  title: string;
  onClick: () => void;
}

const NavbarItem = ({ isActive, Icon, title, onClick }: NavbarItemProps) => (
  <div
    className="items-center justify-center flex flex-col py-2 px-1 cursor-pointer"
    {...{ onClick }}
  >
    {Icon}
    <div className="mt-1">
      <h1
        className={clsx(
          "text-sm",
          isActive
            ? "font-normal  text-primaryBlue"
            : "font-normal text-subDark"
        )}
      >
        {title}
      </h1>
    </div>
  </div>
);

export const Navbar: React.FC = () => {
  const [active, setActive] = useState(1);
  return (
    <div className="flex flex-row fixed bottom-0 bg-white w-full sm:max-w-xl py-1 shadow-lg px-4 justify-around">
      {bottomItems.map((item: BottomItems) => (
        <NavbarItem
          key={item.id}
          onClick={() => setActive(item.id)}
          title={item.title}
          isActive={item.id == active}
          Icon={item.id == active ? item.iconActive : item.iconDefault}
        />
      ))}
    </div>
  );
};
