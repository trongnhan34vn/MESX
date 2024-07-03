import React from "react";
import SelectPagination from "../common/SelectNumberPagination";
import SelectNumberPagination from "../common/SelectNumberPagination";
import Pagination from "../common/Pagination";

const PaginationComp = () => {
  return (
    <div className="flex items-center justify-between p-2">
      <SelectNumberPagination />
      <Pagination />
    </div>
  );
};

export default PaginationComp;
