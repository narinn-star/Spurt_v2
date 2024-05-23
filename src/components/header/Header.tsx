'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import LoginButton from '../buttons/LoginButton';
import { useState } from 'react';
import ProfileModal from '../modals/ProfileModal';

const Header = () => {
  const router = useRouter();
  const [isProfileOpened, setIsProfileOpened] = useState(false);

  const clickProfile = () => {
    setIsProfileOpened(!isProfileOpened);
  };
  return (
    <>
      <div className="flex flex-row h-[100px] justify-center">
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
          <div className="">
            <button onClick={clickProfile}>
              <Image
                priority
                src="/icons/pin-fill-42.svg"
                width="50"
                height="50"
                className="rounded-full"
                alt="프로필 사진"
              ></Image>
            </button>
            {isProfileOpened && <ProfileModal></ProfileModal>}

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
              <LoginButton>로그인</LoginButton>
            </Link> 
          )} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
