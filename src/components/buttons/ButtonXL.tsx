import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: '';
  onClick?: () => {};
}

const ButtonXL = (props: ButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      className="h-16 w-[500px] text-white text-heading1 rounded-[50px] bg-gray-700"
    >
      {props.children}
    </button>
  );
};

export default ButtonXL;
