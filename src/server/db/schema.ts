// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import {
  index,
  pgTableCreator,
  serial,
  timestamp,
  uuid,
  text,
} from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
const createTable = pgTableCreator((name) => name);

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
  title: text("title").notNull(),
  imageUrl: text("image_url"),
});
