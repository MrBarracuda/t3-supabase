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

type FormData = ProductCreateType;

const onError = () =>
  toast({
    title: "Something went wrong.",
    description: "Your create request failed. Please try again.",
    variant: "destructive",
  });

export function CreateProductForm() {
  // TODO: add  { resolver: zodResolver(productCreateSchema) }  to useForm opts https://github.com/colinhacks/zod#merge
  const form = useForm<FormData>();
  const { data: user } = api.user.getCurrentUser.useQuery();

  const { mutate, isLoading } = api.product.create.useMutation({
    onError,
    onSuccess: () => {
      // form.reset({
      //   price: 0,
      //   model: "",
      //   brand: "",
      //   category: undefined,
      // });
      return toast({
        title: "Success",
        description: "New product item has been created",
      });
    },
  });

  // const createModel = api.product.createModel.useMutation({ onError });
  // const createBrand = api.product.createBrand.useMutation({ onError });

  function onSubmit(data: FormData) {
    console.log(data);

    const id = uuidv4();
    const createdAt = formatDate(new Date());

    user &&
      mutate({
        ...data,
        id,
        createdAt,
        createdBy: user.id,
        price: +data.price,
        imageUrl: null,
        updatedAt: null,
        model: data.model,
        brand: data.brand,
      });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="brand"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Brand</FormLabel>
              <FormControl>
                <Input placeholder="Brand" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="stock"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Stock</FormLabel>
              <FormControl>
                <Input placeholder="Stock" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Price</FormLabel>
              <FormControl>
                <Input type="number" placeholder="price" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="model"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Model</FormLabel>
              <FormControl>
                <Input placeholder="Model" {...field} />
              </FormControl>
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
