interface ButtonOutlinedProps {
  title: string;
  onClick?: () => void;
}

export const ButtonOutlined = ({ title, onClick }: ButtonOutlinedProps) => (
  <button
    className="w-full rounded-lg p-4 bg-white border-2 border-primaryBlue"
    {...{ onClick }}
  >
    <h2 className="font-bold text-xs text-primaryBlue ">{title}</h2>
  </button>
);
