import { PRODUCT_CATEGORIES } from "@/lib/types";
import { notFound } from "next/navigation";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";

interface ProductPageProps {
  params: {
    product_category: "accessories" | "men" | "women" | "kids" | "sale";
  };
}
export default function Product({ params }: ProductPageProps) {
  const currentCategory = PRODUCT_CATEGORIES.find(
    (product) => product.title === params.product_category,
  );

  if (currentCategory === undefined) {
    return notFound();
  }

  const isSaleOrAccessoriesPage =
    currentCategory.title === "accessories" || currentCategory.title === "sale";

  if (isSaleOrAccessoriesPage) {
    return (
      <MaxWidthWrapper className="py-20">
        <h1 className="text-3xl">Work in progress. Stay in touch</h1>
      </MaxWidthWrapper>
    );
  }

  return (
    <>
      <MaxWidthWrapper className="py-20">
        <h1 className="text-3xl">{currentCategory.title}</h1>
      </MaxWidthWrapper>
    </>
  );
}
