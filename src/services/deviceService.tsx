import { Device } from '../types/Device.type';
import instance from './instance';

export const createDeviceService = async (device: Device) => {
  let path = "/api/device/create"
  let response = await instance.post(path, device);
  return response.data;
}

export const getDevices = async () => {
  let path = "/api/device";
  let response = await instance.get(path);
  return response.data;
}

export const findByIdService = async (id: string) => {
  let path = "/api/device/" + id;
  let response = await instance.get(path);
  return response.data;
}