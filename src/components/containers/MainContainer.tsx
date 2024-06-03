'use client';

import { ReactNode } from 'react';

interface MainContainerProps {
  children: ReactNode;
}

const MainContainer = (props: MainContainerProps) => {
  return (
    <div className="bg-main-100 flex flex-col bg-fixed w-full">
      {props.children}
    </div>
  );
};

export default MainContainer;
