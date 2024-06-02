'use client';

interface SummaryKeywordProps {
  text: string;
  isVisible: boolean;
}

const SummaryKeyword = ({ text, isVisible }: SummaryKeywordProps) => {
  return (
    <div className="flex mb-[12px]">
      <div className="max-w-[2px] w-full rounded-[30px] bg-main-300 mr-[8px]" />
      <div className="px-[14px] py-[8px] text-gray-600 bg-main-100 rounded-[5px] border border-opacity-30 border-main-400 text-body7 break-keep">
        <p className={isVisible ? '' : 'blur-[3px]'}>{text}</p>
      </div>
    </div>
  );
};

export default SummaryKeyword;
