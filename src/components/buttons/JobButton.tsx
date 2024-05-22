import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  selected: boolean;
}

const JobButton = (props: ButtonProps) => {
  const { selected, ...rest } = props;
  return selected ? (
    <button
      {...rest}
      className="w-[245px] h-40 px-[59px] py-[69px] text-body1 flex justify-center items-center gap-[10px] 
      bg-main-100 rounded-3xl border border-main-400 hover:bg-main-100 hover:border-main_lines"
    >
      {props.children}
    </button>
  ) : (
    <button
      {...rest}
      className="w-[245px] h-40 px-[59px] py-[69px] text-body1 flex justify-center items-center gap-[10px] 
      bg-white rounded-3xl border border-gray_line hover:bg-main-100 hover:border-main_lines"
    >
      {props.children}
    </button>
  );
};

export default JobButton;
