import React from 'react';
import Button from '../../components/common/Button';
import { IoIosArrowBack } from 'react-icons/io';
import StatusDevice from '../../components/common/StatusDevice';
import { devices, parameters, parameterValues } from '../../constants/realTimeMonitoring';
import { useNavigate, useParams } from 'react-router-dom';

const RealTimeMonitoringDevice = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const getSelectDevice = () => {
    if (!id) return;
    return devices.find(device => device.id.toString() === id);
  };

  const device = getSelectDevice();
  if (!device) return <p>Something Error!</p>;

  return (
    <div className={'px-6 py-4'}>
      <Button
        type={'button'}
        onClick={() => {
          navigate(-1);
        }}
        className={'bg-transparent hover:bg-[#e6f7f6] hover:text-[#01ada8] mb-5'}
        title={
          <div
            className={'flex items-center gap-1'}><IoIosArrowBack /><p>Back</p>
          </div>
        }
      />

      <h3>{device.name} <StatusDevice /></h3>
      <div className={'border-b-[1px] mb-5 mt-5 border-[#e0e0e0]'}></div>
      <h3 className={'mb-5'}>Real time data</h3>
      <div className={'grid grid-cols-4 gap-10'}>
        {parameters.map((parameter) => {
          if (device.id === parameter.device_id) {
            return (
              <div key={parameter.id} className={'border-[1px] text-sm border-[#dedede]'}>
                <h3 className={'p-[10px] bg-[#01ada8] text-white'}>{parameter.name}</h3>
                <div className={'p-[10px] h-[155px] overflow-y-scroll'}>
                  {parameterValues.map((parameterValue) => {
                    if (parameterValue.parameter_id === parameter.id) {
                      return (
                        Array.from(parameterValue.value.entries()).map(([key, value], index) => {
                          return (
                            <table className={'table w-full'} key={index}>
                              <tbody>
                              <tr>
                                <td>
                                  {key}:
                                </td>
                                <td width={'30%'}>
                                  <p className={'font-bold text-[#01ada8]'}>{value} {parameter.unit}</p>
                                </td>
                              </tr>
                              </tbody>
                            </table>
                          );
                        }));
                    }
                    return <></>
                  })}
                </div>
              </div>
            );
          }
          return <></>
        })}
      </div>
    </div>
  );
};

export default RealTimeMonitoringDevice;