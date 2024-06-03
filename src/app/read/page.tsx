import ButtonS from '@/components/buttons/ButtonS';
import Container from '@/components/containers/Container';
import MainContainer from '@/components/containers/MainContainer';
import Keyword from '@/components/keywords/Keyword';
import Image from 'next/image';

export default function Read() {
  return (
    <>
      <MainContainer>
        <div className="flex flex-col justify-between max-w-responsive">
          <button className="mt-[24px] mb-[82px]">
            <Image
              src="/icons/arrow-right-circle-yellow-54.svg"
              alt="arrowIcon"
              width={54}
              height={54}
              priority
            />
          </button>
          <div className="flex gap-2 mb-[10px] text-heading1 text-main-500">
            <p className="text-gray-500">사이드 프로젝트 : SPURT</p>
            <Image
              src="icons/experience-arrow-gray-16.svg"
              alt="arrowIcon"
              width={16}
              height={16}
              priority
            />
            직무지식
            <Image
              src="/icons/question-circle-4.svg"
              alt="circleIcon"
              width={5}
              height={5}
              priority
            />
            직무경험
          </div>
          <p className="text-title1 mb-[50px]">
            JavaScript에서 this 바인딩이 무엇인지 설명해주세요.
          </p>
        </div>
        <div className="border-b-[0.8px] border-main-400 w-full"></div>
      </MainContainer>
      <Container>
        <div className="mt-[60px] mb-[30px]">와랄ㄹ라라라ㅏ랄</div>
        <div className="flex gap-2 flex-wrap mb-[40px]">
          <Keyword text="면접을 준비하는 취업준비생을 위한 서비스" use="read" />
          <Keyword text="면접을 준비하는 취업준비생을 위한 서비스" use="read" />
          <Keyword text="면접을 준비하는 취업준비생을 위한 서비스" use="read" />
        </div>
        <div className="text-body6 text-gray-400 mb-[50px]">2023.07.01</div>
        <div className="flex flex-row justify-end gap-[10px]">
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
      </Container>
    </>
  );
}
