export const Header = () => (
  <div className="flex flex-row justify-between items-center py-6 px-4 bg-white fixed w-full">
    <div>
      <h2 className="text-primaryDark font-bold">Schedule Test</h2>
    </div>
    <div className="flex flex-row">
      <CalendarIcon />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="prefix__ionicon"
        viewBox="0 0 512 512"
        className="h-5 w-5 ml-8"
      >
        <title>{"Search"}</title>
        <path
          d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
          fill="none"
          stroke="currentColor"
          strokeMiterlimit={10}
          strokeWidth={32}
        />
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeMiterlimit={10}
          strokeWidth={32}
          d="M338.29 338.29L448 448"
        />
      </svg>
    </div>
  </div>
);

const CalendarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 512 512"
  >
    <title>{"Calendar Clear"}</title>
    <rect
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={32}
      x={48}
      y={80}
      width={416}
      height={384}
      rx={48}
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={32}
      strokeLinecap="round"
      d="M128 48v32m256-32v32m80 80H48"
    />
  </svg>
);
