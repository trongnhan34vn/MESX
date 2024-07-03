import React from "react";
import { TableProps } from "../../types/Table.type";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

const TableHeader = <T, K extends keyof T>({
  columns,
  data,
}: TableProps<T, K>) => {
  const generateTableHeader = () => {
    return (
      <thead className="bg-[#DAE7F3] text-left">
        <tr>
          <th className="text-center w-[4%] border-r-[1px] border-[#CAD5E0] px-2">
            <input type="checkbox" />
          </th>
          {columns.map((column) => {
            return (
              <th key={column.name} className="border-r-[1px] border-[#CAD5E0] px-2">
                <div className="flex items-center gap-2">
                  <p>{column.name}</p>
                  <div className="flex flex-col">
                    <IoMdArrowDropup className="" />
                    <IoMdArrowDropdown />
                  </div>
                </div>
              </th>
            );
          })}

          {/* <th className="border-r-[1px] border-[#CAD5E0] px-2">
            Tên công đoạn
          </th>
          <th className="border-r-[1px] border-[#CAD5E0] px-2">Cost Center</th>
          <th className="border-r-[1px] border-[#CAD5E0] px-2">Quy trình</th>
          <th className="border-r-[1px] border-[#CAD5E0] px-2">Trạng thái</th> */}
          <th className="border-r-[1px] border-[#CAD5E0] px-2">Hành động</th>
        </tr>
      </thead>
    );
  };
  return generateTableHeader();
};

export default TableHeader;
