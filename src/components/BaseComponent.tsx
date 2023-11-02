import React, { PropsWithChildren } from 'react';
import NavBar from './navigation/Navbar';

interface BaseComponentProps extends PropsWithChildren {
  baseComponentStyles?: string;
}

const BaseComponent: React.FC<BaseComponentProps> = ({
  children,
  baseComponentStyles,
}) => {
  return (
    <div
      className={`bg-primary h-screen w-screen p-8 grid grid-cols-6 gap-4 ${baseComponentStyles}`}
    >
      <div className="shadow-md rounded-md col-span-1">
        <NavBar />
      </div>
      <div className="shadow-md rounded-md col-span-5">{children}</div>
    </div>
  );
};

export default BaseComponent;
