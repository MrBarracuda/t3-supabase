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
  boolean,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { brandsEnum, colorEnum, genderEnum, sizeEnum } from "@/server/db/enum";

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
  createdBy: uuid("created_by")
    .references(() => users.id)
    .notNull(),
  gender: genderEnum("gender").array().notNull(),
  isForKids: boolean("is_for_kids").notNull(),
  stock: integer("stock").notNull(),
  imageUrl: text("image_url"),
  updatedAt: timestamp("updated_at", { withTimezone: true }),
  price: integer("price").notNull(),
  color: colorEnum("color").array().notNull(),
  size: sizeEnum("size").array().notNull(),
  modelId: integer("model_id")
    .references(() => models.id)
    .notNull(),
  brandId: integer("brand_id")
    .references(() => brands.id)
    .notNull(),
});

export const brands = createTable("brands", {
  value: text("value").notNull(),
  id: serial("id").primaryKey(),
});

export const models = createTable("models", {
  value: text("value").notNull(),
  id: serial("id").primaryKey(),
});

export const productRelations = relations(products, ({ one }) => ({
  model: one(models, { fields: [products.modelId], references: [models.id] }),
  brand: one(brands, { fields: [products.brandId], references: [brands.id] }),
}));

// export const models = createTable("models", {
//   value: text("value").notNull(),
//   id: serial("id").primaryKey(),
//   brandId: integer("brand_id")
//     .references(() => brands.id)
//     .notNull(),
// });
// export const modelRelations = relations(models, ({ one }) => ({
//   brand: one(brands, { fields: [models.brandId], references: [brands.id] }),
// }));
