export const HeaderExam = () => (
  <div className="flex flex-row justify-between items-center py-6 px-4 bg-white fixed w-full shadow-sm z-10">
    <div className="flex flex-row">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 mr-2"
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
      <h2 className="text-primaryDark font-bold">Soal Test</h2>
    </div>
    <div className="flex flex-row">
      <div className="px-3 py-1 bg-primaryBlue rounded-full text-white text-sm">
        <p>30.00</p>
      </div>
    </div>
  </div>
);
