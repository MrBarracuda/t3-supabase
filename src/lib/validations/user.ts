import { z } from "zod";

export const userSchema = z.object({
  id: z.string().uuid({ message: "Invalid UUID" }),
  avatar: z.string().url().optional(),
  // imageUrl: z.string().url(),
  firstName: z.string().min(1, "First name must be at least 1 character"),
  lastName: z.string().min(1, "Last name must be at least 1 character"),
  username: z.string().min(1, "Username must be at least 1 character"),
  // displayName: z.string().min(1, "Display name must be at least 1 characters"),
  email: z.string().email({ message: "Invalid email" }),
  password: z.string().min(6, "Password must be at least 6 characters"),
  dateOfBirth: z.coerce.date().optional(),
  phoneNumber: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .optional(),
  // createdAt: z.coerce.date(),
  createdAt: z.coerce.date().default(new Date()).optional(),
});

export type UserType = z.infer<typeof userSchema>;
