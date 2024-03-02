"use client";

import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";
import { PRODUCT_CATEGORIES } from "@/lib/types";
import { Icons } from "@/components/icons";
import { v4 as uuidv4 } from "uuid";
import { formatDate } from "@/lib/utils";
import { api } from "@/trpc/react";

import { type ProductCreateType } from "@/lib/validations/product";
import { Input } from "@/components/ui/input";

type FormData = Omit<ProductCreateType, "id" | "createdAt">;

// const GENDERS = ["men", "women", "kids", "unisex"] as const;

// TODO: Add detailed toast error with info why it failed
const onError = () =>
  toast({
    title: "Something went wrong.",
    description: "Your create request failed. Please try again.",
    variant: "destructive",
  });

export function CreateProductForm() {
  // TODO: add  { resolver: zodResolver(productCreateSchema) }  to useForm opts https://github.com/colinhacks/zod#merge
  const form = useForm<FormData>();
  // const { data: user } = api.user.getCurrentUser.useQuery();

  const { mutate, isLoading } = api.product.create.useMutation({
    onError,
    onSuccess: () => {
      form.reset({
        price: 0,
        category: undefined,
      });
      return toast({
        title: "Success",
        description: "New product item has been created",
      });
    },
  });

  function onSubmit(data: FormData) {
    const id = uuidv4();
    const createdAt = formatDate(new Date());

    mutate({ id, createdAt, ...data });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Price</FormLabel>
              <FormControl>
                <Input placeholder="price" {...field} />
              </FormControl>
              {/*<FormDescription>*/}
              {/*  This is your public display name.*/}
              {/*</FormDescription>*/}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {PRODUCT_CATEGORIES.map((category) => (
                    <SelectItem
                      key={category.title}
                      value={category.title}
                      className="capitalize"
                    >
                      {category.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {/*<FormDescription>*/}
              {/*  You can manage email addresses in your{" "}*/}
              {/*</FormDescription>*/}
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={isLoading} type="submit">
          {isLoading ? (
            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            "Create"
          )}
        </Button>
      </form>
    </Form>
  );
}
