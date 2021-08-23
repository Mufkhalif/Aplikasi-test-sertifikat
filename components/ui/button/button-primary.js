export const ButtonPrimary = ({ title, onClick }) => (
  <button
    className="bg-primaryBlue w-full rounded-lg p-4 shadow-primary"
    {...{ onClick }}
  >
    <h2 className="font-bold text-white text-xs">{title}</h2>
  </button>
);
