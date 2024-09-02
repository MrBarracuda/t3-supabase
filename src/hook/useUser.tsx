import { useQuery } from "@tanstack/react-query";
import { supabaseBrowser } from "@/lib/supabase/browser";

const initUser = {
  id: "",
  avatar: "",
  first_name: "",
  last_name: "",
  username: "",
  email: "",
  password: "",
  date_of_birth: Date || null,
  phone_number: "",
  createdAt: Date,
};

export function useUser() {
  const userQueryFn = async () => {
    const supabase = supabaseBrowser();
    const { data } = await supabase.auth.getUser();

    if (data.user) {
      const { data: user } = await supabase
        .from("users")
        .select("*")
        .eq("id", data.user.id)
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
