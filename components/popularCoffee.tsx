import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function PopularCoffee() {
  const popularCoffee = [
    {
      id: "a",
      name: "Hot Coffee",
      image: "/images/hot-coffee.jpg",
      link: "recipes",
    },
    {
      id: "b",
      name: "Cold Coffee",
      image: "/images/cold-coffee.jpg",
      link: "recipes",
    },
    {
      id: "c",
      name: "Cute Coffee",
      image: "/images/cute-coffee.jpg",
      link: "recipes",
    },
    {
      id: "d",
      name: "Heart Coffee",
      image: "/images/heart-coffee.jpg",
      link: "recipes",
    },
    // {
    //   id: "e",
    //   name: "Cool Coffee",
    //   image: "/images/cool-coffee.jpg",
    //   link: "popular/cool-coffee",
    // },
    {
      id: "f",
      name: "Cup Coffee",
      image: "/images/cup-coffee.avif",
      link: "recipes",
    },
  ];

  return (
    <main>
      <div className=" mt-20">
        <h1 className="text-3xl  font-medium mb-5">Popular Coffees!</h1>
        <div className="grid grid-cols-1 md:grid-flow-row md:grid-cols-5 bg-red gap-4">
          {popularCoffee.map((coffee) => (
            <div key={coffee.id}>
              <Link href={coffee.link || ""}>
                <Image
                  src={`${coffee.image}`}
                  width={300}
                  height={300}
                  alt={coffee.name}
                  className="w-full h-auto rounded-2xl  transition-opacity"
                />
                <h1 className="text-2xl font-medium mt-3 text-center">
                  {coffee.name}
                </h1>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
