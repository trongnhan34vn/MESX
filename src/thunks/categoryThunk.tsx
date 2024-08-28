import { Dispatch } from 'redux';
import { createService, findAllService, findByIdService } from '../services/categoryService';
import { getAll, getById, getCreate } from '../redux/reducers/categorySlice';
import { AxiosError } from 'axios';
import { Category } from '../types/Category.type';

export const findAll = () => {
  return async function findAllThunk(dispatch: Dispatch) {
    try {
      let response = await findAllService();
      dispatch(getAll(response));
    } catch (error) {
      let err = error as AxiosError;
      if (!err.response) return;
      dispatch(getAll(err.response.data));
    }
  };
};

export const createCategory = (category: Category) => {
  return async function createThunk(dispatch: Dispatch) {
    try {
      let response = await createService(category);
      dispatch(getCreate(response));
    } catch (error) {
      let axiosError = error as AxiosError;
      if (axiosError.response)
        dispatch(getCreate(axiosError.response.data));
    }
  };
};

export const findById = (id: string) => {
  return async function findByIdThunk(dispatch: Dispatch) {
    try {
      let response = await findByIdService(id);
      console.log(response);
      dispatch(getById(response));
    } catch (error) {
      console.log("Find By Id Error: " + error);
    }
  }
}