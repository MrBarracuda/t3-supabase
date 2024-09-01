import {
  pgTable,
  serial,
  text,
  timestamp,
  integer,
  uuid,
} from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: uuid("id").primaryKey(),
  avatar: text("avatar"),
  first_name: text("first_name"),
  last_name: text("last_name"),
  username: text("username").notNull(),
  email: text("email").notNull(),
  password: text("password"),
  date_of_birth: timestamp("date_of_birth"),
  phone_number: text("phone_number"),
  created_at: timestamp("created_at").defaultNow(),
});

export const addresses = pgTable("addresses", {
  id: serial("id").primaryKey(),
  user_id: uuid("user_id").references(() => users.id),
  title: text("title"),
  address_line_1: text("address_line_1"),
  address_line_2: text("address_line_2"),
  country: text("country"),
  city: text("city"),
  postal_code: text("postal_code"),
  phone_number: text("phone_number"),
  created_at: timestamp("created_at").defaultNow(),
});

export const cart = pgTable("cart", {
  id: serial("id").primaryKey(),
  user_id: uuid("user_id").references(() => users.id),
  total: integer("total"),
  created_at: timestamp("created_at").defaultNow(),
  updated_at: timestamp("updated_at"),
});

export const cart_item = pgTable("cart_item", {
  id: serial("id").primaryKey(),
  cart_id: integer("cart_id").references(() => cart.id),
  product_id: integer("product_id").references(() => products.id),
  products_sku_id: integer("products_sku_id").references(
    () => products_skus.id,
  ),
  quantity: integer("quantity"),
  created_at: timestamp("created_at").defaultNow(),
  updated_at: timestamp("updated_at"),
});

export const categories = pgTable("categories", {
  id: serial("id").primaryKey(),
  name: text("name"),
  description: text("description"),
  created_at: timestamp("created_at").defaultNow(),
  deleted_at: timestamp("deleted_at"),
});

export const order_details = pgTable("order_details", {
  id: serial("id").primaryKey(),
  user_id: uuid("user_id").references(() => users.id),
  payment_id: integer("payment_id").references(() => payment_details.id),
  total: integer("total"),
  created_at: timestamp("created_at").defaultNow(),
  updated_at: timestamp("updated_at"),
});

export const order_item = pgTable("order_item", {
  id: serial("id").primaryKey(),
  order_id: integer("order_id").references(() => order_details.id),
  product_id: integer("product_id").references(() => products.id),
  products_sku_id: integer("products_sku_id").references(
    () => products_skus.id,
  ),
  quantity: integer("quantity"),
  created_at: timestamp("created_at").defaultNow(),
  updated_at: timestamp("updated_at"),
});

export const payment_details = pgTable("payment_details", {
  id: serial("id").primaryKey(),
  order_id: integer("order_id").references(() => order_details.id),
  amount: integer("amount"),
  provider: text("provider"),
  status: text("status"),
  created_at: timestamp("created_at").defaultNow(),
  updated_at: timestamp("updated_at"),
});

export const product_attributes = pgTable("product_attributes", {
  id: serial("id").primaryKey(),
  type: text("type"),
  value: text("value"),
  created_at: timestamp("created_at").defaultNow(),
  deleted_at: timestamp("deleted_at"),
});

export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  name: text("name"),
  description: text("description"),
  color: text("color"),
  sku: text("sku"),
  price: text("price"),
  category_id: integer("category_id").references(() => categories.id),
  deleted_at: timestamp("deleted_at"),
  created_at: timestamp("created_at").defaultNow(),
});

export const products_skus = pgTable("products_skus", {
  id: serial("id").primaryKey(),
  product_id: integer("product_id").references(() => products.id),
  size_attribute_id: integer("size_attribute_id").references(
    () => product_attributes.id,
  ),
  color_attribute_id: integer("color_attribute_id").references(
    () => product_attributes.id,
  ),
  sku: text("sku"),
  price: text("price"),
  quantity: integer("quantity"),
  created_at: timestamp("created_at").defaultNow(),
  deleted_at: timestamp("deleted_at"),
});

export const sub_categories = pgTable("sub_categories", {
  id: serial("id").primaryKey(),
  parent_id: integer("parent_id").references(() => categories.id),
  name: text("name"),
  description: text("description"),
  created_at: timestamp("created_at").defaultNow(),
  deleted_at: timestamp("deleted_at"),
});

export const wishlist = pgTable("wishlist", {
  id: serial("id").primaryKey(),
  product_id: integer("product_id").references(() => products.id),
  user_id: uuid("user_id").references(() => users.id),
  created_at: timestamp("created_at").defaultNow(),
  deleted_at: timestamp("deleted_at"),
});
