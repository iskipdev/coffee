import { Button } from "@/components/Button";
import Link from "next/link";

export default function Hero() {
  return (
    <main className="flex  flex-col justify-center items-center">
      <div className="text-[50px] mt-8 md:text-[80px] text-center mb-2">
        Crafting joy
        <br /> one cup at a time.
      </div>
      <div className="text-xl text-center">
        Sip into perfection with our exquisite coffee blends, crafted for your
        ultimate enjoyment
      </div>
      <div className="mt-5 flex gap-5">
        <Link href={"/about-us"}>
          <Button text={"About us"} />
        </Link>
        <Link href={"/coffee-history"}>
          <Button text={"Coffee history"} />
        </Link>
      </div>
    </main>
  );
}
