import React, { useState } from 'react';
import Button from '../components/common/Button';
import { alerts, devices, reports } from '../constants/realTimeMonitoring';
import StatusDevice from '../components/common/StatusDevice';
import { useNavigate } from 'react-router-dom';

const RealTimeMonitoring = () => {
  const navigate = useNavigate();
  const handleClick = (device_id: number) => {
    navigate('/real-time-monitoring/device/' + device_id);
  };
  const [filterSelect, setFilterSelect] = useState<number[]>([1, 2, 3, 4]);
  const handleSelectFilter = (id: number) => {
    setFilterSelect(prevState => {
      const filterIndex = prevState.indexOf(id);
      if (filterIndex !== -1) {
        return [...prevState.slice(0, filterIndex), ...prevState.slice(filterIndex + 1)];
      } else {
        return [...prevState, id];
      }
    });
  };

  return (
    <div className={'h-full flex'}>
      <div className={'w-1/5 border-r-[2px] h-full border-[#F6F6F6]'}>
        <div className={'flex items-center justify-between bg-[#E9F7F6] py-2 px-3 mb-10'}>
          <h3 className={'text-sm font-semibold'}>Richy giám sát</h3>
          <Button title={'Switch'} className={'!py-1 !bg-[#2CADA8] rounded-[500px] text-white'} />
        </div>
        <div className={'flex mb-5 flex-col items-center gap-10 text-sm'}>
          <img className={'w-[114px] h-[114px]'}
               src="https://iot.acrel-eem.com/image/2024/4/c7aad263cc254653b760a13fc049366c.jpg" alt="" />
          <p className={'font-semibold'}>Richy_VN</p>
          <p>Đan Phượng</p>
        </div>
        <div className={'mx-2 border-b-[1px] mb-5 border-[#e0e0e0]'}></div>
        <div className={'grid grid-cols-2'}>
          {alerts.map((alert, index) => {
            return (
              <div key={index} className={'text-sm p-4 text-center'}>
                <div className={'flex gap-2 justify-center items-center'}>
                  <div style={{ backgroundColor: alert.color }} className={`w-2 h-2 rounded`}></div>
                  <p>{alert.status}</p>
                </div>
                <p>{alert.pcs_num} <span className={'text-[#00000066]'}>PCS</span></p>
              </div>
            );
          })}
        </div>
        <div className={'mx-2 border-b-[1px] mb-5 mt-5 border-[#e0e0e0]'}></div>
        <div className={'flex flex-col gap-5 px-4 mb-10'}>
          {reports.map((report, index) => {
            return (
              <div key={index}
                   className={'px-4 h-[75px] justify-between py-2 border-[1px] text-sm rounded border-[#e8e8e8] shadow-lg flex gap-6'}>
                <img className={'object-contain'}
                     src={report.img} alt="" />
                <div className={'flex flex-col justify-between'}>
                  <p>{report.name}</p>
                  <p className={'text-[#0A5c59] font-bold text-right'}>{report.amount} {report.unit}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className={'p-4'}>
        {/*  Toolbar */}
        <div className={'flex gap-2 mb-8'}>
          {alerts.map((alert, index) => {
            return (
              <Button onClick={() => handleSelectFilter(alert.id)}
                      className={`text-white !px-6`}
                      style={{
                        backgroundColor: filterSelect.includes(alert.id) ? alert.color : 'transparent',
                        color: filterSelect.includes(alert.id) ? 'white' : alert.color,
                        borderWidth: 1,
                        borderStyle: 'solid',
                        borderColor: alert.color,
                      }}
                      key={index}
                      title={alert.status}
              />
            );
          })}
        </div>
        <div className={'grid grid-cols-4 gap-4'}>
          {devices.map((device, index) => {
            return (
              <div
                onClick={() => handleClick(device.id)}
                key={index}
                className={'text-sm p-[10px] min-w-1/4 border-[1px] border-transparent bg-[#F2F6F5] hover:border-[#01ada8] cursor-pointer relative'}>
                <div className={'flex items-center justify-between mb-2'}>
                  <h3 className={'font-bold'}>{device.name}</h3>
                  {/*<span className={'bg-[#ACACAC] px-2 text-white'}>Offline</span>*/}
                  <StatusDevice />
                </div>
                <div className={'flex gap-4 items-center'}>
                  <img src="https://iot.acrel-eem.com/static/img/meter-a69ec4d30d9914df73a7c3f5ede68c58.png" alt="" />
                  <div>
                    <p className={'mb-2'}>Gateway id: {device.gateway_id}</p>
                    <p className={'mb-2'}>Meter address: {device.meterAddress}</p>
                    <p className={'mb-2'}>Meter type: {device.meterType}</p>
                  </div>
                </div>
                <div className={'absolute right-[10px] bottom-[10px] z-10'}>
                  <Button className={'!py-1 bg-[#ffffff99] border-[1px]'} title={'Details'} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RealTimeMonitoring;