import Image from 'next/image';

const QuestionCard = () => {
  return (
    <div className="flex flex-col w- border border-gray_line rounded-[20px] mb-2">
      <div className="flex flex-1 p-5 max-w-[464px] max-h-[106px]  bg-main-100 rounded-t-[20px]">
        <div
          className="flex flex-col w-[366px] justify-center cursor-pointer"
          //   onClick={onClickCard}
        >
          <div className="text-heading5 mb-[10px] text-main-500">직무지식</div>
          <p className="text-heading2 text-gray-700 line-clamp-2 ">
            {'질문 가이드'}
          </p>
        </div>
        <div className="h-[103px] w-[42px] ml-6">
          {/* <button onClick={handlePin}>
        {isPinned ? <PinFill></PinFill> : <PinStroke></PinStroke>}
      </button> */}
          <Image
            src="/icons/pin-stroke-42.svg"
            alt="pin-stroke"
            width={42}
            height={42}
            className="min-w-[42px] min-h-[42px]"
          />
        </div>
      </div>
      <div
        className="flex flex-1 flex-col maw-w-[464px] h-[82px] p-5 cursor-pointer"
        // onClick={() => {
        //   router.push({
        //     pathname: '/read',
        //     query: { postId: questionId },
        //   });
        // }}
      >
        <div
          //   dangerouslySetInnerHTML={{ __html: mainText }}
          className="text-body3 text-gray-600 mb-[10px] min-h-[52px] line-clamp-3"
        >
          답변 작성 후 핀 고정시의 가이드
        </div>
        <p className="text-caption3 text-gray-400">
          {/* {createTimestamp.slice(0, 10)} */}
          2024.05.27
        </p>
      </div>
    </div>
  );
};

export default QuestionCard;
