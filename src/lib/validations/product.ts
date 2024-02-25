import { z } from "zod";

export const productCreate = z.object({
  title: z.string().min(1),
  createdAt: z.coerce.date(),
  id: z.string().uuid({ message: "Invalid UUID" }),
  imgUrl: z.string().optional(),
  gender: z.enum(["men", "women", "kids", "unisex"]),
});

export type ProductCreateType = z.infer<typeof productCreate>;
