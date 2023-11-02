import React from 'react';
import { SvgComponent } from '../SvgComponent';

interface AirConditionsItemProps {
  title: string;
  value: string;
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  width: number;
  height: number;
}

const AirConditionsItem: React.FC<AirConditionsItemProps> = ({
  title,
  value,
  icon,
  width,
  height,
}) => {
  return (
    <div className="w-full flex items-start">
      <SvgComponent Svg={icon} width={width} height={height} />
      <div className="w-full flex flex-col items-start ml-4">
        <h4 className="text-nav-title font-semibold">{title}</h4>
        <h1 className="text-nav-title font-normal">{value}</h1>
      </div>
    </div>
  );
};

export default AirConditionsItem;
