import { Alert, Device, Parameter, ParameterValue, Report } from '../types/Others.type';

export const devices: Device[] = [
  {
    id: 1,
    name: 'Đồng hồ đo điện',
    status: false,
    gateway_id: '12379871238947',
    meterAddress: '391247712987123',
    meterType: 'ADL400',
  },
  {
    id: 2,
    name: 'Nhiệt ẩm',
    status: false,
    gateway_id: '12379871238947',
    meterAddress: '391247712987123',
    meterType: 'ADL400',
  },
];

export const alerts: Alert[] = [
  {
    id: 1,
    status: 'normal',
    pcs_num: 0,
    color: '#01ada8',
  },
  {
    id: 2,
    status: 'offline',
    pcs_num: 2,
    color: '#9d9d9d',
  },
  {
    id: 3,
    status: 'fault',
    pcs_num: 0,
    color: '#dfb111',
  },
  {
    id: 4,
    status: 'alarm',
    pcs_num: 0,
    color: '#E83333',
  },
];

export const reports: Report[] = [
  {
    name: 'Electricty consumption today',
    amount: 0,
    img: 'https://iot.acrel-eem.com/static/img/todayElec-L-18229642dc0a8fc2fa2a4f17d530eec7.png',
    unit: 'kWh',
  },
  {
    name: 'Comprehensive energy consumption',
    amount: 0,
    img: 'https://iot.acrel-eem.com/static/img/todayEnergy-L-4cad32f3ecc88e9b1895516e89fe7dfb.png',
    unit: 'kgce',
  },
  {
    name: 'Carbon emissions',
    amount: 0,
    img: 'https://iot.acrel-eem.com/static/img/todayCo2-L-7daab2818c0e3e4e3bfcc0dda84d0c6a.png',
    unit: 'kg',
  },
];

export const parameters: Parameter[] = [
  {
    device_id: 1,
    id: 1,
    name: 'Phase voltage',
    unit: 'V',
  },
  {
    device_id: 1,
    id: 2,
    name: 'Phase current',
    unit: 'A',
  },
  {
    device_id: 1,
    id: 3,
    name: 'Active power',
    unit: 'kW',

  },
  {
    device_id: 1,
    id: 4,
    name: 'Reactive power',
    unit: 'kVar',

  },
  {
    device_id: 1,
    id: 5,
    name: 'Power factor',
    unit: '',
  },
  {
    device_id: 1,
    id: 6,
    name: 'Ratio',
    unit: '',
  },
  {
    device_id: 1,
    id: 7,
    name: 'Active energy',
    unit: 'kW.h',

  },
  {
    device_id: 1,
    id: 8,
    name: 'Reactive energy',
    unit: 'kVar.h',
  },
  {
    device_id: 2,
    id: 9,
    name: 'Temperature',
    unit: '*C'
  },
  {
    device_id: 2,
    id: 10,
    name: 'Humidity',
    unit: '%'
  }
];

export const parameterValues: ParameterValue[] = [
  {
    parameter_id: 1,
    value: new Map<String, String>([
        ['Ua', '218'],
        ['Ub', '218'],
        ['Uc', '224'],
      ],
    ),
  },
  {
    parameter_id: 2,
    value: new Map<String, String>([
        ['Ia', '0.85'],
        ['Ib', '0.85'],
        ['Ic', '0.82'],
      ],
    ),
  },
  {
    parameter_id: 3,
    value: new Map<String, String>([
        ['Pa', '0.168'],
        ['Pb', '0.173'],
        ['Pc', '0.166'],
        ['P', '0.507'],
      ],
    ),
  },
  {
    parameter_id: 4,
    value: new Map<String, String>([
        ['Qa', '0.067'],
        ['Qb', '0.072'],
        ['Qc', '0.073'],
        ['Q', '0.213'],
      ],
    ),
  },
  {
    parameter_id: 5,
    value: new Map<String, String>([
        ['PF', '0.922'],
      ],
    ),
  },
  {
    parameter_id: 6,
    value: new Map<String, String>([
        ['PT', '1'],
      ['CT', '1'],
      ],
    ),
  },
  {
    parameter_id: 7,
    value: new Map<String, String>([
        ['PT', '1'],
        ['CT', '1'],
      ],
    ),
  },
  {
    parameter_id: 8,
    value: new Map<String, String>([
        ['EQL', '163.45'],
        ['EQC', '0'],
      ],
    ),
  },
  {
    parameter_id: 9,
    value: new Map<String, String> (
      [
        ['Phòng UV1', '23.8'],
        ['Phòng DG1', '23.2'],
        ['Phòng UV2', '21.8'],
        ['Phòng DG2', '33.8'],
        ['Phòng làm nguội', '24.8'],

        ['Temp6', '24.8'],
        ['Temp7', '24.8'],
        ['Temp8', '24.8'],
        ['Temp9', '24.8'],
        ['Temp10', '24.8'],
        ['Temp11', '24.8'],
        ['Temp12', '24.8'],
        ['Temp13', '24.8'],
        ['Temp14', '24.8'],
        ['Temp15', '24.8'],
        ['Temp16', '24.8'],
        ['Temp17', '24.8'],
        ['Temp18', '24.8'],
        ['Temp19', '24.8'],

      ]
    )
  },
  {
    parameter_id: 10,
    value: new Map<String, String> (
      [
        ['Phòng UV1', '52'],
        ['Phòng DG1', '58.1'],
        ['Phòng UV2', '59.7'],
        ['Phòng DG2', '0'],
        ['Phòng làm nguội', '66.1'],

        ['Temp6', '0'],
        ['Temp7', '0'],
        ['Temp8', '0'],
      ]
    )
  }
];