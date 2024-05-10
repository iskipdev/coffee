import Image from "next/image";
import { Button } from "./Button";

export default function Footer() {
  return (
    <main className="flex md:flex-row flex-col gap-5 md:gap-0 items-center justify-between border-t-2 mt-10">
      <div>
        <Image src={"/images/logo.png"} alt="logo" width={150} height={150} />
      </div>
      <div>© to skip.coffee.dev</div>
      <div>
        <form>
          <input
            className="p-3 rounded-xl"
            placeholder="your email"
            type="text"
            required
          />
          <Button text={"Subscribe"} />
        </form>
      </div>
    </main>
  );
}
