'use client';

interface ExperienceInputProps {
  placeholder: string;
  text?: string;
  readOnly: boolean;
  className?: string;
}

const ExperienceInput = ({
  placeholder,
  text,
  readOnly,
  className,
}: ExperienceInputProps) => {
  return (
    <input
      className={`w-[140px] py-[10px] px-[16px] rounded-[12px] border border-gray-300 outline-none
       placeholder:text-body3 placeholder:text-gray-300 ${className}`}
      placeholder={placeholder}
      readOnly={readOnly}
    />
  );
};

export default ExperienceInput;
