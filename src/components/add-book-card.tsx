"use client";
import { motion } from "framer-motion";
import Link from "next/link";
function AddBookCard() {
  return (
    <Link href="/books/add-book">
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, type: "tween" }}
        className="h-80 w-[190px] dark:bg-gray-800 overflow-hidden"
      >
        <div className="rounded-md h-[272px] xs:w-44 md:w-[190px] border-dotted border-2 border-primaryColor flex flex-col items-center justify-center cursor-pointer text-primaryColor mx-auto">
          <h2 className="text-2xl">+</h2>
          <h2>Add a Book</h2>
        </div>
      </motion.div>
    </Link>
  );
}

export default AddBookCard;
