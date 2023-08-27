import AddBookCard from "@/components/add-book-card";
import BookCard from "@/components/book-card";
import React from "react";
import { BiSolidBookBookmark } from "react-icons/bi";

const books = [
  {
    cover: "../../components/logo.svg",
    name: "Book 1",
    authors: ["Person1", "Person2"],
  },
  {
    cover: "../../components/logo.svg",
    name: "Book 1",
    authors: ["Person1", "Person2"],
  },
  {
    cover: "../../components/logo.svg",
    name: "Book 1",
    authors: ["Person1", "Person2"],
  },
  {
    cover: "../../components/logo.svg",
    name: "Book 1",
    authors: ["Person1", "Person2"],
  },
  {
    cover: "../../components/logo.svg",
    name: "Book 1",
    authors: ["Person1", "Person2"],
  },
  {
    cover: "../../components/logo.svg",
    name: "Book 1",
    authors: ["Person1", "Person2"],
  },
];

function Books() {
  return (
    <div className="p-5 md:p-14 space-y-10">
      <div className="flex items-center md:justify-center lg:justify-start gap-4">
        <BiSolidBookBookmark size={50} color="#27378C" />
        <h2 className="font-bold text-primaryColor text-4xl">Books</h2>
      </div>
      <div className="grid xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 place-items-center">
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <AddBookCard />
      </div>
    </div>
  );
}

export default Books;
