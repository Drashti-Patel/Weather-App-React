import React from 'react';
import WeeklyForecast from '../components/WeeklyForecast';
import ThreeHourlyForecast from '../components/ThreeHourlyForecast';
import AirConditions from '../components/AirConditions';
import CurrentWeather from '../components/CurrentWeather';
import NavBar from '../components/Navbar';

const HomePage: React.FC = () => {
  return (
    <div className="h-full w-full grid grid-cols-6 gap-4">
      <div className="bg-white shadow-md rounded-md col-span-1">
        <NavBar />
      </div>

      {/* Second Column */}
      <div className=" grid grid-rows-3 grid-flow-col gap-4 bg-white shadow-md rounded-md col-span-3">
        <CurrentWeather />
        <ThreeHourlyForecast />
        <AirConditions />
      </div>

      <div className="bg-green-950 shadow-md rounded-md col-span-2">
        <WeeklyForecast />
      </div>
    </div>
  );
};

export default HomePage;
