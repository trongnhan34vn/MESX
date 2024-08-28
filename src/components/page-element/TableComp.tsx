import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import React from "react";
import Table from "../table/Table";
import { GoTasklist } from "react-icons/go";
import { ColumnDefinition } from "../../types/Table.type";
import { Tab as ITab } from "../../types/Tab.type";
import Button from "../common/Button";

interface ITableCompProps<T, K extends keyof T> {
  columns: ColumnDefinition<T, K>[];
  tabData: ITab<T>[];
  openModal?: () => void;
}

const TableComp = <T extends {type: string, id: number}, K extends keyof T>({
  columns,
  tabData,
  openModal
}: ITableCompProps<T, K>) => {
  return (
    <div className="relative p-2">
      {/* Tab Filter */}
      <div>
        <TabGroup className={""}>
          <TabList className={"flex gap-4 mb-2"}>
            {tabData.map((tab) => {
              return (
                <Tab
                  key={tab.id}
                  className={
                    "text-sm text-[#00000099] data-[selected]:text-black border-b-[3px] border-b-transparent p-2 data-[selected]:font-bold data-[selected]:border-b-[#0050ae] outline-none"
                  }
                >
                  {tab.name}
                </Tab>
              );
            })}
          </TabList>
          <TabPanels>
            {tabData.map((tab, index) => {
              return (
                <TabPanel key={index}>
                  <Table columns={columns} data={tab.data} />
                </TabPanel>
              );
            })}
          </TabPanels>
        </TabGroup>
      </div>
      <div className="absolute top-0 right-2">
          <Button type={'button'} onClick={openModal} title={<GoTasklist size={24} className="w-full" />} />
      </div>
    </div>
  );
};

export default TableComp;
