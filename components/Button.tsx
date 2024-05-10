"use client";

import { useFormStatus } from "react-dom";
import { motion } from "framer-motion";

export function Button({ text, onClick }: { text: String; onClick?: any }) {
  const { pending } = useFormStatus();

  return (
    <motion.button
      className="bg-red-950 p-3 rounded-2xl text-white"
      type="submit"
      onClick={onClick}
      disabled={pending}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.8 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {pending ? "wait..." : <div>{text}</div>}
    </motion.button>
  );
}
