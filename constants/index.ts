import { SidebarLink } from "@/types";

export const themes = [
  { value: "light", label: "Light", icon: "/assets/icons/sun.svg" },
  { value: "dark", label: "Dark", icon: "/assets/icons/moon.svg" },
  { value: "system", label: "System", icon: "/assets/icons/computer.svg" },
];

export const sidebarLinks: SidebarLink[] = [
  {
    imgURL: "/assets/icons/home.svg",
    route: "/",
    label: "Home",
  },
  {
    imgURL: "/assets/icons/home.svg",
    route: "/tasks",
    label: "Tasks",
  },
  {
    imgURL: "/assets/icons/home.svg",
    route: "/projects",
    label: "Projects",
  },
  {
    imgURL: "/assets/icons/home.svg",
    route: "/boards",
    label: "Boards",
  },
  {
    imgURL: "/assets/icons/home.svg",
    route: "/analytics",
    label: "Analytics",
  },
  {
    imgURL: "/assets/icons/home.svg",
    route: "/community",
    label: "Community",
  },
  {
    imgURL: "/assets/icons/home.svg",
    route: "/rewards",
    label: "Rewards",
  },
  {
    imgURL: "/assets/icons/home.svg",
    route: "/profile",
    label: "Profile",
  },
];
