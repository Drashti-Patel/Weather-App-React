import React from 'react';
import NavItem from './NavItem';
import { ReactComponent as WeatherIcon } from '../../assets/weather.svg';
import { ReactComponent as MapIcon } from '../../assets/map.svg';
import { ReactComponent as SettingsIcon } from '../../assets/settings.svg';
import { ReactComponent as CitiesIcon } from '../../assets/cities.svg';

const NavBar: React.FC = () => {
  return (
    <div className="h-full w-full flex flex-col justify-evenly shadow-md rounded-md bg-gray-card">
      <NavItem
        title={'Weather'}
        navigationUrl="/"
        icon={WeatherIcon}
        width={36}
        height={36}
      />
      <NavItem
        title={'Cities'}
        navigationUrl="/cities"
        icon={CitiesIcon}
        width={36}
        height={36}
      />
      <NavItem
        title={'Map'}
        navigationUrl="/maps"
        icon={MapIcon}
        width={36}
        height={36}
      />
      <NavItem
        title={'Settings'}
        navigationUrl="/settings"
        icon={SettingsIcon}
        width={36}
        height={36}
      />
    </div>
  );
};

export default NavBar;
