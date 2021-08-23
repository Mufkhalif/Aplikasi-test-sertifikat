import { ButtonOutlined, ButtonPrimary } from "../button";

export const CardHome = ({ type, title, subTitle, onClick }) => (
  <div className="bg-white p-4 rounded-lg flex flex-col pb-6 mb-6 hover:bg-white hover:shadow-lg cursor-pointer">
    <h2 className="font-bold text-primaryDark text-sm">{title}</h2>
    <p className="font-normal text-subDark my-6 text-xs">{subTitle}</p>
    {type === "second" ? (
      <ButtonOutlined title="Mulai Test" {...{ onClick }} />
    ) : (
      <ButtonPrimary title="Mulai Test" {...{ onClick }} />
    )}
  </div>
);
