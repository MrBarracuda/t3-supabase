import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { type ReadonlyURLSearchParams } from "next/navigation";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function createUrl(
  pathname: string,
  params: URLSearchParams | ReadonlyURLSearchParams,
) {
  const paramsString = params.toString();
  const queryString = `${paramsString.length ? "?" : ""}${paramsString}`;

  return `${pathname}${queryString}`;
}

export function formatPrice(
  price: number | string,
  options: {
    currency?: "USD" | "EUR" | "GBP" | "UAH";
    notation?: Intl.NumberFormatOptions["notation"];
  } = {},
) {
  const { currency = "USD", notation = "compact" } = options;
  const numericPrice = typeof price === "string" ? parseFloat(price) : price;

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    notation,
    maximumFractionDigits: 2,
  }).format(numericPrice);
}

export function formatDate(date: Date) {
  const isoString = date.toISOString(); // ISO 8601 string
  const localeString = isoString.toLocaleString(); // Locale-specific string

  return new Date(localeString);
}
