import Image from "next/image";
import Link from "next/link";
import React from "react";
import cover from "../../../../assets/book-cover.webp";
import RatingComponent from "@/components/rating-component";
import Button from "@/components/button";

function BookDetails({ params }: { params: { bookId: string } }) {
  return (
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
        <div className="basis-1/4 rounded-lg overflow-hidden flex justify-center items-center">
          <Image src={cover} alt="Book Cover" />
        </div>
        <div className="basis-3/4 h-5/6 p-5 space-y-5">
          <div className="space-y-2 mb-4">
            <h2 className="text-primaryColor font-semibold text-3xl">
              Title of Book
            </h2>
            <h5 className="font-light text-sm">Author of Book</h5>
            <h5 className="font-light text-sm">
              Book Read Time: 6 hours 30 Mins
            </h5>
          </div>

          <div className="text-sm font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            tempus, dui vitae cursus mattis, odio quam mattis orci, vitae cursus
            diam velit vel eros. Pellentesque et vulputate mauris. Integer
            scelerisque eros sapien, volutpat feugiat ante pellentesque eget.
            Pellentesque rutrum tortor ligula, at imperdiet felis vestibulum id.
            Pellentesque tempus est eget lacinia tempor. Nulla posuere egestas
            maximus. Nunc laoreet eros ac luctus dictum. Fusce eleifend ante vel
            justo ultricies, sit amet elementum sapien tempor. Praesent nisl
            quam, porttitor nec arcu eu, facilisis bibendum odio. Morbi luctus
            augue sed lectus varius lacinia. Etiam condimentum luctus tempor.
            Vestibulum lacus leo, facilisis et tortor id, pulvinar porttitor
            felis. Integer finibus nulla ut ornare scelerisque. Duis et risus
            orci. Cras placerat nisi in vulputate fermentum.
          </div>

          <div className="lg:flex gap-3 basis-1/4">
            <div className="basis-1/2">
              <RatingComponent />
              <Button className="bg-primaryColor text-xs px-3 text-white mt-5">
                Read This Book
              </Button>
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
  );
}

export default BookDetails;
