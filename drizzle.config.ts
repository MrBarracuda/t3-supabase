import { type Config } from "drizzle-kit";

import { env } from "@/env.js";

export default {
  schema: "./src/server/db/schema.ts",
  driver: "pg",
  out: "./supabase/migrations",
  dbCredentials: {
    connectionString: env.DATABASE_URL,
  },
  tablesFilter: ["t3-supabase_*"],
} satisfies Config;
