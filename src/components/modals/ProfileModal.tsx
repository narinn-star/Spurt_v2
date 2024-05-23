import Image from 'next/image';
//import { useSession } from 'next-auth/react';

const ProfileModal = () => {
  //const { data: session } = useSession();
  return (
    <div className="absolute">
      <div className="flex items-start gap-[18px] w-[310px] h-[110px] px-[25px] pt-[20px] pb-[19px] bg-white rounded-t-[20px] shadow-sm">
        <div className="flex items-center gap-[18px]">
          {/* <Image
            src={session?.user?.image!}
            width="50"
            height="50"
            className="rounded-full"
            alt="프로필 사진"
          /> */}
          <Image
            priority
            src="/icons/pin-fill-42.svg"
            width="50"
            height="50"
            className="rounded-full"
            alt="프로필 사진"
          />
          <div className="w-[158px]">
            <p className="text-caption1 text-main-500">디자이너</p>
            <p className="text-body2">게꽁지</p>
            <p className="text-caption3 text-gray-400">kkongzi1234@gamil.com</p>
          </div>
        </div>
        <button>
          <Image
            priority
            src="/icons/delete-16-gray.svg"
            width="16"
            height="16"
            alt="close"
          />
        </button>

        {/* <div>{session?.user?.name}</div>
        <div>{session?.user?.email}</div> */}
      </div>
      <div className="flex w-[310px] h-[60px] bg-white rounded-b-[20px] border-t-[0.8px] shadow-sm">
        <button className="flex justify-center items-center border-r-[0.8px] w-[155px] text-caption3 text-gray-400 select-none">
          로그아웃
        </button>
        <button className="flex justify-center items-center w-[155px] text-caption3 text-gray-400 select-none">
          탈퇴하기
        </button>
      </div>
    </div>
  );
};

export default ProfileModal;
