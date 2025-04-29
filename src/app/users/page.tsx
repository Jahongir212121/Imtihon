import Link from "next/link";
import React from "react";
import { UserType } from "../interface";

const Page = async () => {
  const res = await fetch("https://fakestoreapi.com/users");
  if (!res.ok) throw new Error("failed to fetch");
  const data = await res.json();
  console.log(data);

  return (
    <div>
      <ul>
        <li>
          {data.map((user: UserType) => {
            return (
              <div key={user.id}>
                <Link
                  href={`/users/${user.id}`}
                  className="text-2xl p-4 font-black hover:text-blue-400"
                >
                  {user.name.firstname} {user.name.lastname}
                </Link>
              </div>
            );
          })}
        </li>
      </ul>
    </div>
  );
};

export default Page;
