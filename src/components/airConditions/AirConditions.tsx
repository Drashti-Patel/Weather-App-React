import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { ReactComponent as ThermometerIcon } from '../../assets/thermometer.svg';
import { ReactComponent as WindIcon } from '../../assets/wind.svg';
import { ReactComponent as RainIcon } from '../../assets/rain.svg';
import { ReactComponent as HumidityIcon } from '../../assets/humidity.svg';

import AirConditionsItem from './AirConditionsItem';
import { BASE_API_URL } from '../../constants';
import {
  formatHumidityValue,
  formatRainValue,
  formatTemperatureValue,
  formatWindValue,
} from '../../utils/airConditionsFormat';

interface AirConditionProperties {
  temperature: string;
  windSpeed: string;
  humidity: string;
  rainChances: string;
}

const AirConditions: React.FC = () => {
  const API_URL = `${BASE_API_URL}/2.5/weather?lat=62.24&lon=25.74&units=metric&appid=e8af103c2174f8bddee3dd5c2533733b`;

  const [data, setData] = useState<AirConditionProperties>({
    temperature: 'N/A',
    windSpeed: 'N/A',
    humidity: 'N/A',
    rainChances: 'N/A',
  });

  useEffect(() => {
    async function fetchAirConditions() {
      const { data } = await axios.get(API_URL);
      const { main, wind, rain } = data;
      const formattedResponse: AirConditionProperties = {
        temperature: main.temp,
        windSpeed: wind.speed,
        humidity: main.humidity,
        rainChances: rain,
      };
      setData(formattedResponse);
    }

    fetchAirConditions();
  }, []);

  return (
    <div className="w-full h-full flex flex-col bg-gray-card shadow-md rounded-md p-4 items-start">
      <h4 className="text-nav-title font-semibold"> AIR CONDITIONS</h4>
      <div className="w-full h-max grid grid-cols-2 gap-8 mt-4">
        <AirConditionsItem
          title={'Real Feel'}
          value={formatTemperatureValue(data?.temperature)}
          icon={ThermometerIcon}
          width={48}
          height={48}
        />
        <AirConditionsItem
          title={'Chances of Rain'}
          value={formatRainValue(data?.rainChances)}
          icon={RainIcon}
          width={48}
          height={48}
        />
        <AirConditionsItem
          title={'Wind'}
          value={formatWindValue(data?.windSpeed)}
          icon={WindIcon}
          width={48}
          height={48}
        />
        <AirConditionsItem
          title={'Humidity'}
          value={formatHumidityValue(data?.humidity)}
          icon={HumidityIcon}
          width={48}
          height={48}
        />
      </div>
    </div>
  );
};

export default AirConditions;
