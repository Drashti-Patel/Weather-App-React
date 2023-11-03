import React from 'react';
import BaseComponent from '../components/BaseComponent';

const Cities: React.FC = () => {
  return (
    <BaseComponent baseComponentStyles="h-full w-full fixed top-0 left-0 right-0 bottom-0">
      <div className="h-full w-full flex justify-center items-center">
        <h1 className="font-bold text-white text-sm md:text-base lg:text-lg xl:text-xl">
          Feature not available right now
        </h1>
      </div>
    </BaseComponent>
  );
};

export default Cities;