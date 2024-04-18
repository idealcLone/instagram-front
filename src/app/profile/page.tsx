import { getCurrentUser } from "@/actions/user";
import UserDetails from "@/components/profile/UserDetails";
import UserPosts from "@/components/profile/UserPosts";

export default async function ProfilePage() {
  const user = await getCurrentUser();

  return (
    <div className={"container py-6"}>
      <UserDetails user={user} />
      <div className={"h-[1px] bg-neutral-800 w-full"} />
      <UserPosts user={user} />
    </div>
  );
}
