import Image from "next/image";
import { IUser, IUserDetails } from "@/types/user";

type Props = {
  user: IUser & IUserDetails;
};

export default async function UserDetails({ user }: Props) {
  return (
    <header className={"flex gap-[100px] px-[60px] pb-10"}>
      <div className={"max-w-[170px] w-[170px] aspect-square relative"}>
        <Image
          src={user.avatar}
          alt={user.email}
          fill
          className={"object-cover object-cover rounded-full"}
        />
      </div>
      <div className={"max-w-[400px] w-[400px]"}>
        <h1 className={"text-lg font-semibold py-10"}>{user.email}</h1>
        <div className={"grid grid-cols-3 gap-4 font-medium"}>
          <div>{user.postsCount} posts</div>
          <div>{user.followersCount} followers</div>
          <div>{user.followingCount} following</div>
        </div>
      </div>
    </header>
  );
}
