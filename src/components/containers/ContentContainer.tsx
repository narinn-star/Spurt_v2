'use client';

import Image from 'next/image';
import { ReactNode } from 'react';

interface ContentsContainerProps {
  experienceCard?: ReactNode;
  children: ReactNode;
  icons?: string;
  title: string;
  subtitle?: string;
}

const ContentsContainer = (props: ContentsContainerProps) => {
  return (
    <div className="w-full max-w-[1000px] mt-[100px] mb-[150px] mx-auto">
      <div className="text-title2 max-w-responsive">
        {props.icons ? (
          <div className="flex flex-row gap-[10px]">
            <Image
              src={props.icons}
              alt="icons"
              priority
              width={24}
              height={24}
            />
            {props.title}
          </div>
        ) : (
          <>
            {props.title} {props.experienceCard}
          </>
        )}
      </div>
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
