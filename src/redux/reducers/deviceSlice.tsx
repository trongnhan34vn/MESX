import { createSlice } from '@reduxjs/toolkit';
import { Response } from '../../types/ApiRestful.type';
import { Device } from '../../types/Device.type';

type DeviceSlice = {
  createResponse: Response<Device> | null;
  list: Response<Device[]> | null;
  detailResponse: Response<Device> | null;
};

const initState: DeviceSlice = {
  createResponse: null,
  list: null,
  detailResponse: null,
};

const deviceSlice = createSlice(
  {
    name: 'device',
    initialState: initState,
    reducers: {
      getCreateResponse: (state, action) => {
        state.createResponse = action.payload;
      },
      getListResponse: (state, action) => {
        state.list = action.payload;
      },
      getDetailResponse: (state, action) => {
        state.detailResponse = action.payload;
      },
    },
  },
);

export default deviceSlice.reducer;
export const { getCreateResponse, getListResponse, getDetailResponse } = deviceSlice.actions;