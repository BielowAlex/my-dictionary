import React, { FC } from "react";
import { DictionaryList, Profile } from "@/components";

const ProfilePage: FC = () => {
  return (
    <main className="flex flex-col items-center justify-between container gap-[40px]">
      <Profile />
      <DictionaryList />
    </main>
  );
};

export default ProfilePage;
