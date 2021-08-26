import Link from "next/link";
import { ButtonOutlined, ButtonPrimary } from "../button";

interface CardHomeProps {
  id: number;
  type: string;
  title: string;
  subTitle: string;
  onClick: () => void;
}

export const CardHome = ({
  id,
  type,
  title,
  subTitle,
  onClick,
}: CardHomeProps) => (
  <Link href={`/detail-room/${id}`}>
    <div className="bg-white p-4 rounded-lg flex flex-col pb-6 mb-6 hover:bg-white hover:shadow-lg ">
      <h2 className="font-bold text-primaryDark text-sm">{title}</h2>
      <p className="font-normal text-subDark my-6 text-xs">{subTitle}</p>
      {type === "private" ? (
        <ButtonOutlined title="Mulai Test" {...{ onClick }} />
      ) : (
        <ButtonPrimary type="button" title="Mulai Test" {...{ onClick }} />
      )}
    </div>
  </Link>
);
