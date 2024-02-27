import { z } from "zod";

export const productCreateSchema = z.object({
  title: z.string().min(1),
  createdAt: z.coerce.date(),
  id: z.string().uuid({ message: "Invalid UUID" }),
  imgUrl: z.string().optional(),
  // gender: z.enum(["men", "women", "kids", "unisex"]),
  category: z.enum(["accessories", "men", "women", "kids", "sale"]),
});

export type ProductCreateType = z.infer<typeof productCreateSchema>;
