"use client";

import { ChangeEvent, FormEvent, useRef, useState } from "react";
import Button from "@/components/common/Button";
import Textarea from "@/components/common/Textarea";
import { createPublication } from "@/actions/publication";
import { defaultErrorHandler } from "@/utils/common";
import { toast } from "react-toastify";

export default function CreatePublicationPage() {
  const imagesInputRef = useRef<HTMLInputElement | null>(null);

  const [uploadedImages, setUploadedImages] = useState<File[]>([]);
  const [description, setDescription] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    try {
      setLoading(true);
      e.preventDefault();
      const formData = new FormData();
      formData.append("description", description);

      for (const image of uploadedImages) {
        formData.append("images[]", new Blob([image], { type: image.type }));
      }

      await createPublication(formData);
      toast.success("Publication was successfully created");
    } catch (error) {
      defaultErrorHandler(JSON.stringify(error));
    } finally {
      setLoading(false);
    }
  };

  const handleImagesChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const filesArray = Array.from(e.target.files);
      setUploadedImages(filesArray);
    }
  };

  return (
    <div className={"p-4 flex flex-col gap-6"}>
      <h1 className={"text-center text-lg font-medium"}>Create Publication</h1>
      <section
        className={"default-border p-4 flex flex-col gap-4 items-center"}
      >
        <h2 className={"text-md font-medium text"}>Images</h2>
        {uploadedImages.length > 0 && (
          <ul className={"grid grid-cols-4 gap-4"}>
            {uploadedImages.map((file, index) => (
              <li key={`${index} ${file.lastModified}`}>
                <img
                  src={URL.createObjectURL(file)}
                  alt={`Uploaded ${index + 1}`}
                  className={
                    "aspect-square rounded-md object-cover object-center"
                  }
                />
              </li>
            ))}
          </ul>
        )}
        <Button
          classNames={"self-center"}
          onClick={() => imagesInputRef.current?.click()}
          disabled={loading}
        >
          Upload image(s)
        </Button>
      </section>
      <form onSubmit={handleSubmit} className={"flex flex-col gap-4"}>
        <input
          ref={imagesInputRef}
          onChange={handleImagesChange}
          type="file"
          name="images"
          accept={".png,.jpeg,.jpg,.avif"}
          multiple
          hidden
        />
        <Textarea
          value={description}
          onChange={setDescription}
          placeholder={"Description"}
          classNames={"w-[400px] h-[200px]"}
        />
        <Button type={"submit"} classNames={"self-end"} disabled={loading}>
          Submit
        </Button>
      </form>
    </div>
  );
}
