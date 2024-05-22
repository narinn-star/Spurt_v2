import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: '';
}

const ButtonXL = (props: ButtonProps) => {
  return (
    <button className="h-16 w-[500px] text-white text-heading1 rounded-[50px] bg-gray-700">
      {props.children}
    </button>
  );
};

export default ButtonXL;
