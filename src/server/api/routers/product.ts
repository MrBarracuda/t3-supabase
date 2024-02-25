import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { products } from "@/server/db/schema";
import { productCreateSchema } from "@/lib/validations/product";

export const productRouter = createTRPCRouter({
  create: publicProcedure
    .input(productCreateSchema)
    .mutation(async ({ ctx, input }) => {
      const { title, createdAt, id, gender } = input;
      await ctx.db.insert(products).values({ title, createdAt, id, gender });
    }),
});
