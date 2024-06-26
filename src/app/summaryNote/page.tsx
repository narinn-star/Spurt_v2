'use client';
import ButtonL from '@/components/buttons/ButtonL';
import ButtonS from '@/components/buttons/ButtonS';
import SummaryCard from '@/components/cards/SummaryCard';
import ContentsContainer from '@/components/containers/ContentContainer';
import MainContainer from '@/components/containers/MainContainer';
import Header from '@/components/header/Header';
import Keyword from '@/components/keywords/Keyword';

import Image from 'next/image';
import Link from 'next/link';

export default function SummaryNote() {
  return (
    <>
      <MainContainer>
        <Header />
        <div className="flex flex-col justify-between max-w-responsive">
          <div className="flex justify-between items-end">
            <div className="flex flex-col mt-[60px] text-title1 mb-[12px]">
              <p>면접 직전, 핀으로 고정한</p>
              <p>
                <span className="underline underline-offset-8 decoration-main-400 decoration-4">
                  질문과 답변
                </span>
                을 확인해요
              </p>
            </div>

            <Link href={'/post'} className="mb-[12px]">
              <ButtonL>질문-답변 만들기</ButtonL>
            </Link>
          </div>
          <Image
            priority
            src="/images/Illust_summaryNote.png"
            width="1000"
            height="320"
            alt="questionIllust"
            className="min-w-[1000px]"
            unoptimized
          />
        </div>
      </MainContainer>
      <ContentsContainer
        title="요약노트"
        icons="/icons/pc-pin-red-border-24.svg"
      >
        <p className="text-right mb-[20px] text-body2">총 8개</p>

        <div className="flex gap-3">
          <SummaryCard title="1번" isPinned={true} bgColor="bg-main-200" />
          <SummaryCard title="2번" isPinned={false} bgColor="bg-main-200" />
        </div>

        <div className="flex flex-row mt-[30px] mb-[50px]">
          <div className="items-center max-w-[390px] w-full">
            <div className="flex flex-row justify-between mb-[20px] ">
              <p className="text-heading1">답변 키워드</p>
              <Image
                priority
                src="/icons/eye-on-40.svg"
                alt="eyeOnIcons"
                width={40}
                height={40}
              />
            </div>
            <Keyword
              text="마크다운과 직접 입력으로 키워드를 등록할 수 있어요"
              isVisible={true}
              use="summaryNote"
            />
            <Keyword
              text="면접을 준비하는 취업준비생을 위한 서비스인데용, SPURT"
              isVisible={true}
              use="summaryNote"
            />
          </div>
          <div className="border-[0.7px] mx-[30px] bg-[#989898]" />
          <div className="items-center max-w-[490px] w-full">
            <div className="flex flex-row justify-between items-center max-w-[490px] w-full mb-[20px]">
              <p className="text-heading1">전체 답변</p>
              <Image
                priority
                src="/icons/eye-off-40.svg"
                alt="eyeOffIcons"
                width={40}
                height={40}
              />
            </div>
            <div className="text-gray-600 whitespace-pre-line blur-[3px]">
              전체 답변 내용
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <ButtonS option="black">
            수정하기
            <Image
              src="/icons/edit-16.svg"
              alt="editIcon"
              width={16}
              height={16}
              priority
            />
          </ButtonS>
        </div>
      </ContentsContainer>
    </>
  );
}
