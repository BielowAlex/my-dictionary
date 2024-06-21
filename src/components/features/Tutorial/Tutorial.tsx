import React, { FC } from "react";
import Image from "next/image";

const Tutorial: FC = () => {
  return (
    <section className=" w-full flex text-white flex-col justify-center items-center gap-5">
      <h2 className="w-full font-bold text-3xl">Tutorial</h2>
      <ul className="w-full">
        <li className="flex w-full items-center justify-between">
          <div className="relative w-[350px] h-[200px]">
            <Image
              src={
                "https://upload.wikimedia.org/wikipedia/commons/4/40/Image_test.png"
              }
              alt={"test"}
              layout="fill"
            />
          </div>
          <div>
            <h3 className=" font-bold text-2xl">Step 1</h3>
            <p className=" text-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis,
              tenetur.
            </p>
          </div>
        </li>
        <li className="flex w-full items-center justify-between flex-row-reverse">
          <div className="relative w-[350px] h-[200px]">
            <Image
              src={
                "https://upload.wikimedia.org/wikipedia/commons/4/40/Image_test.png"
              }
              alt={"test"}
              layout="fill"
            />
          </div>
          <div>
            <h3 className=" font-bold text-2xl">Step 1</h3>
            <p className=" text-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis,
              tenetur.
            </p>
          </div>
        </li>
        <li className="flex w-full items-center justify-between">
          <div className="relative w-[350px] h-[200px]">
            <Image
              src={
                "https://upload.wikimedia.org/wikipedia/commons/4/40/Image_test.png"
              }
              alt={"test"}
              layout="fill"
            />
          </div>
          <div>
            <h3 className=" font-bold text-2xl">Step 1</h3>
            <p className=" text-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis,
              tenetur.
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export { Tutorial };
