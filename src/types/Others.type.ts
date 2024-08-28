import { UserSignIn } from './User.type';

export type Alert = {
  id: number,
  status: 'normal' | 'offline' | 'fault' | 'alarm'
  pcs_num: number
  color: string
}

export type Report = {
  name: string,
  amount: number,
  img: string,
  unit: string
}

export type Device = {
  id: number,
  name: string,
  gateway_id: string,
  meterAddress: string,
  meterType: string,
  status: boolean
}

export type Parameter = {
  device_id: number,
  id: number,
  name: string,
  unit: string
}

export type ParameterValue = {
  parameter_id: number,
  value: Map<String, String>
}

export type AccessTokenType = {
  tokenAccess: string,
  userLogin: UserSignIn
  expires: number
}

export type LoadingScreenType = {
  isShow: boolean
  message: string
}