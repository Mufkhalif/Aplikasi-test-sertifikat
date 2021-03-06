import { Container } from "@/components/ui/container";
import { Seo } from "@/components/ui/seo";
import { Header } from "@/components/ui/header/header";
import { ListTest } from "@/components/home/list-test";
import { Content } from "@/components/ui/content";

const Home = () => (
  <Container isBottom={true}>
    <Seo />
    <Header />
    <Content className="pt-24">
      <ListTest />
    </Content>
  </Container>
);

export default Home;
