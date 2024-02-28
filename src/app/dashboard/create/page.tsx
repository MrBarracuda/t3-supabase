"use client";

import { api } from "@/trpc/react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { v4 as uuidv4 } from "uuid";
import { toast } from "@/components/ui/use-toast";
import { formatDate } from "@/lib/utils";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { Label } from "@/components/ui/label";
import { Icons } from "@/components/icons";
import { type ProductCreateType } from "@/lib/validations/product";

type FormData = Omit<ProductCreateType, "id" | "createdAt">;

// const GENDERS = ["men", "women", "kids", "unisex"] as const;

// TODO: Add detailed toast error with info why it failed
const onError = () =>
  toast({
    title: "Something went wrong.",
    description: "Your create request failed. Please try again.",
    variant: "destructive",
  });

export default function Create() {
  // TODO: add  { resolver: zodResolver(productCreateSchema) }  to useForm opts https://github.com/colinhacks/zod#merge
  const { register, handleSubmit, reset } = useForm<FormData>();

  const { mutate, isLoading } = api.product.create.useMutation({
    onError,
    onSuccess: () => {
      reset();
      return toast({
        title: "Success",
        description: "New product item has been created",
      });
    },
  });

  const onSubmit = (formData: FormData) => {
    const { title, category, imgUrl } = formData;

    const id = uuidv4();
    const createdAt = formatDate(new Date());

    mutate({ title, id, createdAt, category: "men" });
  };

  return (
    <div className="grid gap-6">
      <MaxWidthWrapper className="flex items-start justify-center py-20">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-2">
            <div className="grid gap-1">
              <Label className="sr-only" htmlFor="email">
                Title
              </Label>
              <Input
                type="text"
                id="title"
                placeholder="Title"
                autoCapitalize="none"
                autoComplete="off"
                {...register("title")}
              />
              {/*TODO: implement controller component */}
              {/*<Select>*/}
              {/*  <SelectTrigger className="w-full">*/}
              {/*    <SelectValue placeholder="Gender" />*/}
              {/*  </SelectTrigger>*/}
              {/*  <SelectContent>*/}
              {/*    {GENDERS.map((item) => (*/}
              {/*      <SelectItem*/}
              {/*        key={item}*/}
              {/*        value={item}*/}
              {/*        className="capitalize"*/}
              {/*        {...register("gender")}*/}
              {/*      >*/}
              {/*        {item}*/}
              {/*      </SelectItem>*/}
              {/*    ))}*/}
              {/*  </SelectContent>*/}
              {/*</Select>*/}
            </div>
            <Button disabled={isLoading} type="submit">
              {isLoading ? (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                "Create"
              )}
            </Button>
          </div>
        </form>
      </MaxWidthWrapper>
    </div>
  );
}
