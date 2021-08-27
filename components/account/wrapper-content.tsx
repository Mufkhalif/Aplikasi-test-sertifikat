import { RowItemProps } from "data/list-row-accout";
import { RowIcon } from "./row-icon";

interface WrapperContentProps {
  title: string;
  listItem: RowItemProps[];
  buttonLogout?: React.ReactNode;
}

export const WrapperContent = ({
  title,
  listItem,
  buttonLogout,
}: WrapperContentProps) => (
  <div className="flex flex-col px-4">
    <h1 className="font-bold text-primaryDark text-xs mb-4">{title}</h1>
    {listItem.map((item) => (
      <RowIcon key={item.title} Icon={item.icon} title={item.title} />
    ))}
    {buttonLogout}
  </div>
);
