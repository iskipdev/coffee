import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import CoffeeRecipe from "@/components/coffeeRecipe";
import PopularCoffee from "@/components/popularCoffee";

export default function Home() {
  return (
    <main className="md:m-10 m-2">
      <Hero />
      <PopularCoffee />
      <CoffeeRecipe />
      <Footer />
    </main>
  );
}
