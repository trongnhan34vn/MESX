import { ReactNode } from "react";

export type Submenu = {
  id: number;
  activeIcon: ReactNode;
  inactiveIcon: ReactNode;
  title: string;
  url: string;
};

export type MenuItemProps = {
  submenu_id: number;
  title: string;
  path: string;
};
