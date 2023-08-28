"use client";
import AddBookCard from "@/components/add-book-card";
import BookCard from "@/components/book-card";
import BookSkeleton from "@/components/book-skeleton";
import { trpc } from "@/trpc/client";
import React from "react";
import { BiSolidBookBookmark } from "react-icons/bi";

function Books() {
  const booksData = trpc.getBooks.useQuery(undefined, {
    refetchOnMount: false,
    refetchOnReconnect: false,
  });

  return (
    <div className="p-5 md:p-14 space-y-10">
      <div className="flex items-center md:justify-center lg:justify-start gap-4">
        <BiSolidBookBookmark size={50} color="#27378C" />
        <h2 className="font-bold text-primaryColor text-4xl">Books</h2>
      </div>
      {booksData?.isFetching ? (
        <>
          <div className="grid xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 place-items-center">
            <BookSkeleton />
            <BookSkeleton />
            <BookSkeleton />
          </div>
        </>
      ) : (
        <>
          <div className="grid xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 place-items-center">
            {booksData?.data?.map((book) => (
              <BookCard data={book} />
            ))}

            <AddBookCard />
          </div>
        </>
      )}
    </div>
  );
}

export default Books;
