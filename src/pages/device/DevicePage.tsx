import React, { useEffect } from 'react';

import { ColumnDefinition } from '../../types/Table.type';
import { AppDispatch } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { getList } from '../../thunks/deviceThunk';
import { deviceSelector } from '../../redux/selector';
import { Device } from '../../types/Device.type';
import { generateStageTab } from '../../utils/tabStageUtils';
import PageLayout from '../../layouts/PageLayout';

/**
 * 4 phần: FunctionalBar, Filter, Table(Tab Filter, Content), Pages
 * @returns
 */
const DevicePage = () => {
  const dispatch: AppDispatch = useDispatch();
  const columns: ColumnDefinition<Device, keyof Device>[] = [
    {
      name: 'Mã thiết bị',
      key: 'machineCode',
    },
    {
      name: 'Serial',
      key: 'serial',
    },
    {
      name: 'Quốc gia',
      key: 'country',
    },
    {
      name: 'Nhà sản xuất',
      key: 'manufacturer',
    },
  ];

  // get devices
  useEffect(() => {
    dispatch(getList());
  }, []);

  // response
  const deviceListResponse = useSelector(deviceSelector).list;
  let devices = deviceListResponse ? deviceListResponse.data : [];
  devices = devices.map(device => ({
    ...device, type: 'device',
  }));
  const activeDevices: Device[] = [];
  const inactiveDevices: Device[] = [];
  const deviceStageTabs = generateStageTab<Device>(devices, activeDevices, inactiveDevices);

  const createRoutePath = '/app/device/create'
  return (
    <div>
      <PageLayout
        createRoutePath={createRoutePath}
        columns={columns}
        tabData={deviceStageTabs}
      />
    </div>
  );
};

export default DevicePage;
