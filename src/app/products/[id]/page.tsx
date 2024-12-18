"use client";

import { ReactElement, useEffect, useState } from "react";
import Image from "next/image";
import Vintagewhitechair from "@/public/Vintagewhitechair.jpg"

type Product = {
  id: number;
  title: string;
  price: number;
  image: ReactElement;
  originalPrice?: number;
  isNew?: boolean;
  isSale?: boolean;
};

const products: Product[] = [
  { id: 1, title: "LibraryStoolChair", price: 20,  image: (
    <Image
      src={Vintagewhitechair}
      alt="car"
      width={327}
      height={327}
    ></Image>
  ),
},
  {
    id: 2,
    title: "VintageArmchair",
    price: 40,
    image: (
      <Image
        src={Vintagewhitechair}
        alt="car"
        width={327}
        height={327}
      ></Image>
    ),

    originalPrice: 60,
  },
  { id: 3, title: "ErgonomicOfficeChair", price: 50, image: (
    <Image
      src={Vintagewhitechair}
      alt="car"
      width={327}
      height={327}
    ></Image>
  ),
},
  { id: 4, title: "ModernDiningChair", price: 35,  image: (
    <Image
      src={Vintagewhitechair}
      alt="car"
      width={327}
      height={327}
    ></Image>
  ),
},
  {
    id: 5,
    title: "RecliningLoungeChair",
    price: 60,
    image: (
      <Image
        src={Vintagewhitechair}
        alt="car"
        width={327}
        height={327}
      ></Image>
    ),

    isSale: true,
  },
  {
    id: 6,
    title: "AdjustableDeskChair",
    price: 25,
    image: (
      <Image
        src={Vintagewhitechair}
        alt="car"
        width={327}
        height={327}
      ></Image>
    ),

    isNew: true,
  },
  { id: 7, title: "ClassicBarStool", price: 30,  image: (
    <Image
      src={Vintagewhitechair}
      alt="car"
      width={327}
      height={327}
    ></Image>
  ),
},
  {
    id: 8,
    title: "SleekHighChair",
    price: 15,
    image: (
      <Image
        src={Vintagewhitechair}
        alt="car"
        width={327}
        height={327}
      ></Image>
    ),

    isSale: true,
  },
  { id: 9, title: "FoldableOutdoorChair", price: 10,  image: (
    <Image
      src={Vintagewhitechair}
      alt="car"
      width={327}
      height={327}
    ></Image>
  ),
},
  {
    id: 10,
    title: "Leather Recliner Chair",
    price: 150,
    image: (
      <Image
        src={Vintagewhitechair}
        alt="LeatherReclinerChair"
        width={327}
        height={327}
      ></Image>
    ),

    isSale: true,
    originalPrice: 200,
  },
];

export default function ProductDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const [productId, setProductId] = useState<string | null>(null);
  const [product, setProduct] = useState<Product | null>(null);
   console.log(productId)
  useEffect(() => {
    const unwrapParams = async () => {
      try {
        const resolvedParams = await params;
        setProductId(resolvedParams.id);

        const foundProduct = products.find(
          (item) => item.id === Number(resolvedParams.id)
        );
        setProduct(foundProduct || null);
      } catch (error) {
        console.error("Error fetching product:", error);
        setProductId(null);
      }
    };

    unwrapParams();
  }, [params]);

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-700 text-xl font-medium">Product not found</p>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="flex max-w-4xl w-full">
        {/* Image Section */}
        <div className="w-1/2 p-4">
        {product.image}
        </div>

        {/* Product Details Section */}
        <div className="w-1/2 p-4">
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <button className="mt-4 mb-4 bg-[#007580] text-white font-semibold py-2 px-4 rounded">
            ${product.price}
          </button>
          {product.originalPrice && (
            <p className="text-sm text-gray-500 line-through mt-2">
              Original Price: ${product.originalPrice}
            </p>
          )}
          <p className="text-gray-700 mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            fugiat explicabo iusto qui exercitationem distinctio, perspiciatis
            dolore provident cum eveniet error illo esse accusamus voluptatibus
            ducimus impedit laudantium deleniti repellendus.
          </p>
          <button className="mt-4 bg-[#007580] text-white font-semibold py-2 px-4 rounded">
            Add To Cart
          </button>
          {product.isNew && (
            <span className="text-sm text-green-600 font-medium mt-2 block">
              New Arrival
            </span>
          )}
          {product.isSale && (
            <span className="block text-sm text-red-600 font-medium mt-2">
              On Sale!
            </span>
          )}
        </div>
      </div>
    </div>
  );
}