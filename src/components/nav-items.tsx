import Link from "next/link";

import { PRODUCT_CATEGORIES } from "@/lib/types";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function NavItems() {
  return (
    <nav className="flex h-full gap-4">
      <ul className="text-md hidden font-medium md:flex md:items-center">
        {PRODUCT_CATEGORIES.map((category) => (
          <li key={category.title}>
            <Link
              href={category.path}
              className={cn(
                buttonVariants({ variant: "link" }),
                "text-md capitalize decoration-2 underline-offset-8",
              )}
            >
              {category.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
