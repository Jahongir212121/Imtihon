"use client";
import React, { useEffect, useState } from "react";

const Page = ({ params }: any) => {
  const { id } = params;
  const [cart, setCart] = useState<any>(null);
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
          <h2 className="text-xl font-bold mb-2">Cart ID: {cart?.id}</h2>
          <p>User ID: {cart?.userId}</p>
          <p>Date: {cart?.date}</p>
          <h3 className="mt-4 font-semibold">Products:</h3>
          <ul className="list-disc ml-6">
            {cart?.products?.map((product: any) => (
              <li key={product.productId}>
                Product ID: {product.productId}, Quantity: {product.quantity}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Page;
