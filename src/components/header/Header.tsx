'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import LoginButton from '../buttons/LoginButton';

const Header = () => {
  const router = useRouter();
  return (
    <>
      <div className="flex flex-row h-[100px] justify-center ">
        <div className="flex justify-between items-center w-[1000px]">
          <div className="flex items-center">
            <button onClick={() => router.push('/')}>
              <Image
                priority
                src="/icons/logo.svg"
                alt="logo"
                width={124}
                height={40}
                style={{ width: 124, height: 40 }}
              />
            </button>
            <div className="flex justify-between ml-[130px]">
              <Link href="/" className={`mr-[50px] text-heading4`}>
                질문 모음
              </Link>
              <Link href="/experience" className={`mr-[50px] text-heading4`}>
                나의 경험
              </Link>

              <Link href="/summaryNote" className={` mr-[50px] text-heading4`}>
                요약 노트
              </Link>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <Link href="/signin">
              <LoginButton>로그인</LoginButton>
            </Link>
            {/* {user ? (
            <>
              <button onClick={clickProfile}>
                <Image
                  src={user.image!}
                  width="50"
                  height="50"
                  className="rounded-full"
                  alt="프로필 사진"
                ></Image>
              </button>
              <>{isOpen && <ProfileModal></ProfileModal>}</>
            </>
          ) : (
            <Link href="/signin">
              <CTA3 text="로그인"></CTA3>
            </Link>
          )} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
