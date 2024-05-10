"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function IconButton({
  onClick,
  src,
  className,
}: {
  onClick?: any;
  src: string;
  className?: string;
}) {
  return (
    <motion.button
      className={`${className} bg-red-950 p-2 rounded-full flex justify-center items-center`}
      type="submit"
      onClick={onClick}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Image
        className="invert-[0.9]"
        src={src}
        width={25}
        height={25}
        alt="icon"
      />
    </motion.button>
  );
}
