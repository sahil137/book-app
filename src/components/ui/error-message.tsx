import Link from "next/link";

const ErrorMessage = () => {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center gap-10">
      <Link href="/books">
        <button
          type="button"
          className="text-primaryColor hover:text-white border border-primaryColor hover:bg-primaryColor focus:ring-4 focus:outline-none focus:ring-primaryColor font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 transition-all ease-in-out"
        >
          Back to Home
        </button>
      </Link>
      <h3 className="text-3xl text-primaryColor font-semibold">
        Error in getting book
      </h3>
    </div>
  );
};

export default ErrorMessage;
