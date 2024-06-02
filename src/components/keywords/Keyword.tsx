'use client';

import Image from 'next/image';

// post 페이지에 쓰이는 Keyword 컴포넌트

interface KeywordProps {
  text: string;
}

const Keyword = ({ text }: KeywordProps) => {
  return (
    <>
      <button
        className="flex items-center h-[38px] gap-[6px] px-[14px] py-[8px] text-gray-600 bg-main-100 
    rounded-[8px] border border-keyword_border break-keep text-body6"
      >
        <p onClick={() => console.log('수정하기')}>{text}</p>
        <Image
          src="/icons/delete-16.svg"
          alt="deleteIcon"
          width={16}
          height={16}
          priority
          onClick={() => console.log('삭제하기')}
        />
      </button>
      {/* <input
        //ref={inputRef}
        className="flex text-center w-[42px] bg-main-100 border border-main-100 rounded-lg py-2 px-[14px] h-[38px] focus:bg-white focus:border-main-400 fucus:border focus:outline-none"
        //onChange={handleInputChange}
        //value={inputValue}
        //autoFocus
        maxLength={30}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            // e.preventDefault();
            // fixInput(index);
            // setKeyword('');
            // setFocus(false);
          }
        }}
        onBlur={() => {
          //   setFocus(false);
          //   setKeyword('');
          //   fixInput(index);
        }}
      /> */}
    </>
  );
};

export default Keyword;
