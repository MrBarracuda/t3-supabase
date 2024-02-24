"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button, buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { cn, createUrl } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";

const POPULAR_ITEMS = [
  {
    name: "Air Force 1",
    path: "air-force-1",
  },
  {
    name: "Jordan",
    path: "jordan",
  },
  {
    name: "Air Max",
    path: "air-max",
  },
  {
    name: "Blazer",
    path: "blazer",
  },
];

// TODO: change the icon to input, open drawer on input change
// TODO: expand drawer to full screen and display items on the left on mobile

type FormData = {
  search: string;
};

export function SearchSheet() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { register, handleSubmit, reset } = useForm<FormData>();

  function onSubmit(formData: FormData) {
    const { search } = formData;
    const searchTrim = search.trim();
    const newParams = new URLSearchParams(searchParams.toString());

    if (searchTrim) {
      newParams.set("q", searchTrim);
    } else {
      newParams.delete("q");
    }

    reset();
    router.push(createUrl("/search", newParams));
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Icons.search />
        </Button>
      </SheetTrigger>

      <SheetContent side="top">
        {/*TODO: Replace with <LogoWithLink/> */}
        <Icons.logo className="absolute" size={36} />
        <div className="flex items-center justify-center">
          <div className="flex w-1/3 flex-col space-y-3">
            <div className="relative mb-6">
              <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                  type="search"
                  id="search"
                  placeholder="Search"
                  autoCapitalize="none"
                  className="-ml-2 w-full px-9"
                  {...register("search")}
                />
                <SheetClose type="submit" className="hidden appearance-none" />
              </form>
              <div className="absolute left-1 top-3">
                <Icons.search className=" h-4 w-4" />
              </div>
            </div>

            <h3 className="font-semibold text-muted-foreground">
              Popular Search Terms
            </h3>

            <ul className="flex flex-col items-start space-y-1">
              {POPULAR_ITEMS.map((item) => (
                <SheetClose asChild key={item.name}>
                  <Link
                    href={"/search?q=" + item.path}
                    className={cn(
                      buttonVariants({ variant: "link" }),
                      "p-0 hover:text-muted-foreground hover:no-underline",
                    )}
                  >
                    <li className="text-lg font-semibold">{item.name}</li>
                  </Link>
                </SheetClose>
              ))}
            </ul>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
