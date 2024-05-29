import MainContainer from '@/components/containers/MainContainer';
import Header from '@/components/header/Header';
import Link from 'next/link';
import ButtonL from '@/components/buttons/ButtonL';
import Image from 'next/image';
import ContentsContainer from '@/components/containers/ContentContainer';
import ExperienceCard from '@/components/cards/ExperienceCard';
import ButtonS from '@/components/buttons/ButtonS';
import SummaryCard from '@/components/cards/SummaryCard';

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
        experienceCard={
          <div className="flex flex-row gap-3">
            <ExperienceCard title="NEXTERS 23기" index={1} selectedIndex={1} />
            <ExperienceCard title="NEXTERS 23기" index={2} selectedIndex={1} />
          </div>
        }
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
          애플이 iOS 17 베타 버전을 공개했습니다. iOS 17 정식 버전 업데이트는 올
          가을입니다. 이번 배포에는 iMessage, 암호 공유 기능 등이 포함됩니다.
          특히 스탠바이(StandBy)와 네임드롭(Name Drop)이 이번에 포함되었습니다.
          iOS 17 베타 버전은 애플 개발자 센터에서 내려받을 수 있습니다. 애플이
          iOS 17 베타 버전을 공개했습니다. iOS 17 정식 버전 업데이트는 올
          가을입니다. 이번 배포에는 iMessage, 암호 공유 기능 등(300자)
        </div>
        <div className="flex justify-between text-body7 text-gray-500 mb-[20px]">
          <a
            href="https://www.pinterest.co.kr/pin/122793527321162632"
            target="_blank"
            className="flex items-start flex-row gap-[10px] break-all"
          >
            <Image
              priority
              src="/icons/link-yellow-18.svg"
              alt="linkIcon"
              width={18}
              height={18}
            />
            https://www.pinterest.co.kr/pin/122793527321162632https://www.pinterest.co.kr/pin/122rest.co.kr/pin/122
          </a>
        </div>
        <div className="flex flex-row justify-end gap-[10px] mb-[20px]">
          <ButtonS option="white">
            삭제하기
            <Image
              src="/icons/trash-16.svg"
              alt="trashIcon"
              width={16}
              height={16}
              priority
            />
          </ButtonS>
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
        <hr />
        <div className="flex justify-between items-center my-[20px]">
          <p className="text-heading1 text-gray-700">예상질문</p>
          <p className="text-body2 text-gray700">
            총{' 8'}
            {/* {
                      experience[selectedCardIndex]?.questionList?.questionList
                        ?.length
                    } */}
            개
          </p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center py-[70px] px-[30px] bg-gray-100 rounded-2xl h-[244px]">
            <Image
              src="/icons/plus-20.svg"
              alt="plusIcon"
              width={20}
              height={20}
              priority
            />
          </button>
          <SummaryCard title="1번" isPinned={true} />
          <SummaryCard title="2번" isPinned={false} />
        </div>
      </ContentsContainer>
    </>
  );
}
