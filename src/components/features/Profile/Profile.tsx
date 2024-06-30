"use client";
import React, { FC, useEffect, useState } from "react";
import Image from "next/image";
import { IUser } from "@/models";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Button } from "@/components";

export const Profile: FC = () => {
  const [user, setUser] = useState<IUser>();

  const fetchUsers = async (): Promise<IUser> => {
    const res = await fetch("http://localhost:3000/api/users/me");

    return res.json();
  };

  useEffect(() => {
    fetchUsers().then((user) => setUser(user));
  }, []);
  return (
    user && (
      <section className="mt-[70px] pt-[20px] w-full flex flex-col items-center justify-center gap-5">
        <div className="container flex justify-center w-full gap-[50px]">
          <div className="relative flex flex-col gap-2">
            <div className="relative w-[120px] h-[120px]">
              <div className="absolute right-[-2px] top-[-2px] rounded-full w-[40px] h-[40px] text-white flex flex-col justify-center items-center gap-2 z-10 bg-black">
                <CircularProgressbar
                  value={1}
                  text={"LVL 1"}
                  className="!text-white"
                  styles={{
                    background: { fill: "black" },
                    text: { fontSize: "24px", fill: "white" }
                  }}
                />
              </div>
              <div className="relative w-[120px] h-[120px] overflow-hidden rounded-full border-2 border-white z-0">
                <Image
                  src={user?.avatar}
                  alt="avatar"
                  width={120}
                  height={120}
                />
              </div>
            </div>

            <h2>{user.name}</h2>
            <h2>{user.email}</h2>
          </div>
          <nav className="flex flex-col justify-between items-center  ">
            <Button href="/achievements">Achievements</Button>
            <Button className="border-red-500 text-red-500 hover:bg-red-500">
              Delete Account
            </Button>
          </nav>
        </div>
      </section>
    )
  );
};

export default Profile;
