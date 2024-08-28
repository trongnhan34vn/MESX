import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AppDispatch } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { findById } from '../../thunks/deviceThunk';
import { deviceSelector } from '../../redux/selector';
import { Device } from '../../types/Device.type';
import { ColumnDefinition } from '../../types/Table.type';
import DetailForm from '../../components/form/DetailForm';

const DetailDevicePage = () => {
  const dispatch: AppDispatch = useDispatch();
  const { deviceId } = useParams();

  // get device by id
  useEffect(() => {
    if (!deviceId) return;
    dispatch(findById(deviceId));
  }, [deviceId]);

  // response
  const detailResponse = useSelector(deviceSelector).detailResponse;
  const device = detailResponse ? detailResponse.data : null;

  const columns: ColumnDefinition<Device, keyof Device>[] = [
    {
      name: 'Mã thiết bị',
      key: 'machineCode',
    },
    {
      name: 'Quốc gia',
      key: 'country',
    },
    {
      name: 'Nhà sản xuất',
      key: 'manufacturer',
    },
    {
      name: 'Model',
      key: 'model',
    },
    {
      name: 'Serial',
      key: 'serial',
    },
    {
      name: 'Trọng lượng',
      key: 'weight',
    },
    {
      name: 'Vị trí',
      key: 'location',
    },
    {
      name: 'Kích thước',
      key: 'size',
    },
    {
      name: 'Cấu trúc',
      key: 'structure',
    },
  ];

  if (!device) return <div className={'flex items-center justify-center'}>Loading...</div>;
  return (
    <div>
      <DetailForm
        target={device}
        columns={columns}
      />
    </div>
  );
};

export default DetailDevicePage;