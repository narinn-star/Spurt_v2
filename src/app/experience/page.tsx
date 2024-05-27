import MainContainer from '@/components/containers/MainContainer';
import Header from '@/components/header/Header';
import Link from 'next/link';
import ButtonL from '@/components/buttons/ButtonL';
import Image from 'next/image';
import ContentsContainer from '@/components/containers/ContentContainer';
import ExperienceCard from '@/components/cards/ExperienceCard';

export default function Experience() {
  return (
    <>
      <MainContainer>
        <Header />
        <div className="flex flex-row justify-between max-w-responsive">
          <div className="flex flex-col mt-[60px] text-title1 mb-[12px]">
            <p className="inline">
              <span className="underline underline-offset-8 decoration-main-400 decoration-4">
                나의 경험
              </span>
              이 담긴
            </p>
            <p>예상질문을 정리해요</p>
          </div>
          <div className="flex items-end mb-[12px]">
            <Link href={'/post'}>
              <ButtonL>경험 정리하기</ButtonL>
            </Link>
          </div>
        </div>
        <Image
          priority
          src="/images/Illust_myProject.png"
          width="1000"
          height="320"
          alt="questionIllust"
          unoptimized
          className="min-w-[1000px] min-h-[320px]"
        />
      </MainContainer>
      <ContentsContainer
        title="나의 경험 정리"
        experienceCard={<ExperienceCard title="냠" />}
      >
        <div className="flex justify-between items-center mb-[20px]">
          <p className="text-heading2 pl-[10px] text-gray-600 border-l-2 border-l-main-300">
            경험 소개
          </p>
          <p className="text-body6 text-gray-400">
            2024.05 - 진행중
            {/* {experience[selectedCardIndex]?.startDate.replace('-', '.')}{' '}
                    -{' '}
                    {experience[selectedCardIndex]?.endDate === null
                      ? '진행 중'
                      : experience[selectedCardIndex]?.endDate} */}
          </p>
        </div>
        <div className="text-content_body1 text-gray-600 mb-[20px] whitespace-pre-line">
          내용
        </div>
      </ContentsContainer>
    </>
  );
}
