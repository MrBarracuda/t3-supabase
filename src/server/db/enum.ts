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

// export const categoryEnum = pgEnum("category", [
//   "accessories",
//   "men",
//   "women",
//   "kids",
//   "sale",
// ]);

export const genderEnum = pgEnum("gender", ["Men", "Women", "Unisex"]);

export const colorEnum = pgEnum("color", [
  "Black",
  "Blue",
  "Brown",
  "Green",
  "Grey",
  "Multi-Color",
  "Orange",
  "Pink",
  "Purple",
  "Red",
  "White",
  "Yellow",
]);

export const brandsEnum = pgEnum("brand", [
  "Adidas",
  "ASICS",
  "Converse",
  "Jordan",
  "New Balance",
  "Nike",
  "Puma",
  "Reebok",
]);
