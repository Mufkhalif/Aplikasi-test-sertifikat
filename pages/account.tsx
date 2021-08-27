import { Container } from "@/components/ui/container";
import { Seo } from "@/components/ui/seo";
import { Content } from "@/components/ui/content";
import { ButtonPrimary } from "@/components/ui/button";
import { Space } from "@/components/account/space";
import { SectionProfile } from "@/components/account/section-profile";
import { useUser } from "utils/hooks/use-user";
import { listProfile, listPublic } from "data/list-row-accout";
import { WrapperContent } from "@/components/account/wrapper-content";

const Account = () => {
  const { user, logOut, loading } = useUser();

  return (
    <Container isBottom={true} className="bg-red-400 px-0">
      <Seo title="Account" />
      <Content className="pt-8 bg-white px-0" noPadding={true}>
        {user && (
          <>
            <h1 className="font-bold text-primaryDark px-4">My Account</h1>
            <SectionProfile user={user} />
            <WrapperContent listItem={listProfile} title="Akun" />
            <Space className="h-1 bg-white" />
          </>
        )}
        <WrapperContent
          listItem={listPublic}
          title="Tentang"
          buttonLogout={
            user && (
              <ButtonPrimary
                disabled={loading}
                title="Sign out"
                onClick={logOut}
                type="button"
                className="mt-12"
              />
            )
          }
        />
        <div className="h-40"></div>
      </Content>
    </Container>
  );
};

export default Account;
