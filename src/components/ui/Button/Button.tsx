import React, { FC, ReactNode } from "react";
import Link from "next/link";
import cn from "classnames";

interface IProps {
  children: ReactNode;
  href?: string;
  handleClick?: () => void;
  className?: string;
}

const Button: FC<IProps> = ({ children, href, handleClick, className }) => {
  const initClass =
    "flex justify-center gap-2 items-center text-base p-[5px] px-[10px] text-white border border-white rounded-lg hover:bg-white hover:text-black ease-linear duration-300";

  if (href) {
    return (
      <Link
        href={href}
        onClick={handleClick}
        className={cn(className, initClass)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button onClick={handleClick} className={cn(className, initClass)}>
      {children}
    </button>
  );
};

export { Button };
