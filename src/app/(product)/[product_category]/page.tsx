"use client";

import { PRODUCT_CATEGORIES } from "@/config";
import { notFound } from "next/navigation";

interface ProductPageProps {
  params: {
    product_category: "accessories" | "men" | "women" | "kids" | "sale";
  };
}
export default function ProductPage({ params }: ProductPageProps) {
  const is = PRODUCT_CATEGORIES.find(
    (product) => product.title === params.product_category,
  );

  if (is === undefined) return notFound();

  return <div>{is.title}</div>;
}
