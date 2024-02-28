import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { products } from "@/server/db/schema";
import { productCreateSchema } from "@/lib/validations/product";
import { z } from "zod";

export const productRouter = createTRPCRouter({
  create: publicProcedure
    .input(productCreateSchema)
    .mutation(async ({ ctx, input }) => {
      const { title, createdAt, id, category } = input;
      await ctx.db.insert(products).values({ title, createdAt, id, category });
    }),
  getAllByCategory: publicProcedure
    .input(z.enum(["accessories", "men", "women", "kids", "sale"]))
    .query(({ ctx, input }) => {
      return ctx.db.query.products.findMany({
        where: (products, { eq }) => eq(products.category, input),
      });
    }),
  getById: publicProcedure
    .input(z.string().uuid({ message: "Invalid UUID" }))
    .query(({ ctx, input }) => {
      return ctx.db.query.products.findFirst({
        where: (products, { eq }) => eq(products.id, input),
      });
    }),
});
