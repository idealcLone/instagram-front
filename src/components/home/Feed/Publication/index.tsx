import { IPublication } from "@/types/publication";
import React from "react";
import Image from "next/image";
import Slider from "@/components/common/Slider";

type Props = {
  publication: IPublication;
};

const Publication: React.FC<Props> = ({ publication }) => {
  if (publication.images.length === 0) {
    return <></>;
  }

  return (
    <article className={"w-[450px] mx-auto flex flex-col gap-2"}>
      <div className={"flex gap-2 items-center"}>
        <div className={"relative w-6 h-6"}>
          <Image
            src={publication.user.avatar}
            alt={publication.user.username}
            fill
            className={"rounded-full object-cover object-center"}
          />
        </div>
        <div className={"text-sm lowercase font-medium"}>
          {publication.user.username ?? publication.user.email}
        </div>
      </div>
      <div className={"relative h-[600px] w-full"}>
        <Slider images={publication.images} />
      </div>
      <div className={"text-sm font-medium"}>
        {publication.likesCount} likes
      </div>
      <p className={"text-sm font-medium lowercase"}>
        {publication.user.username ?? publication.user.email}
      </p>
      <div className={"w-full h-[1px] bg-neutral-800 mt-2"} />
    </article>
  );
};

export default Publication;
