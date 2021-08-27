import { Container } from "@/components/ui/container";
import { Seo } from "@/components/ui/seo";
import { Content } from "@/components/ui/content";
import { useRouter } from "next/router";
import Lottie from "react-lottie";
import loadingAnimation from "data/email_verification.json";
import { ButtonOutlined } from "@/components/ui/button";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: loadingAnimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const EmailVerification = () => {
  const router = useRouter();

  return (
    <Container isBottom={false}>
      <Seo title="Email Send" />
      <Content className="pt-8 bg-white px-0 flex text">
        <div className="h-screen text-center w-full content-center flex flex-wrap">
          <Lottie options={defaultOptions} height={120} width={120} />
          <h2 className="w-full text-secondaryDark mt-12">
            Email verification sending on your email, please verified for login
          </h2>
          <div className="w-full px-12 mt-12">
            <ButtonOutlined
              title="Login"
              onClick={() => router.push("/login")}
            />
          </div>
        </div>
      </Content>
    </Container>
  );
};

export default EmailVerification;
