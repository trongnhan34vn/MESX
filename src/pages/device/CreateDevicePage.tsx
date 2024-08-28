import React, { useContext } from 'react';

import { useNavigate } from 'react-router-dom';
import { MainContext } from '../../context/context';
import { AppDispatch } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import CreateForm from '../../components/form/CreateForm';
import { Device } from '../../types/Device.type';
import { Field } from '../../types/Form.type';
import { createDevice } from '../../thunks/deviceThunk';
import { deviceSelector } from '../../redux/selector';
import { Response } from '../../types/ApiRestful.type';
import { HttpStatus } from '../../enum/HttpStatus';
import toast from 'react-hot-toast';
import BackButton from '../../components/common/BackButton';
import { getCreateResponse } from '../../redux/reducers/deviceSlice';

const CreateDevicePage = () => {
  const navigate = useNavigate();
  const mainContext = useContext(MainContext);
  const dispatch: AppDispatch = useDispatch();

  const deviceFields: Field[] = [
    {
      name: 'Mã thiết bị',
      field: 'machineCode',
      placeholder: 'Mã thiết bị',
      required: true,
    },
    {
      name: 'Model',
      field: 'model',
      placeholder: 'Model',
      required: true,
    },
    {
      name: 'Serial',
      field: 'serial',
      placeholder: 'Serial',
      required: true,
    },
    {
      name: 'Nhà sản xuất',
      field: 'manufacturer',
      placeholder: 'Nhà sản xuất',
      required: true,
    },
    {
      name: 'Quốc gia',
      field: 'country',
      placeholder: 'Quốc gia',
      required: false,
    },
  ];

  const initDevice: Device = {
    id: 0,
    userId: 1,
    machineCode: '',
    model: '',
    serial: '',
    manufacturer: '',
    country: '',
    type: 'device',
  };

  const onSubmit = (data: Device) => {
    let createDeviceMessage = 'Creating new device...';
    mainContext.setLoadingScreen({
      isShow: true,
      message: createDeviceMessage,
    });
    setTimeout(() => {
      dispatch(createDevice(data));
    }, 2000);
  };

  const createDeviceResponse = useSelector(deviceSelector).createResponse;

  const reset = () => {
    dispatch(getCreateResponse(null))
  }
  const handleResponse = (response: Response<Device> | null) => {
    let createDeviceSuccessMessage = 'Tạo thiết bị mới thành công!';
    let createDeviceFailMessage = 'Tạo thiết bị mới thất bại';
    if (!response) return;
    if (response.status) {
      // tạo thành công
      toast.success(createDeviceSuccessMessage);
      navigate(-1);
      mainContext.setLoadingScreen({
        isShow: false,
        message: '',
      });
      reset();
      return;
    }
    mainContext.setLoadingScreen({
      isShow: false,
      message: '',
    });
    toast.error(createDeviceFailMessage);
    reset();
    return;
  };

  return (
    <div className={'p-2'}>
      <BackButton />
      <CreateForm
        fields={deviceFields}
        initData={initDevice}
        onSubmit={onSubmit}
        response={createDeviceResponse}
        handleResponse={handleResponse}
      />
    </div>
  )
    ;
};

export default CreateDevicePage;