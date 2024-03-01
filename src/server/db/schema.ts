// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import {
  index,
  pgTableCreator,
  serial,
  timestamp,
  uuid,
  text,
  pgEnum,
  integer,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm/relations";
import { CATEGORIES, SIZES } from "@/lib/types";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => name);

export const posts = createTable(
  "post",
  {
    id: serial("id").primaryKey(),
    name: text("name"),
    createdAt: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }),
  },
  (example) => ({
    nameIndex: index("name_idx").on(example.name),
  }),
);

// TODO: Create drizzle schema for profile table

export const users = createTable("users", {
  id: uuid("id").primaryKey(),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull(),
  email: text("email").unique().notNull(),
  displayName: text("display_name").notNull(),
  imageUrl: text("image_url"),
});

export const categoryEnum = pgEnum("category", CATEGORIES);

export const sizeEnum = pgEnum("size", SIZES);

// TODO: add Maybe add: isSale, stock, isForKids
export const products = createTable("products", {
  id: uuid("id").primaryKey(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }),
  createdBy: uuid("created_by").references(() => users.id),
  category: categoryEnum("category").notNull(),
  imageUrl: text("image_url"),
  price: integer("price").notNull(),
  productId: serial("product_id").notNull(),
});

export const productsRelations = relations(products, ({ many }) => ({
  brands: many(brands),
  colors: many(colors),
  sizes: many(sizes),
}));

export const brands = createTable("brands", {
  value: text("value").notNull(),
  id: serial("id").primaryKey(),
});

export const colors = createTable("colors", {
  value: text("value").notNull(),
  id: serial("id").primaryKey(),
});

export const sizes = createTable("sizes", {
  value: sizeEnum("value").notNull(),
  id: serial("id").primaryKey(),
});

export const models = createTable("models", {
  value: text("value").notNull(),
  id: serial("id").primaryKey(),
});
export const brandsRelations = relations(brands, ({ many }) => ({
  models: many(models),
}));
