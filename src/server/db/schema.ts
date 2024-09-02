import {
  pgTable,
  bigint,
  varchar,
  date,
  timestamp,
  foreignKey,
  uuid,
  integer,
} from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

export const users = pgTable("users", {
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  id: uuid("id").primaryKey(),
  avatar: varchar("avatar"),
  firstName: varchar("first_name"),
  lastName: varchar("last_name"),
  username: varchar("username").notNull(),
  email: varchar("email").notNull(),
  password: varchar("password"),
  dateOfBirth: date("date_of_birth"),
  phoneNumber: varchar("phone_number"),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "string" })
    .defaultNow()
    .notNull(),
});

export const cart = pgTable("cart", {
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  id: bigint("id", { mode: "number" })
    .primaryKey()
    .generatedByDefaultAsIdentity({
      name: "cart_id_seq",
      startWith: 1,
      increment: 1,
      minValue: 1,
      maxValue: 9999,
      cache: 1,
    }),
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  userId: uuid("user_id"),
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  total: bigint("total", { mode: "number" }),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "string" })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true, mode: "string" }),
});

export const addresses = pgTable(
  "addresses",
  {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    id: bigint("id", { mode: "number" })
      .primaryKey()
      .generatedByDefaultAsIdentity({
        name: "addresses_id_seq",
        startWith: 1,
        increment: 1,
        minValue: 1,
        maxValue: 9999,
        cache: 1,
      }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    userId: uuid("user_id"),
    title: varchar("title"),
    addressLine1: varchar("address_line_1"),
    addressLine2: varchar("address_line_2"),
    country: varchar("country"),
    city: varchar("city"),
    postalCode: varchar("postal_code"),
    phoneNumber: varchar("phone_number"),
    createdAt: timestamp("created_at", { withTimezone: true, mode: "string" })
      .defaultNow()
      .notNull(),
  },
  (table) => {
    return {
      addressesUserIdFkey: foreignKey({
        columns: [table.userId],
        foreignColumns: [users.id],
        name: "addresses_user_id_fkey",
      })
        .onUpdate("cascade")
        .onDelete("cascade"),
    };
  },
);

export const cartItem = pgTable("cart_item", {
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  id: bigint("id", { mode: "number" })
    .primaryKey()
    .generatedByDefaultAsIdentity({
      name: "cart_item_id_seq",
      startWith: 1,
      increment: 1,
      minValue: 1,
      maxValue: 9999,
      cache: 1,
    }),
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  cartId: bigint("cart_id", { mode: "number" }),
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  productId: bigint("product_id", { mode: "number" }),
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  productsSkuId: bigint("products_sku_id", { mode: "number" }),
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  quantity: bigint("quantity", { mode: "number" }),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "string" })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true, mode: "string" }),
});

export const categories = pgTable("categories", {
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  id: bigint("id", { mode: "number" })
    .primaryKey()
    .generatedByDefaultAsIdentity({
      name: "categories_id_seq",
      startWith: 1,
      increment: 1,
      minValue: 1,
      maxValue: 9999,
      cache: 1,
    }),
  name: varchar("name"),
  description: varchar("description"),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "string" })
    .defaultNow()
    .notNull(),
  deletedAt: timestamp("deleted_at", { withTimezone: true, mode: "string" }),
});

export const orderItem = pgTable("order_item", {
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  id: bigint("id", { mode: "number" })
    .primaryKey()
    .generatedByDefaultAsIdentity({
      name: "order_item_id_seq",
      startWith: 1,
      increment: 1,
      minValue: 1,
      maxValue: 9999,
      cache: 1,
    }),
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  orderId: bigint("order_id", { mode: "number" }),
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  productId: bigint("product_id", { mode: "number" }),
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  productsSkuId: bigint("products_sku_id", { mode: "number" }),
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  quantity: bigint("quantity", { mode: "number" }),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "string" })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true, mode: "string" }),
});

export const subCategories = pgTable(
  "sub_categories",
  {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    id: bigint("id", { mode: "number" })
      .primaryKey()
      .generatedByDefaultAsIdentity({
        name: "sub_categories_id_seq",
        startWith: 1,
        increment: 1,
        minValue: 1,
        maxValue: 9999,
        cache: 1,
      }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    parentId: bigint("parent_id", { mode: "number" }),
    name: varchar("name"),
    description: varchar("description"),
    createdAt: timestamp("created_at", { withTimezone: true, mode: "string" })
      .defaultNow()
      .notNull(),
    deletedAt: timestamp("deleted_at", { withTimezone: true, mode: "string" }),
  },
  (table) => {
    return {
      subCategoriesParentIdFkey: foreignKey({
        columns: [table.parentId],
        foreignColumns: [categories.id],
        name: "sub_categories_parent_id_fkey",
      })
        .onUpdate("cascade")
        .onDelete("cascade"),
    };
  },
);

export const orderDetails = pgTable("order_details", {
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  id: bigint("id", { mode: "number" })
    .primaryKey()
    .generatedByDefaultAsIdentity({
      name: "order_details_id_seq",
      startWith: 1,
      increment: 1,
      minValue: 1,
      maxValue: 9999,
      cache: 1,
    }),
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  userId: uuid("user_id"),
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  paymentId: bigint("payment_id", { mode: "number" }),
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  total: bigint("total", { mode: "number" }),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "string" })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true, mode: "string" }),
});

export const paymentDetails = pgTable("payment_details", {
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  id: bigint("id", { mode: "number" })
    .primaryKey()
    .generatedByDefaultAsIdentity({
      name: "payment_details_id_seq",
      startWith: 1,
      increment: 1,
      minValue: 1,
      maxValue: 9999,
      cache: 1,
    }),
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  orderId: bigint("order_id", { mode: "number" }),
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  amount: bigint("amount", { mode: "number" }),
  provider: varchar("provider"),
  status: varchar("status"),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "string" })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true, mode: "string" }),
});

export const products = pgTable(
  "products",
  {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    id: bigint("id", { mode: "number" })
      .primaryKey()
      .generatedByDefaultAsIdentity({
        name: "products_id_seq",
        startWith: 1,
        increment: 1,
        minValue: 1,
        maxValue: 9999,
        cache: 1,
      }),
    name: varchar("name"),
    description: varchar("description"),
    color: varchar("color"),
    sku: varchar("sku"),
    price: varchar("price"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    categoryId: bigint("category_id", { mode: "number" }),
    deletedAt: timestamp("deleted_at", { withTimezone: true, mode: "string" }),
    createdAt: timestamp("created_at", { withTimezone: true, mode: "string" })
      .defaultNow()
      .notNull(),
  },
  (table) => {
    return {
      productsCategoryIdFkey: foreignKey({
        columns: [table.categoryId],
        foreignColumns: [categories.id],
        name: "products_category_id_fkey",
      })
        .onUpdate("cascade")
        .onDelete("cascade"),
    };
  },
);

export const productAttributes = pgTable("product_ attributes", {
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  id: bigint("id", { mode: "number" })
    .primaryKey()
    .generatedByDefaultAsIdentity({
      name: "product_ attributes_id_seq",
      startWith: 1,
      increment: 1,
      minValue: 1,
      maxValue: 9999,
    }),
  type: varchar("type"),
  value: varchar("value"),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "string" })
    .defaultNow()
    .notNull(),
  deletedAt: timestamp("deleted_at", { withTimezone: true, mode: "string" }),
});

export const productsSkus = pgTable("products_skus", {
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  id: bigint("id", { mode: "number" })
    .primaryKey()
    .generatedByDefaultAsIdentity({
      name: "products_skus_id_seq",
      startWith: 1,
      increment: 1,
      minValue: 1,
      maxValue: 9999,
      cache: 1,
    }),
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  productId: bigint("product_id", { mode: "number" }),
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  sizeAttributeId: bigint("size_attribute_id", { mode: "number" }),
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  colorAttributeId: bigint("color_attribute_id", { mode: "number" }),
  sku: varchar("sku"),
  price: varchar("price"),
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  quantity: bigint("quantity", { mode: "number" }),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "string" })
    .defaultNow()
    .notNull(),
  deletedAt: timestamp("deleted_at", { withTimezone: true, mode: "string" }),
});

export const wishlist = pgTable("wishlist", {
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  id: bigint("id", { mode: "number" })
    .primaryKey()
    .generatedByDefaultAsIdentity({
      name: "wishlist_id_seq",
      startWith: 1,
      increment: 1,
      minValue: 1,
      maxValue: 9999,
      cache: 1,
    }),
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  productId: bigint("product_id", { mode: "number" }),
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  userId: uuid("user_id"),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "string" })
    .defaultNow()
    .notNull(),
  deletedAt: timestamp("deleted_at", { withTimezone: true, mode: "string" }),
});
