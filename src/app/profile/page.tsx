"use client";
import React, { FC, useEffect, useState } from "react";
import { IUser } from "@/models";

const ProfilePage: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  const fetchUsers = async () => {
    const res = await fetch("/api/users");
    return res.json();
  };

  useEffect(() => {
    fetchUsers()
      .then((users) => {
        console.log(users);
        setUsers(users);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div>
      <h2>Profile</h2>
    </div>
  );
};

export default ProfilePage;
