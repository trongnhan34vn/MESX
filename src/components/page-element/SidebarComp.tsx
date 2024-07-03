import React, { useState } from "react";
import {
  Menu,
  MenuItem,
  Sidebar,
  sidebarClasses,
  SubMenu,
} from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { menuItemChildren, submenus } from "../../constants/sidebar";
import { RiArrowLeftDoubleFill } from "react-icons/ri";

const SidebarComp = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  return (
    <div className="relative h-full no-scrollbar">
      <button
        onClick={() => {
          setCollapsed((pre) => !pre);
        }}
        className={`transition-all duration-200 ease-linear absolute w-6 z-50 h-6 bg-white border-[1px] border-[#1b75de] rounded-[50%] flex items-center justify-center top-20 -right-2`}
      >
        <RiArrowLeftDoubleFill size={18} />
      </button>

      <Sidebar
        collapsed={collapsed}
        className="h-full text-sm bg-[#018297] no-scrollbar"
        rootStyles={{
          [`.${sidebarClasses.container}`]: {
            backgroundColor: "#018297",
            color: "#fff",
          },
        }}
      >
        <div
          className={`${
            collapsed ? "w-[79px]" : "w-[249px]"
          } z-10  bg-[#018297] fixed py-5 px-5 mb-8 transition-all duration-[0.3s] ease`}
        >
          <img
            src="https://demo-6.vti-solutions.vn/static/media/mesx.f6b0d93a.svg"
            alt=""
          />
        </div>
        <Menu className={"no-scrollbar mt-24"}>
          {submenus.map((submenu) => {
            if (submenu.id === 1) {
              return (
                <MenuItem
                  key={submenu.id}
                  icon={submenu.activeIcon}
                  component={<Link to={"/"} />}
                >
                  {submenu.title}
                </MenuItem>
              );
            }
            return (
              <SubMenu
                key={submenu.id}
                className=""
                icon={submenu.activeIcon}
                label={submenu.title}
              >
                {menuItemChildren.map((item, index) => {
                  if (item.submenu_id === submenu.id) {
                    return (
                      <MenuItem key={index} component={<Link to={item.url} />}>
                        {item.title}
                      </MenuItem>
                    );
                  }
                })}
              </SubMenu>
            );
          })}
        </Menu>
      </Sidebar>
    </div>
  );
};

export default SidebarComp;
