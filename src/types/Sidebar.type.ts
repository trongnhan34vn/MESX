import { ReactNode } from "react";

export type Submenu = {
  id: number;
  activeIcon: ReactNode;
  inactiveIcon: ReactNode;
  title: string;
};

export type MenuItem = {
  submenu_id: number;
  title: string;
  url: string;
};
