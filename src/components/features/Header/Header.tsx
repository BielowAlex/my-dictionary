import React, { FC } from "react";
import Logo from "@/components/features/Logo/Logo";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";

const Header: FC = () => {
  return (
    <header className="w-full h-[70px] flex justify-between items-center p-5 box-border fixed top-0 left-0 border-b-white border-b bg-[rgb(0,0,0,0.2)]">
      <Logo />
      <nav className="flex items-center justify-center gap-5">
        <Link href="/" className="text-white text-base">
          Home
        </Link>
        <Link href="/profile" className="text-white text-base">
          Profile
        </Link>
        <Link
          href="/auth"
          className="duration-300 text-white hover:bg-white hover:text-inherit transition-linear text-base flex items-center gap-2 border border-white p-1 rounded-lg"
        >
          <span className="font-semibold">Sign-in</span>
          <FontAwesomeIcon
            icon={faArrowRightToBracket}
            className="w-[20px] h-[20px]"
          />
        </Link>
      </nav>
    </header>
  );
};

export { Header };
