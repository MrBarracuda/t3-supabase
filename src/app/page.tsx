import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link";

import { CreatePost } from "@/components/create-post";
import { api } from "@/trpc/server";
import { AllPosts } from "@/components/all-posts";
import { Hero } from "@/components/hero";

export default async function Home() {
  noStore();
  // const hello = await api.post.hello.query({ text: "from tRPC" });

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Hero />

      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          Create <span className="text-[hsl(280,100%,70%)]">T3</span> App
        </h1>

        <AllPosts />
        {/*<CrudShowcase />*/}
      </div>
    </main>
  );
}

// async function CrudShowcase() {
//   const latestPost = await api.post.getLatest.query();
//
//   return (
//     <div className="w-full max-w-xs">
//       {latestPost ? (
//         <p className="truncate">Your most recent post: {latestPost.name}</p>
//       ) : (
//         <p>You have no posts yet.</p>
//       )}
//
//       <CreatePost />
//     </div>
//   );
// }
