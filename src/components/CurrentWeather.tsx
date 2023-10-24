import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import sunImage from '../assets/sun-svgrepo-com.svg'; // Import the image

const CurrentWeather: React.FC = () => {
  const [data, setData] = useState(null);

  // const url = 
  //   'https://api.openweathermap.org/data/3.0/onecall?lat=62.2447&lon=25.7473&exclude={part}&appid=e8af103c2174f8bddee3dd5c2533733b';

    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.openweathermap.org/data/2.5/weather?q=jyväskylä&units=imperial&appid=895284fb2d2c50a520ea537456963d9c'
          );
        setData(response.data);
        console.log(response.data); //You can see all the weather data in console log
      } catch (error) {
        console.error(error);
      }
    };
  
    useEffect(() => {
      fetchData();
    }, []);
  

  return (
    <div className="w-full bg-black shadow-md rounded-md grid grid-cols-2 ">
      <div className="grid grid-rows-2 grid-flow-col bg-red-400 col-span-1">
        <div className="bg-black">
          <div className="flex flex-col items-start ml-3 mt-5 text-white">
            <h1>Madrid</h1>

            <div className="text-gray-400">
            <h5>chance of rain 0%</h5>
            </div>
          </div>
        </div>

        <div className="w-full h-full bg-black flex flex-col justify-center items-start text-white">
        {/* {data ? <h1>{data.name}°F</h1> : null} */}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <img src={sunImage} alt="temperature" width={150} height={150}/>
      </div>
    </div>
  );
};

export default CurrentWeather;
