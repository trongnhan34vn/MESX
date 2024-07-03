import { LuHome } from "react-icons/lu";
import { IoBriefcaseOutline } from "react-icons/io5";
import { RiProductHuntLine } from "react-icons/ri";
import { CgNotes } from "react-icons/cg";
import { MenuItem, Submenu } from "../types/Sidebar.type";
import { TbDeviceHeartMonitorFilled } from 'react-icons/tb';

export const submenus: Submenu[] = [
  {
    id: 1,
    title: "Dashboard",
    activeIcon: <LuHome size={24} color="#fff" />,
    inactiveIcon: <LuHome size={24} color="#5A89C8" />,
  },
  {
    id: 2,
    title: "Power Monitoring",
    activeIcon: <TbDeviceHeartMonitorFilled size={24} color={"#fff"} />
    ,
    inactiveIcon: <LuHome size={24} color="#5A89C8" />,
  },
  {
    id: 3,
    title: "Thông tin sản xuất",
    activeIcon: <IoBriefcaseOutline size={24} color="#fff" />,
    inactiveIcon: <IoBriefcaseOutline size={24} color="#5A89C8" />,
  },
  {
    id: 4,
    title: "Quản lý sản xuất",
    activeIcon: <RiProductHuntLine size={24} color="#fff" />,
    inactiveIcon: <RiProductHuntLine size={24} color="#5A89C8" />,
  },
  {
    id: 5,
    title: "Sản xuất",
    activeIcon: <CgNotes size={24} color="#fff" />,
    inactiveIcon: <CgNotes size={24} color="#5A89C8" />,
  },
  {
    id: 6,
    title: "Quản lý thực thi sản xuất",
    activeIcon: <CgNotes size={24} color="#fff" />,
    inactiveIcon: <CgNotes size={24} color="#5A89C8" />,
  },
  {
    id: 7,
    title: "Thống kê, báo cáo",
    activeIcon: <CgNotes size={24} color="#fff" />,
    inactiveIcon: <CgNotes size={24} color="#5A89C8" />,
  },
  {
    id: 8,
    title: "Hành chính nhân sự",
    activeIcon: <CgNotes size={24} color="#fff" />,
    inactiveIcon: <CgNotes size={24} color="#5A89C8" />,
  },
  {
    id: 9,
    title: "Thiết lập",
    activeIcon: <CgNotes size={24} color="#fff" />,
    inactiveIcon: <CgNotes size={24} color="#5A89C8" />,
  },
];

export const menuItemChildren: MenuItem[] = [
  {
    submenu_id: 2,
    title: "Real-time Monitoring",
    url: "/real-time-monitoring",
  },
  {
    submenu_id: 3,
    title: "Quản lý công đoạn SX",
    url: "/",
  },
  {
    submenu_id: 3,
    title: "Quản lý quy trình",
    url: "/",
  },
  {
    submenu_id: 3,
    title: "Định mức sản phẩm",
    url: "/",
  },
  {
    submenu_id: 4,
    title: "Quản lý order",
    url: "/",
  },
  {
    submenu_id: 4,
    title: "Kế hoạch xuất hàng",
    url: "/",
  },
  {
    submenu_id: 4,
    title: "Kế hoạch sản xuất",
    url: "/",
  },
  {
    submenu_id: 5,
    title: "Yêu cầu xuất linh kiện/NVL",
    url: "/",
  },
  {
    submenu_id: 5,
    title: "Yêu cầu nhập kho thành phẩm",
    url: "/",
  },
  {
    submenu_id: 5,
    title: "Yêu cầu trả linh kiện/NVL",
    url: "/",
  },
  {
    submenu_id: 7,
    title: "Báo cáo sản xuất hàng ngày",
    url: "/",
  },
  {
    submenu_id: 7,
    title: "Báo cáo về tiến độ sản xuất",
    url: "/",
  },
  {
    submenu_id: 7,
    title: "Báo cáo chất lượng",
    url: "/",
  },
  {
    submenu_id: 7,
    title: "Báo cáo tiêu hao NVL",
    url: "/",
  },
  {
    submenu_id: 7,
    title: "Báo cáo tiến độ",
    url: "/",
  },
  {
    submenu_id: 7,
    title: "Báo cáo năng suất",
    url: "/",
  },
  {
    submenu_id: 9,
    title: "Thiết lập lịch làm việc",
    url: "/",
  },
];
