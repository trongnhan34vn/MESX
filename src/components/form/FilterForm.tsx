import React from "react";
import Input from "../common/Input";
import SelectComp from "../common/SelectComp";
import Button from "../common/Button";
import { useForm } from 'react-hook-form';

const FilterForm = () => {
  const{register, formState:{errors}, handleSubmit}=useForm()
  const testRender = () => {
    return (
      <div className="flex gap-4 border-b-[1px] pb-2 border-[#dae7f3]">
        <Input required={true} errors={errors} register={register} name={'Mã thiết bị'} field={'machineCode'} type="text" placeholder="Mã thiết bị" />
        <Input required={true} errors={errors} register={register} name={'Tên thiết bị'} field={'machineName'} type="text" placeholder="Tên thiết bị" />
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
        <Button type={'button'} title="Huỷ" />
        <Button type={'button'} title="Lọc" isPrimary />
      </div>
    )
  }

  return (
    <div>
      {testRender()}
    </div>
  );
};

export default FilterForm;
