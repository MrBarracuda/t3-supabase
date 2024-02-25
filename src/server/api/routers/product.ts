import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { products } from "@/server/db/schema";
import { productCreate } from "@/lib/validations/product";

export const productRouter = createTRPCRouter({
  create: publicProcedure
    .input(productCreate)
    .mutation(async ({ ctx, input }) => {
      const { title, createdAt, id } = input;
      await ctx.db.insert(products).values({ title, createdAt, id });
    }),
});
