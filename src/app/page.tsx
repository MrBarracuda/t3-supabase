import { unstable_noStore as noStore } from "next/cache";

import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { Subscribe } from "@/components/subscribe";

export default async function Home() {
  noStore();

  return (
    <>
      <Hero />
      {/*TODO: Add list of products*/}
      <Features />
      <Subscribe />
    </>
  );
}
