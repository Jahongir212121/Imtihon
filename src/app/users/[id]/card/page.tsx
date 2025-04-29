"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
  let { id } = useParams();
  const [cart, setCart] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const res = await fetch(`https://fakestoreapi.com/carts`);
        const data = await res.json();
        setCart(data);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [id]);
  const need = cart?.filter((item: any) => item.userId == id);
  console.log(need);
  {
    need?.map((item: any) => {
      console.log(item?.id);
    });
  }
  return (
    <div className="p-4">
      {loading ? (
        <div className="w-10 h-10 border-4 border-t-blue-500 border-gray-300 rounded-full animate-spin"></div>
      ) : (
        <div>
          {
            <div className="flex gap-3 flex-col">
              <Link className="text-blue-500" href={`/users/${id}`}>
                Users
              </Link>
              <div className="flex gap-3 flex-col">
                {need?.map((item: any) => (
                  <Link
                    key={item.id}
                    href={`card/${item.id}`}
                    className="text-blue-500"
                  >
                    {item.id}
                  </Link>
                ))}
              </div>
            </div>
          }
        </div>
      )}
    </div>
  );
};

export default page;
