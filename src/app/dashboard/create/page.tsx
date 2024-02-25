"use client";

import { api } from "@/trpc/react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { v4 as uuidv4 } from "uuid";
import { toast } from "@/components/ui/use-toast";
import { formatDate } from "@/lib/utils";

// TODO: Add detailed toast error with info why it failed
const onError = () =>
  toast({
    title: "Something went wrong.",
    description: "Your create request failed. Please try again.",
    variant: "destructive",
  });

export default function Create() {
  const { register, handleSubmit, reset } = useForm<{ title: string }>();

  const { mutate } = api.product.create.useMutation({
    onError,
    onSuccess: () => {
      reset();
      return toast({
        title: "Success",
        description: "New product item has been created",
      });
    },
  });

  const onSubmit = (formData: { title: string }) => {
    const { title } = formData;

    const id = uuidv4();
    const createdAt = formatDate(new Date());

    mutate({ title, id, createdAt });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="text"
        id="title"
        placeholder="Title"
        autoCapitalize="none"
        autoComplete="off"
        {...register("title")}
      />
      <Button type="submit">Create</Button>
    </form>
  );
}
