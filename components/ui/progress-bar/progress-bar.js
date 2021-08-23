export const ProgressBar = () => (
  <div>
    <div className="flex flex-row justify-between mb-2">
      <p className="text-xs text-secondaryDark font-normal">Progress</p>
      <p className="text-xs text-secondaryDark">3 / 3 Soal</p>
    </div>
    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-white">
      <div
        style={{ width: "30%" }}
        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primaryBlue"
      ></div>
    </div>
  </div>
);
