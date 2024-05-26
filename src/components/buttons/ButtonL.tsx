import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: '';
}

const ButtonL = (props: ButtonProps) => {
  return (
    <button className="text-title8 bg-gray-700 text-white h-[53px] rounded-xl py-3 px-8 flex justify-center items-center gap-[10px]">
      {props.children}
    </button>
  );
};

export default ButtonL;
