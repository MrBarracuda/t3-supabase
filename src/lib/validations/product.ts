import { z } from "zod";

export const productCreateSchema = z.object({
  id: z.string().uuid({ message: "Invalid UUID" }),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date().nullable(),
  createdBy: z.string().uuid({ message: "UUID doesn't match" }),
  category: z.enum(["accessories", "men", "women", "kids", "sale"]),
  imgUrl: z.string().nullable(),
  price: z.number(),
  // sizes: z.enum(SIZES),
  productId: z.number(),
});

export type ProductCreateType = z.infer<typeof productCreateSchema>;
