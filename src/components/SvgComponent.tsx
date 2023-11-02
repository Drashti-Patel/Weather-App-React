import React, { FC, SVGProps } from 'react';

interface SvgComponentProps {
  Svg: FC<SVGProps<SVGSVGElement>>;
  width: number;
  height: number;
}

export const SvgComponent: FC<SvgComponentProps> = ({ Svg, width, height }) => {
  return <Svg width={width} height={height} />;
};
