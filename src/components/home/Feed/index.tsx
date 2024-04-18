import Publication from "@/components/home/Feed/Publication";
import { getUserFeed } from "@/actions/publication";

const Feed = async () => {
  const publications = await getUserFeed();

  return (
    <div className={"flex flex-col gap-4"}>
      {publications.map((publication) => (
        <Publication key={publication.id} publication={publication} />
      ))}
    </div>
  );
};

export default Feed;
