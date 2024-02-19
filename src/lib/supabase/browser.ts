"use client";

import { createBrowserClient } from "@supabase/ssr";
import { env } from "@/env";
import { type Database } from "@/lib/types/supabase";

export function supabaseBrowser() {
  return createBrowserClient<Database>(
    env.NEXT_PUBLIC_SUPABASE_URL,
    env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  );
}
