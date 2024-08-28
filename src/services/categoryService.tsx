import instance from './instance';
import { Category } from '../types/Category.type';

export const findAllService = async () => {
  let path = "/api/category-device"
  let response = await instance.get(path);
  return response.data;
}

export const createService = async (data: Category) => {
  let path = "/api/category-device/create"
  let response = await instance.post(path,data);
  return response.data;
}

export const findByIdService = async (id: string) => {
  let path = "/api/category-device/"+ id
  let response = await instance.get(path);
  return response.data;
}