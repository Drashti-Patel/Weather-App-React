import React from 'react';
import WeeklyForecast from '../components/WeeklyForecast';
import ThreeHourlyForecast from '../components/ThreeHourlyForecast';
import CurrentWeather from '../components/CurrentWeather';
import AirConditions from '../components/airConditions/AirConditions';
import BaseComponent from '../components/BaseComponent';

const HomePage: React.FC = () => {
  return (
    <BaseComponent baseComponentStyles="h-full w-full">
      <div className="h-full w-full grid grid-cols-5 gap-4">
        <div className="bg-primary grid grid-rows-3 grid-flow-col gap-4 shadow-md rounded-md col-span-3">
          <CurrentWeather />
          <ThreeHourlyForecast />
          <AirConditions />
        </div>

        <div className="bg-green-950 shadow-md rounded-md col-span-2">
          <WeeklyForecast />
        </div>
      </div>
    </BaseComponent>
  );
};

export default HomePage;
