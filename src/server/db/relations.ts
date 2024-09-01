import { relations } from "drizzle-orm/relations";
import {
  users,
  addresses,
  categories,
  subCategories,
  products,
  productsSkus,
  wishlist,
  cart,
  cartItem,
  orderDetails,
  orderItem,
  productAttributes,
  paymentDetails,
} from "./schema";

export const addressesRelations = relations(addresses, ({ one }) => ({
  user: one(users, {
    fields: [addresses.userId],
    references: [users.id],
  }),
}));

export const usersRelations = relations(users, ({ many }) => ({
  addresses: many(addresses),
}));

export const subCategoriesRelations = relations(subCategories, ({ one }) => ({
  category: one(categories, {
    fields: [subCategories.parentId],
    references: [categories.id],
  }),
}));

export const categoriesRelations = relations(categories, ({ many }) => ({
  subCategories: many(subCategories),
  products: many(products),
}));

export const productsRelations = relations(products, ({ one }) => ({
  category: one(categories, {
    fields: [products.categoryId],
    references: [categories.id],
  }),
  subCategory: one(subCategories, {
    fields: [products.categoryId], // Assuming categoryId is used for subCategory
    references: [subCategories.id],
  }),
}));

export const productsSkusRelations = relations(productsSkus, ({ one }) => ({
  sizeAttribute: one(productAttributes, {
    fields: [productsSkus.colorAttributeId],
    references: [productAttributes.id],
  }),
  colorAttribute: one(productAttributes, {
    fields: [productsSkus.colorAttributeId],
    references: [productAttributes.id],
  }),
}));

export const wishlistRelations = relations(wishlist, ({ one }) => ({
  user: one(users, {
    fields: [wishlist.userId],
    references: [users.id],
  }),
  product: one(products, {
    fields: [wishlist.productId],
    references: [products.id],
  }),
}));

export const cartRelations = relations(cart, ({ one }) => ({
  user: one(users, {
    fields: [cart.userId],
    references: [users.id],
  }),
}));

export const cartItemRelations = relations(cartItem, ({ one }) => ({
  cart: one(cart, {
    fields: [cartItem.cartId],
    references: [cart.id],
  }),
  product: one(products, {
    fields: [cartItem.productId],
    references: [products.id],
  }),
  productsSku: one(productsSkus, {
    fields: [cartItem.productsSkuId],
    references: [productsSkus.id],
  }),
}));

export const orderDetailsRelations = relations(orderDetails, ({ one }) => ({
  user: one(users, {
    fields: [orderDetails.userId],
    references: [users.id],
  }),
  payment: one(paymentDetails, {
    fields: [orderDetails.paymentId],
    references: [paymentDetails.id],
  }),
}));

export const orderItemRelations = relations(orderItem, ({ one }) => ({
  order: one(orderDetails, {
    fields: [orderItem.orderId],
    references: [orderDetails.id],
  }),
  product: one(products, {
    fields: [orderItem.productId],
    references: [products.id],
  }),
  productsSku: one(productsSkus, {
    fields: [orderItem.productsSkuId],
    references: [productsSkus.id],
  }),
}));

export const paymentDetailsRelations = relations(paymentDetails, ({ one }) => ({
  order: one(orderDetails, {
    fields: [paymentDetails.orderId],
    references: [orderDetails.id],
  }),
}));
