export type Device = {
  id: number
  userId: number
  machineCode: string
  model: string
  serial: string
  manufacturer: string
  country: string
  weight?: string
  location?: string
  size?: string
  part?: string
  structure?: string
  specifications?: string
  quantity?: string
  parameter?: string
  deviceType?: string
  productionType?: string
  typeOfDevice?: string
  image?: string
  type: 'device'
}

export type DeviceField = {
  name: string,
  field: string,
  placeholder: string,
}