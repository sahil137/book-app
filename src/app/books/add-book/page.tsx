"use client";
import Link from "next/link";

import Input from "@/components/input";
import { useForm, Controller } from "react-hook-form";
import TextArea from "@/components/text-area";
import Button from "@/components/button";
import UploderComponent from "@/components/uploader-component";
import Label from "@/components/label";

type FormData = {
  name: string;
  authors: string;
  readTime: number | null;
  description: string;
  cover: string;
  pdf: string;
};

const defaultValues = {
  name: "",
  authors: "",
  readTime: null,
  description: "",
  cover: "",
  pdf: "",
};

const regex = new RegExp("^[0-9a-zA-Z]+(,[0-9a-zA-Z]+)*$");

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

  async function onSubmit(values: FormData) {}

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
        <div className="basis-1/4 lg:h-[500px]">
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
            label="Name of the Book"
            variant="outline"
            placeholder="Enter the published name"
            {...register("name", { required: true })}
            error={errors?.name?.message}
          />

          <div className="space-y-5 md:space-y-0 md:flex gap-2">
            <Input
              className="basis-1/2"
              label="Author of the Book"
              placeholder="Add all the authors comma separated"
              variant="outline"
              {...register("authors", { required: true, pattern: regex })}
              error={errors?.authors?.message}
            />
            <Input
              className="basis-1/2"
              label="Book read time"
              placeholder="Add time in mins"
              variant="outline"
              type="number"
              min={0}
              {...register("readTime", { required: true })}
              error={errors?.readTime?.message}
            />
          </div>

          <TextArea
            label="Book Details"
            rows={5}
            placeholder="Max characters 300"
            variant="outline"
            {...register("description", { required: true, maxLength: 300 })}
            error={errors?.description?.message}
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
          >
            Add Book
          </Button>
        </div>
      </form>
    </div>
  );
}

export default AddBook;
