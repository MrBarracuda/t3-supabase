"use client";

import { PRODUCT_CATEGORIES } from "@/lib/types";
import { notFound } from "next/navigation";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { api } from "@/trpc/react";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

interface ProductProps {
  params: {
    product_category: "accessories" | "men" | "women" | "kids" | "sale";
  };
}
export default function Product({ params }: ProductProps) {
  const currentCategory = PRODUCT_CATEGORIES.find(
    (product) => product.title === params.product_category,
  );

  if (currentCategory?.title === undefined) {
    return notFound();
  }

  // TODO: handle {gender: property} eq to undefiend causing request to fail
  const { data: products } = api.product.getAllByCategory.useQuery(
    currentCategory.title,
  );

  const isSaleOrAccessoriesPage =
    currentCategory.title === "accessories" || currentCategory.title === "sale";

  if (isSaleOrAccessoriesPage) {
    return (
      <MaxWidthWrapper className="py-20">
        <h1 className="text-3xl">Work in progress. Stay in touch</h1>
      </MaxWidthWrapper>
    );
  }

  if (products === undefined || products.length === 0) {
    return <>Loading...</>;
  }

  return (
    <>
      <MaxWidthWrapper className="py-20">
        <h1 className="text-3xl">{currentCategory.title}</h1>
        <div>
          {products.map((product) => (
            <div className="grid gap-2" key={product.id}>
              <Separator />
              <Link
                href={`/${currentCategory.title}/${product.id}`}
                className="font-bold capitalize"
              >
                {product.title}
              </Link>
              <div className="font-medium text-muted-foreground">
                {product.category}
              </div>
              <Separator />
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </>
  );
}
