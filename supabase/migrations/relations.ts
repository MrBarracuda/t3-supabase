import { relations } from "drizzle-orm/relations";
import { users, addresses, categories, subCategories, products } from "./schema";

export const addressesRelations = relations(addresses, ({one}) => ({
	user: one(users, {
		fields: [addresses.userId],
		references: [users.id]
	}),
}));

export const usersRelations = relations(users, ({many}) => ({
	addresses: many(addresses),
}));

export const subCategoriesRelations = relations(subCategories, ({one}) => ({
	category: one(categories, {
		fields: [subCategories.parentId],
		references: [categories.id]
	}),
}));

export const categoriesRelations = relations(categories, ({many}) => ({
	subCategories: many(subCategories),
	products: many(products),
}));

export const productsRelations = relations(products, ({one}) => ({
	category: one(categories, {
		fields: [products.categoryId],
		references: [categories.id]
	}),
}));