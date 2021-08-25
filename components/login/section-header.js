import { FlagIndoIcon } from "../icon/flag-indo";

export const SectionHeader = () => (
  <div className="flex flex-row">
    <div className="flex-1">
      <div className="flex flex-row justify-between items-center">
        <h2 className="text-primaryDark font-bold text-base">Hallo</h2>
        <FlagIndoIcon />
      </div>
      <p className="text-subDark font-normal text-xs mt-1">
        Selamat datang di aplikasi SPPI
      </p>
    </div>
  </div>
);
