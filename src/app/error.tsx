"use client";

import { Button } from "@/components/ui/button";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="mx-auto my-8 flex max-w-xl flex-col rounded-md border border-neutral-200 bg-white p-8 dark:border-neutral-800 dark:bg-black md:p-12">
      <h2 className="text-xl font-bold">Oh no!</h2>
      <p className="my-2">
        There was an issue with our storefront. This could be a temporary issue,
        please try your action again.
      </p>
      <Button className="mt-4" onClick={() => reset()}>
        Try Again
      </Button>
    </div>
  );
}
