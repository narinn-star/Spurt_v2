'use client';

import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import LoginButton from '../buttons/LoginButton';
import { useState, useRef, useEffect } from 'react';
import ProfileModal from '../modals/ProfileModal';

const Header = () => {
  const router = useRouter();
  const pathName = usePathname();
  const [isProfileOpened, setIsProfileOpened] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);

  const clickProfile = () => {
    setIsProfileOpened(!isProfileOpened);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      profileRef.current &&
      !profileRef.current.contains(event.target as Node)
    ) {
      setIsProfileOpened(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="flex h-[100px] justify-between items-center max-w-responsive">
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
          <div className="flex ml-[130px]">
            <Link
              href="/"
              className={`${
                pathName === '/' ? 'text-heading1' : 'text-heading4'
              } mr-[50px]`}
            >
              질문 모음
            </Link>
            <Link
              href="/experience"
              className={`${
                pathName === '/experience' ? 'text-heading1' : 'text-heading4'
              } mr-[50px]`}
            >
              나의 경험
            </Link>
            <Link
              href="/note"
              className={`${
                pathName === '/note' ? 'text-heading1' : 'text-heading4'
              } mr-[50px]`}
            >
              요약 노트
            </Link>
          </div>
        </div>
        <div className="" ref={profileRef}>
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
          {isProfileOpened && (
            <ProfileModal handleModal={clickProfile}></ProfileModal>
          )}

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
    </>
  );
};

export default Header;
