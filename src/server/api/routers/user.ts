import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { supabaseServer } from "@/lib/supabase/server";

export const userRouter = createTRPCRouter({
  // getCurrent: publicProcedure.query(async ({ ctx }) => {
  //   const supabase = supabaseServer();
  //   const { data } = await supabase.auth.getSession();
  //
  //   if (data.session?.user === undefined) {
  //     return {
  //       created_at: "",
  //       display_name: "",
  //       email: "",
  //       id: "",
  //       image_url: "",
  //     };
  //   }
  //
  //   const currentUserId = data.session.user.id;
  //
  //   const { data: user } = await supabase
  //     .from("users")
  //     .select("*")
  //     .eq("id", currentUserId)
  //     .single();
  //   return user;
  // }),

  getCurrentUser: publicProcedure.query(async ({ ctx }) => {
    const supabase = supabaseServer();
    const { data } = await supabase.auth.getSession();

    if (data.session?.user === undefined) {
      return {
        id: "",
        createdAt: Date,
        email: "",
        displayName: "",
        imageUrl: null,
      };
    }

    const currentUserId = data.session.user.id;

    return ctx.db.query.users.findFirst({
      where: (users, { eq }) => eq(users.id, currentUserId),
    });
  }),
});
