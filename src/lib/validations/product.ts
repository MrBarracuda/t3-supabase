import { z } from "zod";

export const productCreateSchema = z.object({
  id: z.string().uuid({ message: "Invalid UUID" }),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date().nullable(),
  createdBy: z.string().uuid({ message: "UUID doesn't match" }),
  category: z.enum(["accessories", "men", "women", "kids", "sale"]),
  imageUrl: z.string().nullable(),
  price: z.number(),
  // sizes: z.enum(SIZES),
  // productId: z.number(),
  // colorId: z.number(),
  brandId: z.number(),
  modelId: z.number(),
  // sizeId: z.number(),
  brand: z.string(),
  model: z.string(),
  stock: z.number(),
});

// export const SizeSchema = z.object({
//   id: z.number(),
//   value: z.enum(SIZES)
// })

export const ModelSchema = z.object({
  id: z.number(),
  value: z.string(),
});

export const BrandSchema = z.object({
  id: z.number(),
  value: z.string(),
  modelId: z.number(),
});

export const ColorSchema = z.object({
  id: z.number(),
  value: z.string(),
});

export type ProductCreateType = z.infer<typeof productCreateSchema>;
