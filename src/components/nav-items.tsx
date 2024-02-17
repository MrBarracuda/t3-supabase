import Link from "next/link";
import { PRODUCT_CATEGORIES } from "@/config";

export function NavItems() {
  return (
    <nav className="flex h-full gap-4">
      <ul className="text-md hidden gap-6 font-medium md:flex md:items-center">
        {PRODUCT_CATEGORIES.map((category) => (
          <li key={category.title}>
            <Link
              href={category.path}
              className="capitalize underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
            >
              {category.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
