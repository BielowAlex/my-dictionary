import React, { FC } from "react";
import { Profile } from "@/components";

const ProfilePage: FC = () => {
  return (
    <main className="flex min-h-svh flex-col items-center justify-between container">
      <Profile />
    </main>
  );
};

export default ProfilePage;
