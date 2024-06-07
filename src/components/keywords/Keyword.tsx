'use client';

interface KeywordProps {
  text: string;
  isVisible?: boolean;
  use: string;
}

const Keyword = ({ text, isVisible, use }: KeywordProps) => {
  const summaryKeywordStyle = ' bg-main-100 text-body7 break-keep';
  const readKeywordStyle = 'bg-main-200 text-body6';
  const commonStyle =
    'px-[14px] py-[8px] text-gray-600 rounded-[5px] border border-keyword_border';
  return (
    <div className="flex mb-[12px]">
      {use == 'summaryNote' ? (
        <div className="max-w-[2px] w-full rounded-[30px] bg-main-300 mr-[8px]" />
      ) : (
        <></>
      )}
      <div
        className={
          use == 'summaryNote'
            ? `${commonStyle} ${summaryKeywordStyle}`
            : `${commonStyle} ${readKeywordStyle}`
        }
      >
        {use == 'summaryNote' ? (
          <p className={isVisible ? '' : 'blur-[3px]'}>{text}</p>
        ) : (
          <p>{text}</p>
        )}
      </div>
    </div>
  );
};

export default Keyword;
