"use client";

import NavBarCom from "@/components/features/navbar";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

interface Rating {
  rate: number;
  count: number;
}

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-600 mt-10">Error: {error}</div>;
  }

  return (
    <div>
      <NavBarCom />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product: Product) => (
          <div key={product.id} className="bg-white p-4 rounded-md shadow-sm">
            <Image
              src={product?.image}
              width={300}
              height={600}
              alt={product?.title}
              className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="text-xl font-semibold mt-4">{product?.title}</h3>
            <p className="text-gray-600 mt-2">{product?.description}</p>
            <div className="mt-4 font-semibold text-green-600 text-lg">
              ${product?.price.toFixed(2)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
