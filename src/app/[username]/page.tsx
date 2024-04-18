import { getUserByUsername } from "@/actions/user";
import UserDetails from "@/components/profile/UserDetails";
import UserPosts from "@/components/profile/UserPosts";

export default async function UserPage({
  params,
}: {
  params: { username: string };
}) {
  const user = await getUserByUsername(params.username);

  return (
    <div className={"container py-6"}>
      <UserDetails user={user} />
      <div className={"h-[1px] bg-neutral-800 w-full"} />
      <UserPosts user={user} />
    </div>
  );
}
