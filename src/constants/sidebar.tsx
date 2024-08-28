import { LuHome } from "react-icons/lu";
import { IoBriefcaseOutline } from "react-icons/io5";
import { RiProductHuntLine } from "react-icons/ri";
import { CgNotes } from "react-icons/cg";
import { MenuItemProps, Submenu } from "../types/Sidebar.type";
import { TbDeviceHeartMonitorFilled } from 'react-icons/tb';

export const submenus: Submenu[] = [
  {
    id: 1,
    title: "Dashboard",
    activeIcon: <LuHome size={24} color="#fff" />,
    inactiveIcon: <LuHome size={24} color="#5A89C8" />,
    url: '/app/dashboard'
  },
  {
    id: 2,
    title: "Power Monitoring",
    activeIcon: <TbDeviceHeartMonitorFilled size={24} color={"#fff"} />,
    inactiveIcon: <LuHome size={24} color="#5A89C8" />,
    url: '/app/power-monitoring'
  },
  {
    id: 3,
    title: "Quản lí thiết bị",
    activeIcon: <IoBriefcaseOutline size={24} color="#fff" />,
    inactiveIcon: <IoBriefcaseOutline size={24} color="#5A89C8" />,
    url: '/app/device'
  },
  {
    id: 4,
    title: "Quản lý danh mục",
    activeIcon: <RiProductHuntLine size={24} color="#fff" />,
    inactiveIcon: <RiProductHuntLine size={24} color="#5A89C8" />,
    url: '/app/category'
  },
  {
    id: 5,
    title: "Sản xuất",
    activeIcon: <CgNotes size={24} color="#fff" />,
    inactiveIcon: <CgNotes size={24} color="#5A89C8" />,
    url: '/app/dashboard'
  },
  {
    id: 6,
    title: "Quản lý thực thi sản xuất",
    activeIcon: <CgNotes size={24} color="#fff" />,
    inactiveIcon: <CgNotes size={24} color="#5A89C8" />,
    url: '/app/dashboard'
  },
  {
    id: 7,
    title: "Thống kê, báo cáo",
    activeIcon: <CgNotes size={24} color="#fff" />,
    inactiveIcon: <CgNotes size={24} color="#5A89C8" />,
    url: '/app/dashboard'
  },
  {
    id: 8,
    title: "Hành chính nhân sự",
    activeIcon: <CgNotes size={24} color="#fff" />,
    inactiveIcon: <CgNotes size={24} color="#5A89C8" />,
    url: '/app/dashboard'
  },
  {
    id: 9,
    title: "Thiết lập",
    activeIcon: <CgNotes size={24} color="#fff" />,
    inactiveIcon: <CgNotes size={24} color="#5A89C8" />,
    url: '/app/dashboard'
  },
];

export const menuItemChildren: MenuItemProps[] = [
  {
    submenu_id: 2,
    title: "Real-time Monitoring",
    path: "/real-time-monitoring",
  },
  {
    submenu_id: 3,
    title: "Quản lý thiết bị",
    path: "",
  },
  {
    submenu_id: 4,
    title: "Quản lý danh mục",
    path: "",
  },
  {
    submenu_id: 4,
    title: "Kế hoạch xuất hàng",
    path: "/k",
  },
  {
    submenu_id: 4,
    title: "Kế hoạch sản xuất",
    path: "/k",
  },
  {
    submenu_id: 5,
    title: "Yêu cầu xuất linh kiện/NVL",
    path: "/k",
  },
  {
    submenu_id: 5,
    title: "Yêu cầu nhập kho thành phẩm",
    path: "/k",
  },
  {
    submenu_id: 5,
    title: "Yêu cầu trả linh kiện/NVL",
    path: "/k",
  },
  {
    submenu_id: 7,
    title: "Báo cáo sản xuất hàng ngày",
    path: "/k",
  },
  {
    submenu_id: 7,
    title: "Báo cáo về tiến độ sản xuất",
    path: "/k",
  },
  {
    submenu_id: 7,
    title: "Báo cáo chất lượng",
    path: "/k",
  },
  {
    submenu_id: 7,
    title: "Báo cáo tiêu hao NVL",
    path: "/i",
  },
  {
    submenu_id: 7,
    title: "Báo cáo tiến độ",
    path: "/k",
  },
  {
    submenu_id: 7,
    title: "Báo cáo năng suất",
    path: "/k",
  },
  {
    submenu_id: 9,
    title: "Thiết lập lịch làm việc",
    path: "/k",
  },
];
