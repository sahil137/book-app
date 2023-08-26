import "@uploadthing/react/styles.css";
import { UploadButton, UploadDropzone } from "@/utils/upload-thing";
import Image from "next/image";

interface Uploader {
  type: "imageUploader" | "pdfUploader";
  value: string;
  onChange: (url?: string) => void;
}
function UploderComponent({ type, value, onChange }: Uploader) {
  return (
    <>
      {type === "imageUploader" ? (
        <>
          {value !== "" ? (
            <>
              <div className="relative h-56 lg:h-[500px] flex items-center">
                <Image fill src={value} alt="Book Cover" />
              </div>
            </>
          ) : (
            <>
              <UploadButton
                className="lg:h-[500px]"
                endpoint="imageUploader"
                onClientUploadComplete={(res) => {
                  console.log("Files: ", res);
                  if (!!res) onChange(res[0]?.url);
                }}
                onUploadError={(error: Error) => {
                  console.log(error);
                }}
              />
            </>
          )}
        </>
      ) : (
        <>
          {value === "" ? (
            <>
              <UploadDropzone
                endpoint="pdfUploader"
                onClientUploadComplete={(res) => {
                  console.log("response", res);
                  if (!!res) onChange(res[0]?.url);
                }}
              />
            </>
          ) : (
            <>
              <h2 className="text-primaryColor text-center">PDF Uploaded</h2>
            </>
          )}
        </>
      )}
    </>
  );
}

export default UploderComponent;
