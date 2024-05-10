import Image from "next/image";
import { IconButton } from "@/components/IconButton";

export default function Header() {
  return (
    <main className="md:m-10 m-2 flex justify-center md:justify-between items-center">
      <div>
        <Image src={"/images/logo.png"} width={150} height={150} alt="logo" />
      </div>
      <div className="flex gap-4">
        <IconButton className="hidden md:block" src="/icons/user.svg" />
        <IconButton className="hidden md:block" src="/icons/cart.svg" />
      </div>
    </main>
  );
}
