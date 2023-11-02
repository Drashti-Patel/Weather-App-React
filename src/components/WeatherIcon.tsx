import rainImage from '../assets/rain.svg';
import sunImage from '../assets/sun-svgrepo-com.svg';
import weatherImage from '../assets/weather.svg';
import windImage from '../assets/wind.svg';

export const WeatherIcon = ({ icon }: any) => {
  const iconMapping: any = {
    '01d': sunImage,
    '01n': sunImage,
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
  };

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
