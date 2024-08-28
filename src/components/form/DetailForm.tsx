import React from 'react';
import { ColumnDefinition } from '../../types/Table.type';
import FunctionalBarDetail from '../other/FunctionalBarDetail';
/*
* 1. Param
* object find by id -> target: T
* columns: ColumnDefinition<T, keyof T>
* 2. Implement
* generateValue(value: T[keyof T])
* */

type DetailFormProps<T> = {
  target: T
  columns: ColumnDefinition<T, keyof T>[]
}

const DetailForm = <T, >({ target, columns }: DetailFormProps<T>) => {

  const generateValue = (value: T[keyof T]): string => {
    if (!value || value === '') return 'N/A';
    return value.toString();
  };

  return (
    <div>
      <FunctionalBarDetail />
      <div className={'px-20 py-5 gap-4 grid grid-cols-2 border-b-[1px] pb-10 animate-fade-right'}>
        <div className={'flex'}>
          <p className={'w-1/5 px-2 flex items-center justify-between'}>
            <span className={' text-sm font-bold '}>Trạng thái</span>
            <span>:</span>
          </p>
          <label className="inline-flex items-center cursor-pointer">
            <input defaultChecked={true} type="checkbox" className="sr-only peer" />
            <div
              className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#018297]" />
          </label>
        </div>
        <div></div>
        {columns.map((column, index) => {
          if (!column.key) return <>Lỗi</>;
          let value = target[column.key];
          return (
            <div key={index} className={'text-sm flex'}>
              <p className={'w-1/5 flex justify-between items-center px-2'}>
                <span className={'font-bold'}>{column.name}</span>
                <span>:</span>
              </p>
              <p>{generateValue(value)}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DetailForm;