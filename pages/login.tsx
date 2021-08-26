import { Container } from "@/components/ui/container";
import { Seo } from "@/components/ui/seo";
import { Content } from "@/components/ui/content";
import { SectionHeader } from "@/components/login/section-header";
import { Tab } from "@headlessui/react";
import { classNames } from "utils";
import { TabItem } from "@/components/login/tab-item";
import { FormSignin } from "@/components/login/form-signin";
import { FormSignup } from "@/components/login/form-signup";
import { Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useTimeoutFn } from "react-use";

const TransFragment = ({ isShowing, children }) => (
  <Transition
    as={Fragment}
    show={isShowing}
    enter="transition-opacity ease-linear duration-200"
    enterFrom="opacity-0"
    enterTo="opacity-100"
    leave="transition-opacity ease-linear duration-200"
    leaveFrom="opacity-100"
    leaveTo="opacity-0"
  >
    <div>{children}</div>
  </Transition>
);

const Login = () => {
  const tabs = {
    Masuk: [],
    Daftar: [],
  };

  let [isShowing, setIsShowing] = useState(true);
  let [, , resetIsShowing] = useTimeoutFn(() => setIsShowing(true), 500);

  return (
    <Container isBottom={false} className="bg-white ">
      <Seo title="Login" />
      <Content className="pt-8 bg-white h-screen">
        <SectionHeader />
        <Tab.Group
          onChange={() => {
            setIsShowing(false);
            resetIsShowing();
          }}
        >
          <Tab.List className="flex p-1 space-x-1 bg-[#fbfbfb] rounded-xl mt-8">
            {Object.keys(tabs).map((category: string) => (
              <TabItem key={category} category={category} />
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2">
            <Tab.Panel className={classNames("bg-white rounded-xl p-3")}>
              <TransFragment isShowing={isShowing}>
                <FormSignin />
                <p className="text-subDark font-normal text-xs text-center mt-36">
                  Powered by PT.Serfirikasi profesi Pembiayaan Indonesia
                </p>
              </TransFragment>
            </Tab.Panel>
            <Tab.Panel className={classNames("bg-white rounded-xl p-3")}>
              <TransFragment isShowing={isShowing}>
                <FormSignup />
                <p className="text-subDark font-normal text-xs text-center mt-24">
                  Powered by PT.Serfirikasi profesi Pembiayaan Indonesia
                </p>
              </TransFragment>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </Content>
    </Container>
  );
};
export default Login;
