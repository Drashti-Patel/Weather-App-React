import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import sunImage from '../assets/sun-svgrepo-com.svg'; // Import the image

interface CurrentWeatherInfo {
  name: string
  main : {
    temp: string,
    feels_like: string
  }
  weather: [
    {
      description: string
    }
  ]
}

const CurrentWeather: React.FC = () => {
  const [data, setData] = useState<CurrentWeatherInfo>();

    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.openweathermap.org/data/2.5/weather?q=jyväskylä&units=imperial&appid=895284fb2d2c50a520ea537456963d9c'
          );
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
  
    useEffect(() => {
      fetchData();
    }, []);
  

  return (
    <div className="w-full bg-black shadow-md rounded-md grid grid-cols-2 ">
      <div className="grid grid-rows-2 grid-flow-col bg-black-400 col-span-1">
        <div className="bg-black">
          <div className="flex flex-col items-start ml-3 mt-5 text-white">
            <h1>{data? data.name : "Madrid"}</h1>

            <div className="text-gray-400">
            {data ? <h5>{data.weather ? "Weather: "+data.weather[0].description : "snow"}</h5> : null}
            </div>
          </div>
        </div>

        <div className="w-full h-full ml-3 bg-black flex flex-col justify-center items-start text-white">
        {data ? <h1>{data.main ? "Temprature: "+data.main.temp : "5"}°F</h1> : null}
        {data ? <h1>{data.main ? "Feels like: "+data.main.feels_like : "7"}°F</h1> : null}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <img src={sunImage} alt="temperature" width={150} height={150}/>
      </div>
    </div>
  );
};

export default CurrentWeather;