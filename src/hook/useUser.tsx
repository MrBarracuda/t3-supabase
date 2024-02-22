import { useQuery } from "@tanstack/react-query";
import { supabaseBrowser } from "@/lib/supabase/browser";

const initUser = {
  created_at: "",
  display_name: "",
  email: "",
  id: "",
  image_url: "",
};

export function useUser() {
  const userQueryFn = async () => {
    const supabase = supabaseBrowser();
    const { data } = await supabase.auth.getSession();

    if (data.session?.user) {
      const { data: user } = await supabase
        .from("users")
        .select("*")
        .eq("id", data.session.user.id)
        .single();
      return user;
    }

    return initUser;
  };

  return useQuery({
    queryKey: ["user"],
    queryFn: userQueryFn,
  });
}
