import React, { useState } from "react";

import Table from "../components/table/Table";
import { ColumnDefinition } from "../types/Table.type";
import { ProductStage as IProductStage } from "../types/ProductStage.type";
import PaginationComp from "../components/page-element/PaginationComp";
import FilterComp from "../components/page-element/FilterComp";
import FunctionalBar from "../components/page-element/FunctionalBar";
import TableComp from "../components/page-element/TableComp";
import { productStageTabs } from "../constants/tab";
import ModalComp from "../components/modal/ModalComp";

/**
 * 4 phần: FunctionalBar, Filter, Table(Tab Filter, Content), Pages
 * @returns
 */
const ProductStage = () => {
  const columns: ColumnDefinition<IProductStage, keyof IProductStage>[] = [
    {
      name: "Mã công đoạn",
      key: "stageCode",
    },
    {
      name: "Tên công đoạn",
      key: "name",
    },
    {
      name: "CostCenter",
      key: "costCenter",
    },
    {
      name: "Quy trình",
      key: "procedure",
    },
    {
      name: "Trạng thái",
      key: "status",
      render: (data) => {
        if (data.status) {
          return <p className="text-[#0fa44a]">Hoạt động</p>;
        }
        return <p className="text-red-500">Không hoạt động</p>;
      },
    },
  ];

  const [isOpenModal, setIsOpenModal] = useState(false);
  
  const openModal = () => {
    console.log(isOpenModal);
    
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  return (
    <div>
      {/* FunctionalBar */}
      <FunctionalBar />
      {/* Filter */}
      <FilterComp />
      {/* Table */}
      <TableComp columns={columns} tabData={productStageTabs} openModal={openModal} />
      {/* Pages */}
      <PaginationComp />
      <ModalComp closeModal={closeModal} isOpenModal={isOpenModal} />
    </div>
  );
};

export default ProductStage;
