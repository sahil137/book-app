"use client";
import Link from "next/link";

import Input from "@/components/input";
import { useForm, Controller } from "react-hook-form";
import TextArea from "@/components/text-area";
import Button from "@/components/button";
import UploderComponent from "@/components/uploader-component";
import Label from "@/components/label";
import { toast } from "react-toastify";
import { trpc } from "@/trpc/client";
import { useRouter } from "next/navigation";

type FormData = {
  name: string;
  authors: string;
  readTime: string;
  description: string;
  cover: string;
  pdf: string;
};

const defaultValues = {
  name: "",
  authors: "",
  readTime: "",
  description: "",
  cover: "",
  pdf: "",
};

function AddBook() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    shouldUnregister: true,
    defaultValues,
  });

  const addBook = trpc.createBook.useMutation();
  const router = useRouter();

  const onSubmit = async (values: FormData) => {
    try {
      const { pdf, cover } = values;
      if (cover === "") {
        toast.info("Please Upload a cover for the book");
        return;
      }
      if (pdf === "") {
        toast.info("Please upload the book pdf");
        return;
      }
      const authors = values?.authors?.split(",");
      addBook.mutate({
        ...values,
        rating: 0,
        coverImage: values?.cover,
        authors,
        readTime: parseInt(values?.readTime),
      });
      if (addBook?.data?.success) {
        toast.success("Book Created");
        router.push("/books");
      }
    } catch (error: any) {
      console.log(error);
      toast.error(error?.message);
    }
  };

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

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="lg:flex justify-center items-start p-3"
      >
        <div className="basis-1/4">
          <Label className="text-xl text-center mb-5">Book Cover</Label>
          <Controller
            control={control}
            name="cover"
            render={({ field: { value, onChange } }) => (
              <>
                <UploderComponent
                  type="imageUploader"
                  value={value}
                  onChange={onChange}
                />

                {errors?.cover?.message && (
                  <>
                    <p className="my-2 text-xs text-start text-red-500">
                      {errors?.cover?.message}
                    </p>
                  </>
                )}
              </>
            )}
          />
        </div>
        <div className="basis-3/4 h-5/6 p-5 space-y-5">
          <Input
            {...register("name")}
            error={errors?.name?.message}
            label="Name of the Book"
            variant="outline"
            placeholder="Enter the published name"
            required
          />

          <div className="space-y-5 md:space-y-0 md:flex gap-2">
            <Input
              {...register("authors")}
              error={errors?.authors?.message}
              className="basis-1/2"
              label="Author of the Book"
              placeholder="Add all the authors comma separated"
              variant="outline"
              required
            />
            <Input
              {...register("readTime")}
              error={errors?.readTime?.message}
              className="basis-1/2"
              label="Book read time"
              placeholder="Add time in mins"
              variant="outline"
              type="number"
              min={0}
              required
            />
          </div>

          <TextArea
            {...register("description")}
            error={errors?.description?.message}
            label="Book Details"
            rows={5}
            placeholder="Max characters 300"
            variant="outline"
            required
            maxLength={300}
          />

          <Controller
            control={control}
            name="pdf"
            render={({ field: { value, onChange } }) => (
              <>
                <UploderComponent
                  type="pdfUploader"
                  value={value}
                  onChange={onChange}
                />

                {errors?.pdf?.message && (
                  <>
                    <p className="my-2 text-xs text-start text-red-500">
                      {errors?.cover?.message}
                    </p>
                  </>
                )}
              </>
            )}
          />

          <Button
            className="xs:w-full lg:w-auto bg-primaryColor text-white"
            type="submit"
            loading={addBook.isLoading}
          >
            Add Book
          </Button>
        </div>
      </form>
    </div>
  );
}

export default AddBook;
