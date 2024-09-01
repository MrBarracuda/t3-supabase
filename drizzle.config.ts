import { defineConfig } from "drizzle-kit";

import { env } from "@/env.js";

export default defineConfig({
  schema: "./src/server/db/schema.ts",
  dialect: "postgresql",
  out: "./supabase/migrations",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  // tablesFilter: ["t3-supabase_*"],
});
