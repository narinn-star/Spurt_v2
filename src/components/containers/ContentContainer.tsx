'use client';

import { ReactNode } from 'react';
import ExperienceCard from '../cards/ExperienceCard';

interface ContentsContainerProps {
  experienceCard?: ReactNode;
  children: ReactNode;
  title: string;
  subtitle?: string;
}

const ContentsContainer = (props: ContentsContainerProps) => {
  return (
    <div className="w-full max-w-[1000px] mt-[100px] mb-[150px] mx-auto">
      <p className="text-title2 max-w-responsive">
        {props.title} {props.experienceCard}
      </p>
      {props.subtitle ? (
        <p className="text-title2 max-w-responsive">{props.subtitle}</p>
      ) : (
        <></>
      )}

      <div className="max-w-responsive bg-white rounded-[20px] min-h-[287px] mt-[20px] p-[30px] shadow-sm">
        {props.children}
      </div>
    </div>
  );
};

export default ContentsContainer;
