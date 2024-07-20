import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";

const DictionaryCard: FC = () => {
  return (
    <li>
      <Link
        href="/profile/dictionary/id"
        className="relative w-[300px] h-[300px] overflow-hidden rounded-[60px] flex flex-col justify-between items-center cursor-pointer"
      >
        <Image
          src="/images/bg-card.jpg"
          alt="background"
          fill
          className="absolute z-0"
        />
        <h3 className="relative z-10 block w-full bg-[rgb(0,0,0,0.3)] p-[15px] px-[30px] text-center">
          English ={">"} Spanish
        </h3>
        <h3 className="relative z-10 block w-full bg-[rgb(0,0,0,0.3)] p-[15px] px-[30px] text-center">
          Words: 0
        </h3>
      </Link>
    </li>
  );
};

export { DictionaryCard };
