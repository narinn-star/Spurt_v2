'use client';

interface ExperienceInputProps {
  placeholder: string;
  text?: string;
  disabled: boolean;
  className?: string;
}

const ExperienceInput = ({
  placeholder,
  text,
  disabled,
  className,
}: ExperienceInputProps) => {
  return (
    <input
      className={`text-body3 w-[140px] py-[10px] px-[16px] rounded-[12px] border border-gray-300 outline-none
       placeholder:text-body3 placeholder:text-gray-300 focus:border focus:border-main-400 ${className}`}
      placeholder={placeholder}
      disabled={disabled}
    />
  );
};

export default ExperienceInput;
