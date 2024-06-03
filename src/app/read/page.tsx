import Container from '@/components/containers/Container';
import MainContainer from '@/components/containers/MainContainer';
import Image from 'next/image';

export default function Read() {
  return (
    <MainContainer>
      <button className="mt-[24px]">
        <Image
          src="/icons/arrow-right-circle-yellow-54.svg"
          alt="arrowIcon"
          width={54}
          height={54}
          priority
        />
      </button>
    </MainContainer>
  );
}
