import { IImage, IPublication, IStory } from "@/types/publication";
import Image from "next/image";
import { getRandomImage } from "@/utils/image";

const Stories = () => {
  const stories: IStory[] = [];

  for (let i = 0; i < 10; i++) {
    const id = i + 1;
    const image: IImage = {
      id,
      url: `https://source.unsplash.com/random?racing&${id}`,
    };
    const publication: IStory = {
      id,
      user: {
        username: "Username",
        avatar: getRandomImage("avatar"),
      },
      images: [image],
    };

    stories.push(publication);
  }

  return (
    <div className={"w-full rounded-sm p-4"}>
      <ul className={"flex gap-4 overflow-auto py-1"}>
        {stories.map((story) => (
          <li key={story.id}>
            <div
              className={
                "w-[60px] h-[60px] relative rounded-full outline outline-neutral-800 outline-offset-2"
              }
            >
              <Image
                className={"object-center object-cover rounded-full"}
                src={story.user.avatar}
                alt={`${story.user.username} stories`}
                fill
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Stories;
