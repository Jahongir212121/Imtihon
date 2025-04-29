"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
  let { id } = useParams();
  const [user, setUser] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  console.log(id);
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const res = await fetch(`https://fakestoreapi.com/users/${id}`);
        const data = await res.json();
        setUser(data);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [id]);
  console.log(user);

  return (
    <div className="p-4">
      {loading ? (
        <div className="w-10 h-10 border-4 border-t-blue-500 border-gray-300 rounded-full animate-spin"></div>
      ) : (
        <div>
          {
            <div className="flex gap-3 flex-col">
              <Link className="text-blue-500" href={`/users`}>
                Users
              </Link>
              <p>Name: {user?.name.firstname}</p>
              <p>Username: {user?.username}</p>
            </div>
          }
          <Link className="text-blue-500" href={`${user?.id}/card`}>
            Card
          </Link>
        </div>
      )}
    </div>
  );
};

export default page;
