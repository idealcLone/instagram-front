import { IUser } from "@/types/user";
import Image from "next/image";
import { getPublicationsByUserId } from "@/actions/publication";
import Link from "next/link";

type Props = {
  user: IUser;
};

export default async function UserPosts({ user }: Props) {
  const publications = await getPublicationsByUserId(user.id);

  return (
    <section className={"pt-4 flex flex-col gap-4"}>
      <h2 className={"text-center uppercase font-medium text-sm"}>Posts</h2>
      <div className={"grid grid-cols-3 gap-1"}>
        {publications.map((publication) => (
          <Link key={publication.id} href={`/p/${publication.id}`}>
            <div className={"relative aspect-square"}>
              <Image
                src={publication.images[0].url}
                alt={publication.description}
                fill
                className={"object-cover object-contain rounded-sm"}
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
