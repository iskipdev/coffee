import Image from "next/image";
import Link from "next/link";

export default function CoffeeRecipe() {
  const coffeeRecipe = [
    {
      id: "a",
      title: "The Ultimate Espresso Experience: Mastering the Perfect Shot",
      cookingTime: "2 minutes",
      category: "Classic Espresso",
      link: "/recipes",
    },
    {
      id: "b",
      title: "Decadent Mocha Delight: A Luxurious Treat for Your Taste Buds",
      cookingTime: "2 minutes",
      category: "Indulgent Dessert Coffee",
      link: "/recipes",
    },
    {
      id: "c",
      title: "Chilled Caramel Latte: Your Go-To Summer Cool Down",
      cookingTime: "2 minutes",
      category: " Refreshing Iced Coffee",
      link: "/recipes",
    },
    {
      id: "d",
      title:
        "Superfood Espresso Boost: Powering Your Day with Nutrient-Packed Energy",
      cookingTime: "2 minutes",
      category: "Healthy & Energizing Coffee",
      link: "/recipes",
    },
    // {
    //   id: "e",
    //   title:
    //     "Spiced Coconut Dream: Transport Yourself to Tropical Bliss with Every Sip",
    //   cookingTime: "2 minutes",
    //   category: "Exotic Flavored Coffee",
    // },
    // {
    //   id: "f",
    //   title: "The Ultimate Espresso Experience: Mastering the Perfect Shot",
    //   cookingTime: "2 minutes",
    //   category: "Classic Espresso",
    // },
  ];

  return (
    <main>
      <div className=" mt-20">
        <h1 className="text-4xl  font-medium mb-5">Popular Recipes</h1>
        <div className="grid grid-cols-1 md:grid-flow-row md:grid-cols-4 bg-red gap-4">
          {coffeeRecipe.map((recipe) => (
            <div key={recipe.id} className="border p-5 rounded-2xl">
              <Link href={recipe.link || ""}>
                <div className="uppercase text-[15px]">{recipe.category}</div>
                <div className="text-xl mt-2 mb-2">{recipe.title}</div>
                <div>{recipe.cookingTime}</div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
