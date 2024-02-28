"use client";

import { Input } from "@/components/ui/input";
import { SheetClose } from "@/components/ui/sheet";
import { createUrl } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";

// TODO: change the icon to input, open drawer on input change
// TODO: expand drawer to full screen and display items on the left on mobile

type FormData = {
  search: string;
};

export function SearchSheetInput() {
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="search"
        id="search"
        placeholder="Search"
        autoCapitalize="none"
        autoComplete="off"
        className="-ml-2 w-full px-9"
        {...register("search")}
      />
      <SheetClose type="submit" className="hidden appearance-none" />
    </form>
  );
}
