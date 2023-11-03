import React, { PropsWithChildren } from 'react';
import NavBar from './navigation/Navbar';

interface BaseComponentProps extends PropsWithChildren<any> {
  baseComponentStyles?: string;
}

const BaseComponent: React.FC<BaseComponentProps> = ({
  children,
  baseComponentStyles,
}) => {
  return (
    <div
      className={`fixed top-0 left-0 right-0 bottom-0 bg-primary p-8 grid md:grid-cols-6 gap-4 ${baseComponentStyles}`}
    >
      <div className="shadow-md rounded-md md:col-span-1">
        <NavBar />
      </div>
      <div className="shadow-md rounded-md md:col-span-5">{children}</div>
    </div>
  );
};

export default BaseComponent;