"use client";

import NavBarCom from "@/components/features/navbar";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 m-5 gap-4">
        {products.map((product: Product) => (
          <Card key={product.id} className="bg-white pb-4 rounded-md shadow-md">
            <CardBody className="w-full h-48 mb-5  relative">
              <div className=" overflow-hidden rounded-md">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={500}
                  height={150}
                  className="object-contain"
                />
              </div>
              <div className="text-xl font-semibold mt-4">{product?.title}</div>
            </CardBody>

            <CardFooter>
              <div className="flex justify-between items-center gap-5 px-4 py-2">
                <div className="mt-4 font-semibold text-green-600 text-lg">
                  ${product?.price.toFixed(2)}
                </div>
                <Link
                  href={`products/${product?.id}`}
                  className="h-10 w-24 py-2 px-4 mt-2 bg-green-500 text-white"
                >
                  Details
                </Link>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
