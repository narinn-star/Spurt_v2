import Link from 'next/link';
import ButtonM from '../buttons/ButtonM';

const FirstQuestionCard = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[227px] border-[0.7px] border-gray_line rounded-2xl">
      <div className="flex flex-col mb-6 items-center">
        <p className="text-body7 text-gray-600 mb-[6px]">
          예상 질문을 만들고 답하러 가볼까요?
        </p>
        <p className="text-heading1 text-gray-700">
          아직 등록한 질문-답변이 없어요
        </p>
      </div>

      <Link href={'/post'}>
        <ButtonM>첫 질문-답변 만들기</ButtonM>
      </Link>
      {/* <Link href={session ? '/post' : '/signin'}>
    <CTA3Black text={'첫 질문-답변 만들기'}></CTA3Black>
  </Link> */}
    </div>
  );
};

export default FirstQuestionCard;
