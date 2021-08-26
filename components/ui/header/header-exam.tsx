import Link from "next/link";

export const HeaderExam = () => (
  <div className="flex flex-row justify-between items-center py-6 px-4 bg-white fixed w-full shadow-sm z-10 sm:max-w-xl">
    <div className="flex flex-row">
      <Link href="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mr-2 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
      </Link>
      <h2 className="text-primaryDark font-bold">Soal Test</h2>
    </div>
    <div className="flex flex-row">
      <div className="px-3 py-1 bg-primaryBlue rounded-full text-white text-sm">
        <p>30.00</p>
      </div>
    </div>
  </div>
);
