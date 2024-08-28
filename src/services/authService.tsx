import instance from './instance';
import { UserSignIn } from '../types/User.type';

export const signInService = async (user: UserSignIn) => {
  let path = "/api/auth/login"
  let response = await instance.post(path, user);
  return response.data;
}