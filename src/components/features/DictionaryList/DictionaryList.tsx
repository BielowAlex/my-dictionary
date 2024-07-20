"use client";
import React, { FC } from "react";
import { Button } from "@/components";
import { DictionaryCard } from "@/components/features/DictionaryCard/DictionaryCard";

const DictionaryList: FC = () => {
  // const [dictionaryList, setDictionaryList] = useState([]);
  return (
    <section className="flex flex-col justify-center items-center gap-[40px] w-full container">
      <div className=" w-full flex justify-between items-center px-[25px]">
        <h2 className="font-bold text-white text-3xl">My dictionary</h2>
        <Button>Create</Button>
      </div>
      <ul className="h-screen w-full grid grid-cols-4 gap-[20px]">
        {/*{dictionaryList.length ? (*/}
        {/*  <li>Item</li>*/}
        {/*) : (*/}
        {/*  <h3 className="font-bold text-5xl">*/}
        {/*    Not dictionary yet! <FontAwesomeIcon icon={faFaceFrownOpen} />*/}
        {/*  </h3>*/}
        {/*)}*/}
        <DictionaryCard />
      </ul>
    </section>
  );
};

export { DictionaryList };
