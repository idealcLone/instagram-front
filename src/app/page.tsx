import Feed from "@/components/home/Feed";
import Profile from "@/components/home/Profile";

export default function Home() {
  return (
    <main className={"relative w-full flex pr-[100px] items-start py-6"}>
      <div className={"container flex flex-col gap-4"}>
        {/*<Stories />*/}
        <Feed />
      </div>
      <div className={"flex flex-col gap-4 w-[250px] sticky top-6 right-0"}>
        <Profile />
        {/*<Suggestions />*/}
      </div>
    </main>
  );
}
