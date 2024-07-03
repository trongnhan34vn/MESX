import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import React, { useState } from "react";

const SelectNumberPagination = () => {
  const [amountPage, setAmountPage] = useState(20);
  const amountNumberPages = [20, 30, 50];
  return (
    <Menu>
      <MenuButton className="bg-[#EDEFF4] opacity-85 hover:opacity-100 transition-all duration-200 ease-in text-sm p-1 flex gap-2 rounded">
        <p>Số dòng mỗi trang</p>
        <span>{amountPage}</span>
      </MenuButton>

      <MenuItems
        transition
        anchor="right start"
        className="w-20 origin-top-right rounded border bg-white shadow-lg border-white/5 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
      >
        {amountNumberPages.map((amount, index) => {
          return (
            <MenuItem key={index}>
              <button
                onClick={() => setAmountPage(amount)}
                className={`${
                  amount === amountPage ? "bg-[#EEF2F9]" : ""
                } group flex w-full text-center text-black hover:bg-[#F6F6F6] items-center gap-2 rounded py-1.5 px-3`}
              >
                {amount}
              </button>
            </MenuItem>
          );
        })}
      </MenuItems>
    </Menu>
  );
};

export default SelectNumberPagination;
