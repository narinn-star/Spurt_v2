'use client';

import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}

const Container = (props: ContainerProps) => {
  return <div className="max-w-responsive mb-[100px]">{props.children}</div>;
};

export default Container;
