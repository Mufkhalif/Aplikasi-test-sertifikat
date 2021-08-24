import { useRouter } from "next/router";
import { supabase } from "../../utils/api";
import { Container } from "@/components/ui/container";
import { Seo } from "@/components/ui/seo";
import { HeaderExam } from "@/components/ui/header/header-exam";
import { Content } from "@/components/ui/content";
import ListQuestion from "@/components/main-exam/list-question";
import { Sekeleton } from "@/components/ui/loading/skeleton";
import { EmptyData } from "@/components/ui/empty-data";

const DetailRoom = ({ data }) => {
  const router = useRouter();

  return (
    <Container isBottom={false}>
      <Seo title="Bahasa Indonesia" />
      <HeaderExam />
      <Content className="pt-24">
        {router.isFallback ? (
          <Sekeleton />
        ) : data.length == 0 ? (
          <EmptyData />
        ) : (
          <ListQuestion listQuestion={data} />
        )}
      </Content>
    </Container>
  );
};

export async function getStaticPaths() {
  const { data } = await supabase.from("room_question").select("id");

  const paths = data.map((post) => ({
    params: { id: JSON.stringify(post.id) },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const { data } = await supabase
    .from("list_question_room")
    .select()
    .filter("id_room_question", "eq", id);

  return {
    props: {
      data,
    },
  };
}

export default DetailRoom;
