interface ProgressBarProps {
  percent: number;
  max: number;
  done: number;
}

export const ProgressBar = ({ percent, max, done }: ProgressBarProps) => (
  <div>
    <div className="flex flex-row justify-between mb-2">
      <p className="text-xs text-secondaryDark font-normal">Progress</p>
      <p className="text-xs text-secondaryDark">
        {done} / {max} Soal
      </p>
    </div>
    <div className="overflow-hidden h-1 mb-4 text-xs flex rounded bg-white transition: width 2s">
      <div
        style={{ width: `${percent}%` }}
        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primaryGreen transition: width 2s"
      ></div>
    </div>
  </div>
);
