import { Container } from "@/components/ui/container";
import { Seo } from "@/components/ui/seo";
import { Content } from "@/components/ui/content";
import { ButtonPrimary } from "@/components/ui/button";
import {
  ProfileIcon,
  LockIcon,
  InfoIcon,
  ShieldIcon,
  TermsIcon,
} from "@/components/icon/account";
import { Space } from "@/components/account/space";
import { RowIcon } from "@/components/account/row-icon";
import { SectionProfile } from "@/components/account/section-profile";
import { useUser } from "utils/hooks/use-user";

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
            <div className="flex flex-col px-4">
              <h1 className="font-bold text-primaryDark text-xs mb-4">Akun</h1>
              <RowIcon Icon={<ProfileIcon />} title="Ubah Profile" />
              <RowIcon Icon={<LockIcon />} title="Ubah Kata sandi" />
            </div>
            <Space className="h-1 bg-white" />
          </>
        )}
        <div className="flex flex-col px-4 mb-8">
          <h1 className="font-bold text-primaryDark text-xs mb-4">Tentang</h1>
          <RowIcon Icon={<TermsIcon />} title="Syarat dan ketentuan" />
          <RowIcon Icon={<InfoIcon />} title="Pusat Bantuan" />
          <RowIcon Icon={<ShieldIcon />} title="Kebijakan Privasi" />
          {user && (
            <ButtonPrimary
              disabled={loading}
              title="Sign out"
              onClick={logOut}
              type="button"
              className="mt-12"
            />
          )}
        </div>
        <div className="h-40"></div>
      </Content>
    </Container>
  );
};

export default Account;
