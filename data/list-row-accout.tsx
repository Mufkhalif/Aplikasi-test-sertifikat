import {
  ProfileIcon,
  LockIcon,
  InfoIcon,
  ShieldIcon,
  TermsIcon,
} from "@/components/icon/account";

export interface RowItemProps {
  title: string;
  icon: React.ReactNode;
}

export const listProfile: RowItemProps[] = [
  {
    title: "Ubah Profile",
    icon: <ProfileIcon />,
  },
  {
    title: "Ubah Kata sandi",
    icon: <LockIcon />,
  },
];

export const listPublic: RowItemProps[] = [
  {
    title: "Syarat dan ketentuan",
    icon: <TermsIcon />,
  },
  {
    title: "Pusat Bantuan",
    icon: <InfoIcon />,
  },
  {
    title: "Kebijakan Privasi",
    icon: <ShieldIcon />,
  },
];
