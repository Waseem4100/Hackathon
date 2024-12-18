import Image from "next/image";
import Link from "next/link";
import  WingChair from "@/public/WingChair.jpg"
import WoodenChair from "@/public/WoodenChair.jpg"
import { ReactElement } from "react";



type Categories = {
 name : string
 products : string
  image: ReactElement;
 href : string
};
export default function Categories() {
  const categories :Categories[] = [
    {
      name: "WingChair",
      products: "3,584 Products",
      image: (
        <Image
          src={WingChair}
          alt="car"
          width={327}
          height={327}
        ></Image>
      ),
      href: "/categories/wing-chair",
    },
    {
      name: "WoodenChair",
      products: "157 Products",
      image: (
        <Image
          src={WoodenChair}
          alt="car"
          width={327}
          height={327}
        ></Image>
      ),
      href: "/categories/wooden-chair",
    },
    {
      name: "DeskChair",
      products: "154 Products",
      image: (
        <Image
          src={WoodenChair}
          alt="car"
          width={327}
          height={327}
        ></Image>
      ),
      href: "/categories/desk-chair",
    },
  ];

  return (
    <section className="w-full px-4 py-[7rem] md:px-6">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold tracking-tight  mb-8">
          Top Categories
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={"../components/productDectription/discription"}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="aspect-[4/3] w-full">
                {category.image}
                 
               
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="absolute bottom-0 p-6">
                  <h3 className="mb-2 font-inter text-xl font-medium text-white">
                    {category.name}
                  </h3>
                  <p className="font-inter text-sm text-gray-200">
                    {category.products}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}