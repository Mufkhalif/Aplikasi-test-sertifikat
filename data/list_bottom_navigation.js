import {
  HomeIcon,
  CalendarIcon,
  BookmarkIcon,
  UserIcon,
} from "@/components/icon/bottom-navbar";

export const bottomItems = [
  {
    id: 1,
    iconActive: <HomeIcon isActive />,
    iconDefault: <HomeIcon />,
    title: "Beranda",
  },
  {
    id: 2,
    iconActive: <CalendarIcon isActive />,
    iconDefault: <CalendarIcon />,
    title: "Acara",
  },
  {
    id: 3,
    iconActive: <BookmarkIcon isActive />,
    iconDefault: <BookmarkIcon />,
    title: "Bookmark",
  },
  {
    id: 4,
    iconActive: <UserIcon isActive />,
    iconDefault: <UserIcon />,
    title: "Profile",
  },
];
