import { Container } from "@/components/ui/container";
import { Seo } from "@/components/ui/seo";
import { Content } from "@/components/ui/content";
import { ButtonPrimary } from "@/components/ui/button";
import { useRouter } from "next/router";
import { useUser } from "utils/hooks/use-user";
import { supabase } from "utils/api";
import { useEffect, useState } from "react";
import Lottie from "react-lottie";
import loadingAnimation from "data/loading.json";

interface ResulKuisProps {
  count_exam: number;
  id: number;
  id_room_question: number;
  point: number;
  user_id: string;
}

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: loadingAnimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Result = () => {
  const router = useRouter();
  const { data } = router.query;
  const { user } = useUser();
  const [result, setResult] = useState<ResulKuisProps>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    user && getData();
  }, [data, user]);

  const getData = async () => {
    setLoading(true);
    const { data: result_quiz } = await supabase
      .from("result_quiz")
      .select("*")
      .eq("user_id", user.id)
      .eq("id_room_question", data)
      .single();

    setResult(result_quiz);
    setLoading(false);
  };

  return (
    <Container isBottom={false}>
      <Seo title="Login" />
      <Content className="pt-8 bg-white px-0 flex text">
        {loading ? (
          <div className="h-screen text-center w-full content-center flex flex-wrap">
            <Lottie options={defaultOptions} height={120} width={120} />
          </div>
        ) : (
          <div>
            {result && (
              <div className="w-full h-screen text-center flex-col flex">
                <h1 className="font-bold text-primaryDark text-base mt-14">
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
                    <b className="text-[#FEB546]">{result.point}</b> /{" "}
                    {result.count_exam}
                  </h1>
                  <h3 className="text-xs font-normal text-subDark mt-8 px-12">
                    Untuk posisi manajerial mulai dari kepala cabang sampai
                    dengan pejabat 1 tingkat di bawah Direksi
                  </h3>
                </div>
                <ButtonPrimary
                  title="Cek soal dan jawaban yang benar"
                  onClick={() => null}
                  type="button"
                />
                <h3
                  className="text-xs font-bold text-primaryBlue mt-8 cursor-pointer"
                  onClick={() => router.push("/")}
                >
                  Cari Kuis baru
                </h3>
              </div>
            )}
          </div>
        )}
      </Content>
    </Container>
  );
};

export default Result;
