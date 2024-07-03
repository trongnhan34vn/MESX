import React from "react";
import SidebarComp from "../components/page-element/SidebarComp";
import Header from "../components/page-element/Header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex h-full">
      <div>
        <SidebarComp />
      </div>
      <div className="w-full h-full">
        <Header />
        <div className="w-full h-[calc(100vh-64px)] p-4">
          <div className="w-full h-full bg-white">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
