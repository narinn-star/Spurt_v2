import Image from 'next/image';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

const RandomBtn = (props: ButtonProps) => {
  return (
    <div className="flex justify-center mt-[30px]">
      <button className="w-[300px] h-[68px] py-5 pl-[30px] pr-6 text-heading2 flex justify-center items-center gap-[10px] border border-gray_line rounded-[90px]">
        {props.title}{' '}
        <Image src="/icons/rotate-24.svg" alt="rotate" width={24} height={24} />
      </button>
    </div>
  );
};

export default RandomBtn;
