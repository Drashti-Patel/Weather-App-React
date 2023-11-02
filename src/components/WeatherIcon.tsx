import rainImage from '../assets/rain.svg'; // Import the image
import sunImage from '../assets/sun-svgrepo-com.svg'; // Import the image
import weatherImage from '../assets/weather.svg'; // Import the image
import windImage from '../assets/wind.svg'; // Import the image

export const WeatherIcon = ({ icon }: any) => {
  // Define a mapping of icon codes to corresponding icon URLs
  const iconMapping: any = {
    // '01d': 'sunny.png',  // Replace with the actual URL or icon you want to use
    // '02d': 'partly-cloudy.png',
    // '03d': 'cloudy.png',
    // '04d': 'cloudy.png',
    // '09d': rainImage,
    // '10d': rainImage,
    // '11d': 'thunderstorm.png',
    // '13d': 'snow.png',
    // '50d': 'fog.png',

    '01d': sunImage, // Replace with the actual URL or icon you want to use
    '01n': sunImage, // Replace with the actual URL or icon you want to use
    '02d': sunImage,
    '03d': sunImage,
    '04d': sunImage,
    '04n': sunImage,
    '09d': rainImage,
    '10d': rainImage,
    '10n': rainImage,
    '11d': windImage,
    '13d': windImage,
    '50d': windImage,
    '02n': weatherImage,
    '03n': weatherImage,
    // Add more mappings for other icons if needed
  };

  // Get the icon URL based on the "icon" field from the JSON data
  const iconUrl: any = iconMapping[icon];

  return (
    <img
      src={iconUrl}
      style={{ objectFit: 'fill' }}
      alt="Weather Icon"
      height={100}
      width={100}
    />
  );
};
