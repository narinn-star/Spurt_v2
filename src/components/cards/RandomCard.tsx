import Image from 'next/image';
import { ButtonHTMLAttributes } from 'react';

interface RandomCardProps {
  subject: string;
}

const RandomCard = (props: RandomCardProps) => {
  return (
    <div className="flex flex-col">
      <div className="text-heading2 text-gray-700 w-[226px] h-[169px] py-[22px] px-[20px] flex bg-gray-100 border border-gray_line rounded-t-2xl">
        <p className="">{props.subject}</p>
      </div>

      <button
        className="flex justify-center items-center w-[226px] h-[71px] text-body5 text-gray-500 text-center gap-1 self-stretch bg-gray-100 border-x border-b border-gray_line rounded-b-2xl"
        // onClick={() => {
        //   router.push({
        //     pathname: session ? '/post' : '/signin',
        //     query: session ? { paramTitle: subject } : {},
        //   });
        // }}
      >
        답변 쓰기{' '}
        <Image src="/icons/plus-20.svg" alt="plus" width={20} height={20} />
      </button>
    </div>
  );
};

export default RandomCard;
