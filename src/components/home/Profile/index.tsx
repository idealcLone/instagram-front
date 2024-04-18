import Link from "next/link";
import Image from "next/image";
import { getCurrentUser } from "@/actions/user";

const Profile = async () => {
  const user = await getCurrentUser();

  return (
    <div className={"flex justify-between items-center w-full"}>
      <div className={"flex gap-4 items-center"}>
        <div className={"w-8 h-8 relative"}>
          <Image
            src={user.avatar}
            alt={user.username}
            className={"object-cover object-center rounded-full"}
            fill
          />
        </div>
        <div>{user.username}</div>
      </div>
      <Link href={"/logout"} className={"block"}>
        Logout
      </Link>
    </div>
  );
};

export default Profile;
