import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  option: string;
}

const ButtonS = (props: ButtonProps) => {
  const commonClasses =
    'h-[46px] w-[113px] gap-1 text-body2 py-[10px] pl-[16px] pr-[14px] flex justify-center items-center rounded-[12px]';
  const optionClasses =
    props.option === 'black'
      ? 'bg-gray-700 text-white'
      : 'bg-white text-gray-500 border-gray_line border';
  const className = `${commonClasses} ${optionClasses} ${props.className}`;

  return <button className={className}>{props.children}</button>;
};

export default ButtonS;
