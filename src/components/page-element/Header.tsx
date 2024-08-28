import React from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import { useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const generateTitle = () => {
    if (pathname.includes('device')) {
      return 'Quản lý thiết bị';
    }

    if (pathname.includes('dashboard')) {
      return 'Dashboard'
    }

    if (pathname.includes('category')) {
      return 'Quản lý danh mục';
    }
  }

  const generateDevicePath = () => {
    let path = '';
    let prefix = "Quản lý thiết bị"

      path = prefix + " / Quản lý thiết bị";

    if (pathname.includes("create")) {
      path = prefix + " / Tạo mới thiết bị";
    }
    if (pathname.includes("detail")) {
      path = prefix + " / Chi tiết thiết bị";
    }
    return path;
  }

  const generateCategoryPath = () => {
    let path = '';
    let prefix = "Quản lý danh mục"

    path = prefix + " / Quản lý danh mục";

    if (pathname.includes("create")) {
      path = prefix + " / Tạo mới danh mục";
    }
    if (pathname.includes("detail")) {
      path = prefix + " / Chi tiết danh mục";
    }
    return path;
  }

  const generatePath = () => {
    let path = '';
    if (pathname.includes('dashboard')) {
      return 'Dashboard'
    }
    if (pathname.includes('device')) {
      path = generateDevicePath()
    }
    if (pathname.includes('category')) {
      path = generateCategoryPath()
    }
    return path;
  }

  return (
    <div className="flex w-full">
      <div className="w-full justify-between flex max-h-[64px] items-center overflow-hidden bg-[#fff] px-[16px] py-[6px]">
        <div>
          <p className="text-[24px] font-bold">{generateTitle()}</p>
          <p className="text-[12px]">{generatePath()}</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="w-10 h-10 bg-[#E7EAEE] flex items-center justify-center rounded">
            <IoNotificationsOutline size={24} />
          </button>
          <button className="w-10 h-10 bg-[#E7EAEE] flex items-center justify-center rounded">
            VI
          </button>
          <button className="w-10 h-10 bg-[#F6B028] flex items-center justify-center rounded">
            NT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
