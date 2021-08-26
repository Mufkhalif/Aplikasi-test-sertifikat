import { Chevron } from "../icon/account";

export const RowIcon = ({ Icon, title }) => (
  <div className="flex flex-row items-center border-b pb-4 mb-4 justify-between pr-4">
    <div className="flex flex-row items-center">
      {Icon}
      <p className="font-normal text-primaryDark text-xs ml-2">{title}</p>
    </div>
    <Chevron />
  </div>
);
