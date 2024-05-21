import Image from 'next/image';
import IllustSignIn from '/public/images/Illust_signIn.png';
import ButtonXL from '@/components/buttons/ButtonXL';

export default function Signin() {
  return (
    <div className="w-screen h-screen bg-cover bg-fixed bg-background">
      <div className="absolute bg-background">
        <Image src={IllustSignIn} alt="signin" />
        <div className="mt-[50px] mb-[40px] flex justify-center bg-background">
          <ButtonXL>구글로 로그인하기</ButtonXL>
        </div>
      </div>
    </div>
  );
}
