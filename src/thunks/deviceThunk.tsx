import { Device } from '../types/Device.type';
import { Dispatch } from 'redux';
import { createDeviceService, findByIdService, getDevices } from '../services/deviceService';
import { getCreateResponse, getDetailResponse, getListResponse } from '../redux/reducers/deviceSlice';
import { AxiosError } from 'axios';

export const createDevice = (device: Device) => {
  return async function createDeviceThunk(dispatch: Dispatch) {
    try {
      let response = await createDeviceService(device);
      console.log('Create Device Response: ', response);
      dispatch(getCreateResponse(response));
    } catch (error) {
      let axiosError = error as AxiosError;
      console.error('Create Device Error: ', axiosError);
      if (axiosError.response)
        dispatch(getCreateResponse(axiosError.response.data));
    }
  };
};

export const getList = () => {
  return async function getListThunk(dispatch: Dispatch) {
    try {
      let response = await getDevices();
      console.log('List Device ', response);
      dispatch(getListResponse(response));
    } catch (error) {
      console.log("Get Device Error: ", error);
    }
  };
};

export const findById = (id: string) => {
  return async function findByIdThunk(dispatch: Dispatch) {
    try {
      let response = await findByIdService(id);
      console.log('Device ', response);
      dispatch(getDetailResponse(response));
    } catch (error) {
      console.log("Get Device Error: ", error);
    }
  };
}




