import React from 'react';
import BaseComponent from '../components/BaseComponent';
import CurrentWeather from '../components/CurrentWeather';
import ThreeHourlyForecast from '../components/ThreeHourlyForecast';
import WeeklyForecast from '../components/WeeklyForecast';
import AirConditions from '../components/airConditions/AirConditions';

const HomePage: React.FC = () => {
  return (
    <BaseComponent baseComponentStyles="h-full w-full">
      <div className="h-full w-full grid grid-cols-5 gap-4">
        <div className="bg-primary grid grid-rows-3 grid-flow-col gap-4 shadow-md rounded-md col-span-3">
          <CurrentWeather />
          <ThreeHourlyForecast />
          <AirConditions />
        </div>

        <div className="bg-[#202b3b] shadow-md rounded-md col-span-2 weeklyArea">
          <WeeklyForecast />
        </div>
      </div>
    </BaseComponent>
  );
};

export default HomePage;
