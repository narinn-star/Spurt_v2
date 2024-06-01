'use client';
import ButtonS from '@/components/buttons/ButtonS';
import Container from '@/components/containers/Container';
import PostContentContainer from '@/components/containers/PostContentContainer';
import PostTitleContainer from '@/components/containers/PostTitleContainer';
import Image from 'next/image';

export default function Post() {
  return (
    <Container>
      <button className="mt-[24px]">
        <Image
          src="/icons/arrow-right-circle-54.svg"
          alt="arrowIcon"
          width={54}
          height={54}
          priority
        />
      </button>
      <p className="text-title1 mt-[82px] mb-[20px]">질문-답변 만들기</p>
      <PostTitleContainer>
        <input
          className="py-[14px] w-full outline-none"
          placeholder="질문은 35자 이내로 작성해주세요"
          maxLength={35}
        />
        <hr />
        <div className="py-[16px]">케러셀 자리</div>
      </PostTitleContainer>
      <PostContentContainer>
        <input
          className="w-full outline-none min-h-[350px]"
          placeholder="답변을 입력해주세요"
        />
        <p className="text-right text-body11 text-gray-300 mt-[30px] mb-[30px]">
          123/1000
        </p>
        <hr />
        <div className="flex flex-row mt-[30px] mb-[20px] gap-[10px] items-center">
          <p className="text-body1 text-gray-600">Keyword</p>
          <p className="text-caption2 text-gray-300">
            키워드는 최대 20개까지 가능해요
          </p>
        </div>
        <button
          className="flex flex-row w-[124px] justify-center items-center bg-main-400 
                    pt-[10px] pb-[8px] px-[14px] rounded-lg text-body5 border border-gray_line"
        >
          키워드 추가
          <Image
            src="/icons/plus-16.svg"
            alt="plusIcon"
            width={16}
            height={16}
            priority
            className="ml-[4px]"
          />
        </button>
      </PostContentContainer>
      <div className="flex justify-end">
        <ButtonS option="black">
          저장하기
          <Image
            src="/icons/check-16.svg"
            alt="saveIcon"
            width={16}
            height={16}
            priority
          />
        </ButtonS>
      </div>
    </Container>
  );
}
