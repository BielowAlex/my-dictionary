import React, { FC } from "react";
import Image from "next/image";

const Logo: FC = () => {
  return (
    <div className="flex items-center justify-center gap-5 ">
      <div className="relative w-[50px] h-[50px] ">
        <Image
          src="/images/logo.png"
          alt="logo"
          layout="fill"
          className="bg-white rounded-full"
        />
      </div>
      <h1 className="text-white text-xl font-semibold">Your Dictionary</h1>
    </div>
  );
};

export default Logo;
