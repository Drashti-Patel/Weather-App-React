import moment from 'moment';
import React, { useCallback, useEffect, useState } from 'react';
import { commonHttp } from '../utils/commonHttp';
import { WeatherIcon } from './WeatherIcon';

const url =
  'https://api.openweathermap.org/data/2.5/onecall?lat=-23.8041&lon=90.4152&exclude=current,alerts&units=metric&appid=895284fb2d2c50a520ea537456963d9c';
const WeeklyForecast: React.FC = () => {
  const [data, setData] = useState<any>();

  const getData = useCallback(async () => {
    const res = await commonHttp({
      method: 'get',
      url: url,
    });
    console.log('res.daily');
    console.log(res.daily);
    setData(res?.daily);
  }, []);

  useEffect(() => {
    getData();
    return () => {};
  }, []);

  return (
<div className="h-full w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
      <h2 className="text-[#F2F2F2] text-lg font-semibold capitalize text-left mb-4">
        7-day forecast
      </h2>
      <div className="flex flex-col space-y-4">
        {data?.length > 0 &&
          data?.map((el: any, i: number) => (
            <div className="flex flex-col md:flex-row items-center justify-between bg-gray-800 p-4 rounded-lg" key={i}>
              <div className="flex flex-col items-center mb-2 md:mb-0">
                <span className="text-[#9399A2]">
                  {moment.unix(el?.dt).format('dddd')}
                </span>
              </div>
              <div className="flex flex-col items-center mb-2 md:mb-0">
                <span className="text-[#9399A2] h-12 w-12">
                  {el?.weather?.length > 0 && (
                    <WeatherIcon icon={el?.weather?.[0]?.icon} />
                  )}
                </span>
              </div>
              <div className="flex flex-col items-center mb-2 md:mb-0">
                <p className="text-[#9399A2]">{el?.weather?.[0]?.main}</p>
              </div>
              <div className="flex flex-col items-center mb-2 md:mb-0">
                <p className="text-[#9399A2]">
                  {el?.temp?.max}/{el?.temp?.min}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
//updated
export default WeeklyForecast;