import ButtonL from '@/components/buttons/ButtonL';
import Header from '@/components/header/Header';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-main-100 flex flex-col items-center">
      <Header />
      <div className="flex flex-row w-[1000px] justify-between">
        <div className="flex flex-col  mt-[60px] text-title1 mb-[12px]">
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
        src="/images/Illust_question.png"
        width="1000"
        height="320"
        alt="questionIllust"
        className="min-w-[1000px]"
      />
    </div>
  );
}
