"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import RatingComponent from "@/components/rating-component";
import Button from "@/components/ui/button";
import { trpc } from "@/trpc/client";
import Spinner from "@/components/ui/spinner";
import ErrorMessage from "@/components/ui/error-message";

function getTimeInHours(value: number | undefined) {
  if (!value) return "";
  const num = value;
  const hours = num / 60;
  const rhours = Math.floor(hours);
  const minutes = (hours - rhours) * 60;
  const rminutes = Math.round(minutes);
  return `${rhours} hours ${rminutes} Mins`;
}

function BookDetails({ params }: { params: { bookId: string } }) {
  const { data, isLoading, error, isError } = trpc.getBook.useQuery(
    { id: parseInt(params.bookId) },
    {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    }
  );

  if (isLoading) {
    <div className="h-screen w-screen flex justify-center items-center">
      <Spinner />
    </div>;
  }

  if (error) return <ErrorMessage />;
  return (
    <>
      <div className="p-5 md:p-14 space-y-5">
        <div className="flex items-center justify-start">
          <Link href="/books">
            <button
              type="button"
              className="text-primaryColor hover:text-white border border-primaryColor hover:bg-primaryColor focus:ring-4 focus:outline-none focus:ring-primaryColor font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 transition-all ease-in-out"
            >
              Back to Home
            </button>
          </Link>
        </div>

        <div className="lg:flex justify-center items-start gap-3 p-3">
          <div className="basis-1/4 rounded-lg overflow-hidden flex justify-center items-center h-[400px]">
            <Image
              src={data?.coverImage || ""}
              alt="Book Cover"
              height={400}
              width={250}
              objectFit="cover"
            />
          </div>
          <div className="basis-3/4 h-5/6 p-5 space-y-5">
            <div className="space-y-2 mb-4">
              <h2 className="text-primaryColor font-semibold text-3xl">
                {data?.name}
              </h2>
              <h5 className="font-light text-sm">Author(s) of Book</h5>
              {data?.authors?.map((author) => (
                <span className="text-sm font-extralight">{author} &nbsp;</span>
              ))}
              <h5 className="font-light text-sm">
                Book Read Time: {getTimeInHours(data?.readTime)}
              </h5>
            </div>

            <div className="text-sm font-medium">{data?.description}</div>

            <div className="lg:flex gap-3 basis-1/4">
              <div className="basis-1/2">
                <RatingComponent />
                <Link href={data?.pdf || ""} target="_blank">
                  <Button className="bg-primaryColor text-xs px-3 text-white mt-5">
                    Read This Book
                  </Button>
                </Link>
              </div>
              <div className="basis-3/4 xs:mt-5">
                <h4 className="text-sm font-light mb-5">
                  You have not rated the book yet. Click here to rate the book
                </h4>
                <Button className="bg-primaryColor text-white text-sm">
                  Rate this Book
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookDetails;
