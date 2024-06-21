"use client";
import React, { FC, useEffect, useState } from "react";
import Image from "next/image";
import { Button, Logo } from "@/components";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AuthPage: FC = () => {
  const welcomeTranslations = [
    "Welcome", // English
    "Bienvenido", // Spanish
    "Bienvenue", // French
    "Willkommen", // German
    "Benvenuto", // Italian
    "Welkom", // Dutch
    "Witamy", // Polish
    "Ласкаво просимо", // Ukrainian
    "Vítejte", // Czech
    "أهلا بك" // Arabic
  ];

  const [currentTranslationIndex, setCurrentTranslationIndex] =
    useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTranslationIndex(
        (prevIndex) => (prevIndex + 1) % welcomeTranslations.length
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [welcomeTranslations.length]);
  return (
    <main className="flex w-full">
      <div className="relative h-dvh w-full md:w-1/3 flex-col">
        <Logo />
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col items-center justify-center gap-10 w-full p-5">
          <h2 className="text-3xl w-full text-center font-bold">
            {welcomeTranslations[currentTranslationIndex]}
          </h2>
          <h2 className="text-2xl w-full text-center font-semibold">
            Log in to your account
          </h2>
          <Button className="flex font-bold text-3xl">
            <FontAwesomeIcon icon={faGoogle} className="w-[25px] h-[25px]" />{" "}
            <span className="text-2xl">Sign in</span>
          </Button>
        </div>
      </div>
      <div className="relative w-3/4 h-dvh opacity-40 hidden md:block">
        <Image
          src="https://wallpapers.com/images/hd/dictionary-word-meaning-2wv5b98qrgkd7mbk.jpg"
          alt="back"
          layout="fill"
        />
      </div>
    </main>
  );
};

export default AuthPage;
