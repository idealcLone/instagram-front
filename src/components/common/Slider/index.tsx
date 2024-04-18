"use client";

import { IImage } from "@/types/publication";
import Image from "next/image";
import { useState } from "react";

type Props = {
  images: IImage[];
};

export default function Slider({ images }: Props) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  return (
    <div className={"relative w-full h-full"}>
      {currentSlideIndex > 0 && (
        <div
          className={
            "absolute w-8 h-8 flex justify-center items-center rounded-full z-[10] cursor-pointer bg-neutral-300 text-black font-medium top-[50%] left-[10px] translate-y-[-50%]"
          }
          onClick={() => setCurrentSlideIndex((prev) => prev - 1)}
        >
          {"<"}
        </div>
      )}
      <div className={"relative w-full h-full"}>
        <Image
          src={images[currentSlideIndex].url}
          alt={images[currentSlideIndex].id.toString()}
          fill
          className={"object-cover object-center"}
        />
      </div>
      {currentSlideIndex + 1 < images.length && (
        <div
          className={
            "absolute w-8 h-8 flex justify-center items-center z-[10] cursor-pointer rounded-full bg-neutral-300 text-black font-medium top-[50%] right-[10px] translate-y-[-50%]"
          }
          onClick={() => setCurrentSlideIndex((prev) => prev + 1)}
        >
          {">"}
        </div>
      )}
    </div>
  );
}
