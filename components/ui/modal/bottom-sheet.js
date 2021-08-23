import { BottomSheet } from "react-spring-bottom-sheet";
import "react-spring-bottom-sheet/dist/style.css";
import { ButtonPrimary } from "../button/button";

export const BottomSheetDone = ({ active, onDismiss, onConfirm }) => (
  <BottomSheet
    onDismiss={onDismiss}
    open={active}
    className="text-center py-6 px-4"
  >
    <div className="px-8">
      <div className="h-12" />
      <img
        className="h-48 object-scale-down w-full"
        src="/images/done-exam.png"
      />
      <h1 className="text-sm font-bold text-primaryDark">
        Berhasil Menyelesaikan test SPPI
      </h1>
      <p className="font-normal text-subDark my-6 text-sm">
        Anda berhasil menyelesaikan test sertifikasi Dasar pembiayaan
        Managerial. Silahkan cek score yang anda dapatkan
      </p>
      <ButtonPrimary title="Cek Score" onClick={onConfirm} />
      <div className="h-12" />
    </div>
  </BottomSheet>
);
