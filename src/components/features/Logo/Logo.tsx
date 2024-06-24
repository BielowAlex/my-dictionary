import React, { FC } from "react";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Logo: FC = () => {
  return (
    <Link href="/" className="flex items-center justify-center gap-1 ">
      <div className="relative ">
        {/*<Image*/}
        {/*  src="/images/logo.png"*/}
        {/*  alt="logo"*/}
        {/*  layout="fill"*/}
        {/*  className="bg-white rounded-full"*/}
        {/*/>*/}
        <FontAwesomeIcon
          icon={faLanguage}
          className="text-white w-[60px] h-[36px] "
        />
      </div>
      <h1 className="text-white text-xl font-semibold">Dictionary</h1>
    </Link>
  );
};

export { Logo };
