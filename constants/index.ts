import { SidebarLink } from "@/types";

export const themes = [
  { value: "light", label: "Light", icon: "/assets/icons/sun.svg" },
  { value: "dark", label: "Dark", icon: "/assets/icons/moon.svg" },
  { value: "system", label: "System", icon: "/assets/icons/computer.svg" },
];

export const sidebarLinks: SidebarLink[] = [
  {
    imgURL: "/assets/icons/home.svg",
    route: "/home",
    label: "Home",
  },
  {
    imgURL: "/assets/icons/home.svg",
    route: "/project",
    label: "Projects",
  },
  {
    imgURL: "/assets/icons/home.svg",
    route: "/backlogs",
    label: "Backlogs",
  },
  {
    imgURL: "/assets/icons/home.svg",
    route: "/community",
    label: "Community",
  },
  {
    imgURL: "/assets/icons/home.svg",
    route: "/profile",
    label: "Profile",
  },
  {
    imgURL: "/assets/icons/home.svg",
    route: "/rewards",
    label: "Rewards",
  },
];
