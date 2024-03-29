// import ProductGridItems from "components/layout/product-grid-items";
// import { defaultSort, sorting } from "lib/constants";
// import { getProducts } from "lib/shopify";
import Index from "@/components/grid";

// TODO: explore edge runtime
export const runtime = "edge";

export const metadata = {
  title: "Search",
  description: "Search for products in the store.",
};

export default async function Search({
  searchParams,
}: {
  searchParams?: Record<string, string | string[] | undefined>;
}) {
  const { sort, q: searchValue } = searchParams as Record<string, string>;

  // const { sortKey, reverse } =
  //   sorting.find((item) => item.slug === sort) || defaultSort;

  // const products = await getProducts({ sortKey, reverse, query: searchValue });
  // const resultsText = products.length > 1 ? "results" : "result";

  return (
    <>
      {/*{searchValue ? (*/}
      {/*  <p className="mb-4">*/}
      {/*    {products.length === 0*/}
      {/*      ? "There are no products that match "*/}
      {/*      : `Showing ${products.length} ${resultsText} for `}*/}
      {/*    <span className="font-bold">&quot;{searchValue}&quot;</span>*/}
      {/*  </p>*/}
      {/*) : null}*/}
      {/*{products.length > 0 ? (*/}
      {/*  <Index className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">*/}
      {/*    <ProductGridItems products={products} />*/}
      {/*  </Index>*/}
      {/*) : null}*/}
      <Index className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {searchValue}
      </Index>
    </>
  );
}
