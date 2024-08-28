import React, { useState } from 'react';
import FunctionalBar from '../components/page-element/FunctionalBar';
import FilterComp from '../components/page-element/FilterComp';
import TableComp from '../components/page-element/TableComp';
import PaginationComp from '../components/page-element/PaginationComp';
import ModalComp from '../components/modal/ModalComp';
import { ColumnDefinition } from '../types/Table.type';
import { Tab } from '../types/Tab.type';

type PageLayoutProps <T, K extends keyof T> = {
  columns: ColumnDefinition<T, K>[]
  tabData: Tab<T>[]
  createRoutePath: string
}

const PageLayout =<T extends {type: string, id: number}, K extends keyof T> ({columns, tabData, createRoutePath} : PageLayoutProps<T, K>) => {

  // Modal
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  return (
    <div>
      {/* FunctionalBar */}
      <FunctionalBar createRoutePath={createRoutePath} />
      {/* Filter */}
      <FilterComp />
      {/* Table */}
      <TableComp columns={columns} tabData={tabData} openModal={openModal} />
      {/* Pages */}
      <PaginationComp />
      <ModalComp closeModal={closeModal} isOpenModal={isOpenModal} />
    </div>

  );
};

export default PageLayout;