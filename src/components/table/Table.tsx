import React from "react";
import { TableProps } from "../../types/Table.type";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

const Table = <T, K extends keyof T>({ columns, data }: TableProps<T, K>) => {
  return (
    <div className="w-full">
      <table className="table w-full border-[1px] border-[#CAD5E0]">
        <TableHeader columns={columns} data={data} />
        <TableBody columns={columns} data={data} />
      </table>
    </div>
  );
};

export default Table;
