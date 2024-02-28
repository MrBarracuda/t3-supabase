import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";

export function Hero() {
  return (
    <MaxWidthWrapper>
      <section className="mx-auto flex max-w-3xl flex-col items-center py-20 text-center">
        <h1 className="-m-1 text-4xl font-semibold sm:text-6xl">
          Discover limited sneakers without limitation
        </h1>
        <p className="mt-6 max-w-prose text-lg text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
          culpa dolorum est laboriosam numquam similique!
        </p>
        <div className="mt-6 flex flex-col gap-4 sm:flex-row">
          <Link href="/products" className={buttonVariants()}>
            Browse Trending
          </Link>
          <Button variant="ghost">Contact Us &rarr;</Button>
        </div>
      </section>
    </MaxWidthWrapper>
  );
}
