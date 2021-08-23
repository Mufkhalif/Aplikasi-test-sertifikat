import { Container } from "@/components/ui/container";
import { Seo } from "@/components/ui/seo";
import { HeaderExam } from "@/components/ui/header/header-exam";
import { Content } from "@/components/ui/content";
import ListQuestion from "@/components/main-exam/list-question";

const MainExam = () => (
  <Container>
    <Seo title="Main Exam" />
    <HeaderExam />
    <Content className="pt-24">
      <ListQuestion />
    </Content>
  </Container>
);

export default MainExam;
