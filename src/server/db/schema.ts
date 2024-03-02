// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import {
  index,
  pgTableCreator,
  serial,
  timestamp,
  uuid,
  text,
  integer,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { categoryEnum, sizeEnum } from "@/server/db/enum";

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
  brandId: integer("brand_id")
    .references(() => brands.id)
    .notNull(),
  colorId: integer("color_id")
    .references(() => colors.id)
    .notNull(),
  sizeId: integer("size_id")
    .references(() => sizes.id)
    .notNull(),
});

export const productRelations = relations(products, ({ one }) => ({
  brand: one(brands, { fields: [products.brandId], references: [brands.id] }),
  color: one(colors, { fields: [products.colorId], references: [colors.id] }),
  size: one(sizes, { fields: [products.sizeId], references: [sizes.id] }),
}));

export const brands = createTable("brands", {
  value: text("value").notNull(),
  id: serial("id").primaryKey(),
  modelId: integer("model_id")
    .references(() => models.id)
    .notNull(),
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
export const brandRelations = relations(brands, ({ one }) => ({
  model: one(models, { fields: [brands.modelId], references: [models.id] }),
}));
