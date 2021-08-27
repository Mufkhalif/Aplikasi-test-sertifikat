import { Container } from "@/components/ui/container";
import { Seo } from "@/components/ui/seo";
import { Content } from "@/components/ui/content";
import { ButtonPrimary } from "@/components/ui/button";
import { useRouter } from "next/router";

const Result = () => {
  return (
    <Container isBottom={false}>
      <Seo title="Login" />
      <Content className="pt-8 bg-white px-0 flex text">
        <div className="w-full h-screen text-center flex-col flex">
          <h1 className="font-bold text-primaryDark text-base mt-28">
            Hasil Kuis
          </h1>
          <img
            className="h-48 object-scale-down w-full mt-4 "
            src="/images/result-kuis.png"
          />
          <div className="mb-24">
            <h3 className="text-sm font-normal text-secondaryDark mt-2">
              Score Kamu
            </h3>
            <h1 className="font-bold text-primarkDatk mt-4 text-3xl">
              <b className="text-[#FEB546]">19</b> / 20
            </h1>
            <h3 className="text-xs font-normal text-subDark mt-8 px-12">
              Untuk posisi manajerial mulai dari kepala cabang sampai dengan
              pejabat 1 tingkat di bawah Direksi
            </h3>
          </div>
          <ButtonPrimary
            title="Cek soal dan jawaban yang benar"
            onClick={() => null}
            type="button"
          />

          <h3 className="text-sm font-bold text-primaryBlue mt-8">
            Cari Kuis baru
          </h3>
        </div>
      </Content>
    </Container>
  );
};

export default Result;
