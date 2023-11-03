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
    <div className="w-full h-full bg-black shadow-md rounded-md flex flex-col justify-between items-start p-5">
      <div className="flex flex-col items-start text-white">
        <h1>{data? data.name : "Jyvaskyla"}</h1>
        {data ? <h5>{"Weather: "+data.weather[0].description}</h5> : null}
      </div>

      <div className="flex flex-col items-end w-full">
        <img src={sunImage} alt="temperature" width={150} height={150}/>
      </div>

      <div className="flex flex-col items-start text-white">
        {data ? <h1>{"Temprature: "+data.main.temp}°F</h1> : null}
        {data ? <h1>{"Feels like: "+data.main.feels_like}°F</h1> : null}
      </div>
    </div>
  );
};

export default CurrentWeather;