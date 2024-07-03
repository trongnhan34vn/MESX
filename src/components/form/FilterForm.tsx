import React from "react";
import Input from "../common/Input";
import SelectComp from "../common/SelectComp";
import Button from "../common/Button";

const FilterForm = () => {
  return (
    <div className="flex gap-4 border-b-[1px] pb-2 border-[#dae7f3]">
      <Input type="text" placeholder="Mã công đoạn" />
      <Input type="text" placeholder="Tên công đoạn" />
      <SelectComp
        multiple={true}
        placeholder="Cost Center"
        options={[]}
      />
      <SelectComp
        multiple={true}
        placeholder="Quy trình"
        options={[]}
      />
      <Button title="Huỷ" />
      <Button title="Lọc" isPrimary />
    </div>
  );
};

export default FilterForm;
