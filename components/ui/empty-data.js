export const EmptyData = () => (
  <div className="w-full h-screen text-center flex-col flex">
    <img
      className="h-48 object-scale-down w-full mt-28"
      src="/images/not-found.png"
    />
    <div>
      <h1 className="font-bold text-primaryDark text-base">
        Kuis tidak ditemukan
      </h1>
      <h3 className="text-sm font-normal text-secondaryDark mt-2">
        belum ada kuis untuk kategori ini
      </h3>
    </div>
  </div>
);
