import React from "react";
import Select from "react-select";

export interface Option {
  label: string;
  value: any;
}

interface SelectCompProps {
  options: Option[];
  placeholder: string;
  multiple?: true;
}

const SelectComp = ({ options, multiple, placeholder }: SelectCompProps) => {
  return (
    <div>
      <Select
        styles={{
          placeholder: (styles) => ({
            ...styles,
            color: '#A5ADB6'
          }),
          control: (styles) => ({
            ...styles,
            // height: 42,
            fontSize: 14,
            border: 'none',
            color: 'red'
          }),
          menu: (styles) => ({
            ...styles,
          }),
          option: () => ({}),
          singleValue: () => ({}),
        }}
        placeholder={placeholder}
        className="w-[260px] !h-[42px] !text-red-500 border-[#EDF0F4] border-[1px] rounded-[5px] shadow-sm  bg-sub-background-primary appearance-none outline-none"
        options={options}
        isMulti={multiple}
      />
    </div>
  );
};

export default SelectComp;
