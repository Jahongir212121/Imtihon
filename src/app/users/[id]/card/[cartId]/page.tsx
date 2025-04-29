"use client";
import { CartType } from "@/app/interface";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = () => {
  const { id } = useParams();
  console.log(id);
  const [cart, setCart] = useState<CartType>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    async function fetchCart() {
      setLoading(true);
      try {
        const res = await fetch(`https://fakestoreapi.com/carts/${id}`);
        const data = await res.json();
        setCart(data);
      } finally {
        setLoading(false);
      }
    }
    fetchCart();
  }, [id]);

  return (
    <div className="p-4">
      {loading ? (
        <div className="w-10 h-10 border-4 border-t-blue-500 border-gray-300 rounded-full animate-spin"></div>
      ) : (
        <div>
          <p>User ID: {cart?.userId}</p>
          <p>Date: {cart?.date}</p>
          <h3 className="mt-4 font-semibold">Products:</h3>
          <ul className=" list-none  ml-6">
            {cart?.products?.map((product: any) => (
              <li className="m-0" key={product.productId}>
                Product ID: {product.productId} <br />
                Quantity: {product.quantity}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Page;
