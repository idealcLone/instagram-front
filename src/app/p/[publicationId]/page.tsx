import { getPublicationById } from "@/actions/publication";
import Image from "next/image";
import Slider from "@/components/common/Slider";

export default async function PublicationPage({
  params,
}: {
  params: { publicationId: string };
}) {
  const publication = await getPublicationById(Number(params.publicationId));

  return (
    <div className={"px-[100px] py-[20px] h-full w-full"}>
      <article
        className={
          "border-[1px] border-neutral-800 flex w-full h-full overflow-hidden rounded-md"
        }
      >
        <div
          className={
            "w-full flex-1 h-full relative border-r-[1px] border-neutral-800"
          }
        >
          <Slider images={publication.images} />
        </div>
        <div className={"flex flex-col text-sm w-[400px]"}>
          <div
            className={
              "p-4 flex items-center gap-2 border-b-[1px] border-neutral-800"
            }
          >
            <Image
              src={publication.user.avatar}
              alt={publication.user.email}
              width={30}
              height={30}
              className={"rounded-full"}
            />
            <div>{publication.user.email}</div>
          </div>
          <div className={"p-4 flex-1 border-b-[1px] border-neutral-800"}>
            Comments
          </div>
          <div className={"p-4 border-b-[1px] border-neutral-800"}>Likes</div>
          <div className={"p-4 border-b-[1px] border-neutral-800"}>
            Add a comment
          </div>
        </div>
      </article>
    </div>
  );
}
