import React from "react";
import { IoNotificationsOutline } from "react-icons/io5";

const Header = () => {
  return (
    <div className="flex w-full">
      <div className="w-full justify-between flex max-h-[64px] items-center overflow-hidden bg-[#fff] px-[16px] py-[6px]">
        <div>
          <p className="text-[24px] font-bold">Quản lý công đoạn</p>
          <p className="text-[12px]">Thông tin sản xuất / Quản lý công đoạn</p>
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
