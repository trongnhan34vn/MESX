import { RootState } from './store';

export const authSelector = (state: RootState)  => state.auth;
export const deviceSelector = (state: RootState) => state.device;
export const categorySelector = (state: RootState) => state.category;