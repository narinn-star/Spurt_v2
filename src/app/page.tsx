'use client';

import ButtonL from '@/components/buttons/ButtonL';
import RandomBtn from '@/components/buttons/RandomButton';
import FirstQuestionCard from '@/components/cards/FirstQuestionCard';
import QuestionCard from '@/components/cards/QuestionCard';
import RandomCard from '@/components/cards/RandomCard';
import ContentsContainer from '@/components/containers/ContentContainer';
import MainContainer from '@/components/containers/MainContainer';
import Header from '@/components/header/Header';
import Image from 'next/image';
import Link from 'next/link';
import client from './api/client';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // 클라이언트 측에서 쿠키를 읽고 콘솔에 출력
    console.log('Cookies:', document.cookie);
  }, []);

  return (
    <>
      <MainContainer>
        <Header />
        <div className="flex flex-col justify-between max-w-responsive">
          <div className="flex justify-between items-end">
            <div className="flex flex-col mt-[60px] text-title1 mb-[12px]">
              <p className="underline underline-offset-8 decoration-main-400 decoration-4">
                꽁지님 안녕하세요
              </p>
              <p>오늘도 마지막까지 화이팅!</p>
            </div>
            <Link href={'/post'} className="mb-[12px]">
              <ButtonL>질문-답변 만들기</ButtonL>
            </Link>
          </div>
          <Image
            priority
            src="/images/Illust_question.png"
            width="1000"
            height="320"
            alt="questionIllust"
            unoptimized
            className="min-w-[1000px]"
          />
        </div>
      </MainContainer>

      <ContentsContainer title="나의 질문 모음">
        <p className="text-right mb-[20px] text-body2">총 8개</p>
        <div className="grid grid-cols-2 gap-3">
          <QuestionCard />
          <QuestionCard />
          <QuestionCard />
          <QuestionCard />
          <QuestionCard />
          <QuestionCard />
          <QuestionCard />
          <QuestionCard />
        </div>
        {/* <FirstQuestionCard /> */}
      </ContentsContainer>

      <ContentsContainer title={'사람들이'} subtitle="최근에 올린 질문">
        <div className="grid grid-flow-col justify-center gap-[12px]">
          <RandomCard subject="냥" />
          <RandomCard subject="냥" />
          <RandomCard subject="냥" />
          <RandomCard subject="냥" />
        </div>
        <RandomBtn title="다른 질문 더보기" />
      </ContentsContainer>
      {/* <button
        onClick={async () => {
          await client.get(`/v1/question/random?category=MAJOR`);
        }}
      >
        눌러
      </button> */}
    </>
  );
}
