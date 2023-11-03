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
//<div className="h-full w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
<div className="h-full w-full">
<span className=" text-nav-title items-start flex mt-5 ml-5 font-semibold">
7-DAY FORECAST
        </span>
        <div className=" ">
        {data?.length > 0 &&
          data?.map((el: any, i: number) => (
            <div className=" mb-2" key={i}>
              <div className="flex">
                <div className="flex flex-col justify-center items-start mt-4 mb-4 ml-6 w-[30%]">
                  <span className="text-[#9399A2]">
                    {moment.unix(el?.dt).format('dddd')}
                  </span>
                </div>
                <div className="flex flex-col justify-center items-center mt-4 mb4 w-[20%]">
                  <span className="text-[#9399A2] h-[50px] w-[50px]">
                    {el?.weather?.length > 0 && (
                      <WeatherIcon icon={el?.weather?.[0]?.icon} />
                    )}
                  </span>
                </div>
                <div className="flex flex-col justify-center items-center mt-4 mb-4 w-[20%]">
                  <p className="text-[#9399A2]">{el?.weather?.[0]?.main}</p>
                </div>
                <div className="flex flex-col justify-center items-center mt-4 mb-4 mr-2 w-[30%]">
                  <p className="text-[#9399A2]">
                    {el?.temp?.max}/{el?.temp?.min}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
//updated
export default WeeklyForecast;