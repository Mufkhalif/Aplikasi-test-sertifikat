import {
  HomeIcon,
  CalendarIcon,
  BookmarkIcon,
  UserIcon,
} from "@/components/icon/bottom-navbar";
import React from "react";
export interface BottomItems {
  id: number;
  iconActive: React.ReactNode;
  iconDefault: React.ReactNode;
  title: string;
  href: string;
}

export const bottomItems: BottomItems[] = [
  {
    id: 1,
    iconActive: <HomeIcon isActive />,
    iconDefault: <HomeIcon />,
    title: "Beranda",
    href: "/",
  },
  {
    id: 2,
    iconActive: <CalendarIcon isActive />,
    iconDefault: <CalendarIcon />,
    title: "Acara",
    href: "/acara",
  },
  {
    id: 3,
    iconActive: <BookmarkIcon isActive />,
    iconDefault: <BookmarkIcon />,
    title: "Bookmark",
    href: "/bookmark",
  },
  {
    id: 4,
    iconActive: <UserIcon isActive />,
    iconDefault: <UserIcon />,
    title: "Profile",
    href: "/account",
  },
];
