"use client";

import NavBarCom from "@/components/features/navbar";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Image from "next/image";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rate: number;
}

interface ParamsProps {
  params: {
    id: number;
  };
}

const ProductDetailsPage = ({ params }: ParamsProps) => {
  const productId = params.id;
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <NavBarCom />
      <div className="max-w-6xl mx-auto p-5 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="w-full h-80 relative">
            <Image
              src={product.image}
              layout="fill"
              objectFit="contain"
              alt={product.title}
              className="rounded-md"
            />
          </div>
          <div className="space-y-4">
            <h1 className="text-3xl font-bold">{product.title}</h1>
            <p className="text-lg text-gray-600">{product?.description}</p>
            <p className="text-lg text-gray-600">{product?.category}</p>
            <p className="text-lg text-red-600">{product.rate}</p>
            <div className="text-2xl font-semibold text-green-600">
              ${product.price.toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
