"use client";
import React, { FC, ReactNode } from "react";
import { Footer, Header } from "@/components";
import { SessionProvider } from "next-auth/react";

interface IProps {
  children: ReactNode;
}

const MainLayout: FC<IProps> = ({ children }) => {
  return (
    <>
      <SessionProvider>
        <Header />
        {children}
        <Footer />
      </SessionProvider>
    </>
  );
};

export { MainLayout };
