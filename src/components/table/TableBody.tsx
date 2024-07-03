import React from "react";
import { TableProps } from "../../types/Table.type";
import TableActionItem from "./TableActionItem";

const TableBody = <T, K extends keyof T>({
  columns,
  data,
}: TableProps<T, K>) => {
  const generateContent = (value: T[K]) => {
    if (!value) return <span className="text-red-500">Something Error</span>;
    return value.toString();
  };
  const generateTableBody = () => {
    if (data.length > 0) {
      return (
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={index} className="odd:bg-white even:bg-[#F2F5F7]">
                <td className="text-center border-r-[1px] border-[#CAD5E0] border-b-[1px]">
                  <input type="checkbox" />
                </td>
                {columns.map((column) => {
                  if (!column.key) return;
                  const value = item[column.key];
                  return (
                    <td
                      key={column.name}
                      className="border-r-[1px] text-sm border-[#CAD5E0] px-2 border-b-[1px]"
                    >
                      {column.render
                        ? column.render(item)
                        : generateContent(value)}
                    </td>
                  );
                })}
                <td className="border-r-[1px] border-[#CAD5E0] px-2 border-b-[1px]">
                  <TableActionItem />
                </td>
              </tr>
            );
          })}
        </tbody>
      );
    }
    return  <td colSpan={7} className="w-full text-center">Không có dữ liệu</td>
  };
  return generateTableBody();
};

export default TableBody;
