'use client';
import ButtonL from '@/components/buttons/ButtonL';
import SummaryCard from '@/components/cards/SummaryCard';
import ContentsContainer from '@/components/containers/ContentContainer';
import MainContainer from '@/components/containers/MainContainer';
import Header from '@/components/header/Header';
import Image from 'next/image';
import Link from 'next/link';

export default function SummaryNote() {
  return (
    <>
      <MainContainer>
        <Header />
        <div className="flex flex-row justify-between max-w-responsive">
          <div className="flex flex-col mt-[60px] text-title1 mb-[12px]">
            <p className="underline underline-offset-8 decoration-main-400 decoration-4">
              꽁지님 안녕하세요
            </p>
            <p>오늘도 마지막까지 화이팅!</p>
          </div>
          <div className="flex items-end mb-[12px]">
            <Link href={'/post'}>
              <ButtonL>질문-답변 만들기</ButtonL>
            </Link>
          </div>
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
      </ContentsContainer>
    </>
  );
}
