"use client";
import React, { FC, useEffect, useState } from "react";
import { IUser } from "@/models";

const ProfilePage: FC = () => {
  const [user, setUser] = useState<IUser>();
  const fetchUsers = async () => {
    const res = await fetch("/api/users/me");
    const data = res.json();

    console.log(data);

    return data;
  };

  useEffect(() => {
    fetchUsers()
      .then((user) => {
        console.log(user);
        setUser(user);
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    <main className="flex min-h-svh flex-col items-center justify-between container">
      {user?.name}
    </main>
  );
};

export default ProfilePage;
