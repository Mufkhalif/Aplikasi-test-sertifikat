import { Container } from "@/components/ui/container";
import { Seo } from "@/components/ui/seo";
import { Content } from "@/components/ui/content";

const Acara = () => {
  return (
    <Container isBottom={true} className="bg-red-400">
      <Seo title="Login" />
      <Content className="pt-8 bg-white px-0 flex text">
        <div className="w-full h-screen text-center flex-col flex">
          <img
            className="h-48 object-scale-down w-full mt-28"
            src="/images/not-found.png"
          />
          <div>
            <h1 className="font-bold text-primaryDark text-base">
              Segera hadir
            </h1>
            <h3 className="text-sm font-normal text-secondaryDark mt-2">
              Fitur ini masih dalam tahap pengembangan
            </h3>
          </div>
        </div>
      </Content>
    </Container>
  );
};

export default Acara;
