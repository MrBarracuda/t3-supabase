import { pgEnum } from "drizzle-orm/pg-core";

export const sizeEnum = pgEnum("size", [
  "4",
  "4.5",
  "5",
  "5.5",
  "6",
  "6.5",
  "7",
  "7.5",
  "8",
  "8.5",
  "9",
  "9.5",
  "10",
  "10.5",
  "11",
  "11.5",
  "12",
  "12.5",
  "13",
]);

export const categoryEnum = pgEnum("category", [
  "accessories",
  "men",
  "women",
  "kids",
  "sale",
]);

// export const genderEnum = pgEnum("gender", ["men", "women", "kids", "unisex"]);