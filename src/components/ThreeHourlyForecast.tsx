import moment from 'moment';
import React, { memo, useCallback, useEffect, useState } from 'react';
import { commonHttp } from '../utils/commonHttp';
import { WeatherIcon } from './WeatherIcon';

const url =
  'https://api.openweathermap.org/data/2.5/forecast?q=jyväskylä&lat=-23.8041&lon=90.4152&units=metric&appid=b462849fee8752d40630390beee9e87d';

const ThreeHourlyForecast: React.FC = () => {
  const [data, setData] = useState<any>();

  const getData = useCallback(async () => {
    const res = await commonHttp({
      method: 'get',
      url: url,
    });
    setData(res?.list.slice(0, 6));
  }, []);

  useEffect(() => {
    getData();
    return () => {};
  }, []);

  return (
    <div className="w-full bg-[#202b3b] align-center shadow-md rounded-md">
      <div>
        <span className=" text-nav-title items-start flex mt-3 ml-5 font-semibold">
          TODAY'S FORECAST
        </span>

        <div className="flex mt-4">
          {data?.length > 0 &&
            data?.map((el: any, i: number) => (
              <div
                className={`flex ${
                  i !== data.length - 1
                    ? ' border-r border_r_color_9399A2 px-2 border-opacity-50 '
                    : ' px-2 border-opacity-50 '
                }`}
                key={i}
              >
                <div>
                  <span className="text_9399A2 text-sm">
                    {moment(el?.dt_txt).format('LT')}
                  </span>
                  <div className="flex flex-col justify-center items-center mt-4">
                    {el?.weather?.length > 0 && (
                      <WeatherIcon icon={el?.weather?.[0]?.icon} />
                    )}
                  </div>
                  <p className=" text-[#F2F2F2] p-2">{el?.main?.temp}&deg;</p>
                  <div className=" border-right border-white h-full top-0" />
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default memo(ThreeHourlyForecast);
