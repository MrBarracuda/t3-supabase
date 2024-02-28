import { z } from "zod";

export const userSchema = z.object({
  id: z.string().uuid({ message: "Invalid UUID" }),
  createdAt: z.coerce.date(),
  email: z.string().email({ message: "Invalid email" }),
  displayName: z.string().min(1, "Display name must be at least 1 characters"),
  imageUrl: z.string().url(),
});

export type UserType = z.infer<typeof userSchema>;
