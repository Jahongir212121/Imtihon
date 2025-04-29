import Link from "next/link";
import React from "react";

const Page = async () => {
  const res = await fetch("https://fakestoreapi.com/users");
  if (!res.ok) throw new Error("failed to fetch");
  const data: any = await res.json();
  console.log(data);

  return (
    <div>
      <ul>
        <li>
          {data.map((user: any) => {
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
