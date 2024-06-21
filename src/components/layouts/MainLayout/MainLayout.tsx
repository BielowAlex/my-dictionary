import React, { FC, ReactNode } from "react";
import { Footer, Header } from "@/components";

interface IProps {
  children: ReactNode;
}

const MainLayout: FC<IProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export { MainLayout };
