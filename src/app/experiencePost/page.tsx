'use client';
import ButtonS from '@/components/buttons/ButtonS';
import Container from '@/components/containers/Container';
import PostContentContainer from '@/components/containers/PostContentContainer';
import PostTitleContainer from '@/components/containers/PostTitleContainer';
import ExperienceInput from '@/components/inputs/ExperienceInput';
import Image from 'next/image';

export default function experiencePost() {
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
      <div className="flex flex-row items-center mt-[82px] mb-[20px] gap-[16px]">
        <p className="text-title1 ">경험 정리</p>
      </div>
      <PostTitleContainer>
        <input
          className="py-[14px] w-full outline-none placeholder:text-heading4 placeholder:text-gray-300"
          placeholder="제목은 30자 이내로 작성해주세요"
          maxLength={35}
        />
        <hr />
        <div className="flex items-center gap-[8px] py-[16px]">
          <ExperienceInput placeholder="시작년도" disabled={false} />
          <ExperienceInput placeholder="월" disabled={false} />
          <p className="text-gray-400 mx-[12px]">-</p>
          <ExperienceInput
            placeholder="종료년도"
            disabled={true}
            className="bg-gray-100"
          />
          <ExperienceInput
            placeholder="월"
            disabled={true}
            className="bg-gray-100"
          />
          <p className="ml-[12px] text-body2 text-gray-400 mr-[5px]">진행중</p>
          <Image
            src="/icons/checkbox-off-gray-24.svg"
            alt="checkboxIcon"
            width={24}
            height={24}
          />
          <Image
            src="/icons/checkbox-on-yellow-24.svg"
            alt="checkboxIcon"
            width={24}
            height={24}
          />
        </div>
      </PostTitleContainer>
      <PostContentContainer>
        <p className="text-heading2 text-gray-600 border-l-2 border-main-300 pl-[10px] mb-[20px]">
          경험 소개
        </p>
        <textarea
          className="w-full outline-none min-h-[300px] resize-none text-start"
          placeholder="해당 프로젝트에 대해 설명해주세요"
        />
        <p className="text-right text-body11 text-gray-300 mt-[20px] mb-[20px]">
          12/300
        </p>
        <hr />
        <div className="flex gap-[10px] mt-[20px]">
          <Image
            src="/icons/link-yellow-18.svg"
            alt="linkIcon"
            width={18}
            height={18}
            priority
          />
          <p className="text-body6 text-gray-400">링크 첨부</p>
          <div className="w-[1.4px] bg-gray_line mx-[10px]" />
          <input
            className="text-body7 text-gray-500 placeholder:text-body7 placeholder:text-gray-300 outline-none"
            placeholder="링크를 첨부해주세요"
          />
        </div>
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
