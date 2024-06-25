"use client";
import React, { FC } from "react";
import Image from "next/image";
import { Button } from "@/components";
import { useSession } from "next-auth/react";

const Hero: FC = () => {
  const { status } = useSession();

  return (
    <section className=" relative w-full h-[650px] overflow-hidden flex flex-col items-center justify-center">
      <div className="absolute w-full h-[631px] filter blur-[2px] top-[-40px] z-0">
        <Image
          src="/images/hero-1.jpg"
          alt="hero"
          fill
          className="object-cover"
          priority={true}
        />
      </div>
      <div className="flex flex-col justify-center items-center gap-5 w-full z-10 bg-[rgb(0,0,0,0.4)] h-full">
        <h2 className="text-white font-bold w-1/2 text-4xl text-center">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Welcome to "My-Dictionary" App!
        </h2>
        <p className="text-white line text-center w-1/2 text-md z-10 leading-tight">
          Create your own dictionaries, add new words, and learn languages with
          ease. Our service allows you to save the words you are learning and
          track your progress. The user-friendly interface and search function
          will help you quickly find the word you need. Start creating your
          personal dictionaries today and improve your foreign language skills!
          Sign-up and try
        </p>
        {status === "unauthenticated" ? (
          <Button
            href="/auth"
            className="duration-300 text-white hover:bg-white hover:text-inherit transition-linear text-base flex items-center gap-2 border border-white p-1 rounded-lg"
          >
            <span className="font-semibold text-xl">Sign-in</span>
          </Button>
        ) : (
          <Button
            href="/profile"
            className="duration-300 text-white hover:bg-white hover:text-inherit transition-linear text-base flex items-center gap-2 border border-white p-1 rounded-lg"
          >
            <span className="font-semibold text-xl">Get started</span>
          </Button>
        )}
      </div>
    </section>
  );
};

export { Hero };
