import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: '';
}

const ButtonM = (props: ButtonProps) => {
  return (
    <button className="h-[46px] w-[162px] text-white text-body5 rounded-[12px] bg-gray-700">
      {props.children}
    </button>
  );
};

export default ButtonM;
