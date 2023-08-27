"use client";
import Image from "next/image";
import React from "react";
import logo from "../assets/book-cover.webp";
import { motion } from "framer-motion";
import Link from "next/link";
function BookCard() {
  return (
    <Link href="/books/details/1234">
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="h-80 xs:w-44 md:w-[190px] dark:bg-gray-800 overflow-hidden"
      >
        <div className="overflow-hidden rounded-md">
          <Image
            height={272}
            width={190}
            className="object-cover h-[272px] w-[190px]"
            src={logo}
            alt="Book Cover"
          />
        </div>
        <div className="px-1 italic mt-1">
          <h4 className="font-bold text-xl leading-6">Last Hope</h4>
          <h6 className="text-sm font-extralight">Person 1</h6>
        </div>
      </motion.div>
    </Link>
  );
}

export default BookCard;
