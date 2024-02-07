import Image from "next/image";
import { ReactNode } from "react";

interface HeaderProps {
  children?: ReactNode;
  textHeader: string;
  image: string;
  alt: string;
}

const HeaderAuth = ({ textHeader, image, alt, children }: HeaderProps) => {
  return (
    <div className="min-w-max w-[400px] hd:w-[440px] 2xl:w-[500px] p-5 flex flex-col justify-center items-center">
      <div className="w-[100px] h-[100px]">
        <Image width={100} height={100} priority src={image} alt={alt} />
      </div>
      <div className="pt-6 pb-10">
        <h1 className="font-bold text-2xl">{textHeader}</h1>
      </div>
      {children}
    </div>
  );
};

export default HeaderAuth;
