import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { brands, models, products } from "@/server/db/schema";
import { BrandSchema, productCreateSchema } from "@/lib/validations/product";
import { z } from "zod";
import { log } from "next/dist/server/typescript/utils";

export const productRouter = createTRPCRouter({
  create: publicProcedure
    .input(productCreateSchema)
    .mutation(async ({ ctx, input }) => {
      const { brand, model, ...rest } = input;

      // const modelF = await ctx.db.query.models.findFirst({
      //   where: (models, { eq }) => eq(models.value, input.model),
      // });
      //
      // const brandF = await ctx.db.query.brands.findFirst({
      //   where: (brand, { eq }) => eq(brand.value, input.brand),
      // });
      //
      // if (modelF?.id === undefined) {
      //   await ctx.db.insert(models).values({ value: model });
      // }
      //
      // if (brandF?.id === undefined) {
      //   await ctx.db
      //     .insert(brands)
      //     .values({ value: brand, modelId: modelF.id });
      // }

      await ctx.db.insert(products).values({
        ...rest,
        // modelId: modelF.id,
        // brandId: brandF.id,
      });
    }),
  createModel: publicProcedure
    .input(z.string())
    .mutation(async ({ ctx, input }) => {
      await ctx.db.insert(models).values({ value: input });
    }),
  createBrandAndModel: publicProcedure
    .input(
      z.object({
        brand: z.string(),
        model: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const { brand, model } = input;

      const fetchedModel = await ctx.db.query.models.findFirst({
        where: (models, { eq }) => eq(models.value, model),
        // with: {
        //   brand: true,
        // },
      });

      const fetchedBrand = await ctx.db.query.brands.findFirst({
        where: (brands, { eq }) => eq(brands.value, brand),
      });

      if (fetchedModel) return;

      await ctx.db.insert(brands).values({ value: brand });
    }),
  // createModel: publicProcedure
  //   .input(z.string())
  //   .mutation(async ({ ctx, input }) => {
  //     const model = await ctx.db.query.models.findFirst({
  //       where: (models, { eq }) => eq(models.value, input),
  //     });
  //     await ctx.db.insert(brands).values({
  //       value: input,
  //     });
  //   }),
  getAllByCategory: publicProcedure
    .input(z.enum(["accessories", "men", "women", "kids", "sale"]))
    .query(({ ctx, input }) => {
      return ctx.db.query.products.findMany({
        where: (products, { eq }) => eq(products.category, input),
        with: {
          brand: {
            with: {
              model: true,
            },
          },
          color: true,
        },
      });
    }),
  getById: publicProcedure
    .input(z.string().uuid({ message: "Invalid UUID" }))
    .query(({ ctx, input }) => {
      return ctx.db.query.products.findFirst({
        where: (products, { eq }) => eq(products.id, input),
        with: {
          brand: {
            with: {
              model: true,
            },
          },
          color: true,
          size: true,
        },
      });
    }),
});
