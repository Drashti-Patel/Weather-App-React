import React from 'react';
import { SvgComponent } from '../SvgComponent';

// Define the prop types for the component
interface NavItemProps {
  title: string;
  navigationUrl: string;
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  width: number;
  height: number;
}

const NavItem: React.FC<NavItemProps> = ({
  title,
  navigationUrl,
  icon,
  width,
  height,
}) => {
  return (
    <a href={navigationUrl} className="w-full flex flex-col items-center">
      <SvgComponent Svg={icon} width={width} height={height} />
      <h1 className="text-nav-title font-bold">{title}</h1>
    </a>
  );
};

export default NavItem;
