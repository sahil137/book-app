"use client";
import Image from "next/image";
import React from "react";
import logo from "../assets/book-cover.webp";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {
  data: {
    id: number;
    name: string;
    coverImage: string;
    description: string;
    pdf: string;
    rating: number;
    readTime: number;
    authors: string[];
    createdAt: string;
  };
};

function BookCard({ data }: Props) {
  return (
    <Link href={`/books/details/${data?.id}`}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="xs:w-44 md:w-[190px] dark:bg-gray-800 overflow-hidden"
      >
        <div className="overflow-hidden rounded-md">
          <Image
            height={272}
            width={190}
            className="object-cover h-[272px] w-[190px]"
            src={data?.coverImage}
            alt="Book Cover"
          />
        </div>
        <div className="px-1 italic mt-1">
          <h4 className="font-bold text-xs">{data?.name}</h4>
          {data?.authors?.map((author) => (
            <span className="text-sm font-extralight">{author} &nbsp;</span>
          ))}
        </div>
      </motion.div>
    </Link>
  );
}

export default BookCard;
