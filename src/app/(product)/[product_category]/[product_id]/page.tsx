"use client";

import { api } from "@/trpc/react";
import { Suspense } from "react";

interface ProductProps {
  params: {
    // product_category: "accessories" | "men" | "women" | "kids" | "sale";
    product_id: string;
  };
}

const Loading = () => <div>Loading...</div>;

export default function ProductDetails({ params }: ProductProps) {
  const { product_id } = params;
  const { data: product } = api.product.getById.useQuery(product_id);

  return (
    <>
      <Suspense fallback={<Loading />}>
        <h2>{product?.title}</h2>
      </Suspense>
    </>
  );
}
