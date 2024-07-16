'use client';
import Image from 'next/image';
import IllustSignIn from '/public/images/Illust_signIn.png';
import ButtonXL from '@/components/buttons/ButtonXL';
import client from '../api/client';

export default function Signin() {
  const handleSignIn = async () => {
    console.log('clicked');
    //client.get(`/oauth2/authorization/google`);
    window.location.href =
      'https://alpha.spurtapp.com/oauth2/authorization/google';
  };
  return (
    <div className="w-screen h-screen bg-cover bg-fixed bg-background">
      <div className="absolute bg-background">
        <Image src={IllustSignIn} alt="signin" priority />
        <div className="mt-[50px] mb-[40px] flex justify-center bg-background">
          <ButtonXL onClick={handleSignIn}>구글로 로그인하기</ButtonXL>
        </div>
      </div>
    </div>
  );
}
