"use client";
import React, { FC } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components";
import { signOut, useSession } from "next-auth/react";

const Header: FC = () => {
  const { status } = useSession();
  return (
    <header className="w-full  fixed top-0 left-0 z-[9999]">
      <div className="container w-full h-[70px] flex justify-between items-center p-5 box-border  border-b-white border-b bg-[rgb(0,0,0,0.7)]">
        <Logo />
        {status === "unauthenticated" ? (
          <Button
            href="/auth"
            className="duration-300 text-white hover:bg-white hover:text-inherit transition-linear text-base flex items-center gap-2 border border-white p-1 rounded-lg"
          >
            <span className="font-semibold">Sign-in</span>
            <FontAwesomeIcon
              icon={faArrowRightToBracket}
              className="w-[20px] h-[20px]"
            />
          </Button>
        ) : (
          <nav className="flex items-center justify-center gap-5">
            <Link href="/" className="text-white text-base">
              Home
            </Link>
            <Link href="/profile" className="text-white text-base">
              Profile
            </Link>

            <Button handleClick={() => signOut()}>Sign-out</Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export { Header };
