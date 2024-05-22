import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: '';
}

const LoginButton = (props: ButtonProps) => {
  return (
    <button className="gap-[10px] text-body4 bg-main-400 text-white py-[12px] px-[18px] flex justify-center items-center rounded-[12px] border border-main-500 h-[46px]">
      {props.children}
    </button>
  );
};

export default LoginButton;
