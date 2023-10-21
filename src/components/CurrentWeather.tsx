import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import sunImage from '../assets/sun-svgrepo-com.svg'; // Import the image

const CurrentWeather: React.FC = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const url =
    'https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid=e8af103c2174f8bddee3dd5c2533733b';

  return (
    <div className="w-full bg-gray-400 shadow-md rounded-md grid grid-cols-2 ">
      <div className="grid grid-rows-2 grid-flow-col bg-red-400 col-span-1">
        <div className="bg-indigo-500">
          <div className="flex flex-col items-start ml-3 mt-5">
            <h1>Madrid</h1>

            <h5>chance of rain 0%</h5>
          </div>
        </div>

        <div className="w-full h-full bg-orange-800 flex flex-col justify-center items-start">
          <h1 className="ml-3">31°</h1>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <img src={sunImage} alt="temperature" width={150} height={150}/>
      </div>
    </div>
  );
};

export default CurrentWeather;
