"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useUser } from "@/hook/useUser";
import { supabaseBrowser } from "@/lib/supabase/browser";
import { PROTECTED_PATH } from "@/lib/types";
import { toast } from "@/components/ui/use-toast";
import { useQueryClient } from "@tanstack/react-query";
import { usePathname, useRouter } from "next/navigation";

export function Profile() {
  const queryClient = useQueryClient();
  const router = useRouter();
  const pathname = usePathname();

  const handleLogOut = async () => {
    const supabase = supabaseBrowser();

    queryClient.clear();

    const { error } = await supabase.auth.signOut();

    router.refresh();

    if (PROTECTED_PATH.includes(pathname)) {
      router.replace("/auth?next=" + pathname);
    }

    if (error) {
      return toast({
        title: "Something went wrong.",
        description: "Your log out request failed. Please try again.",
        variant: "destructive",
      });
    }

    return toast({
      title: "Log out successfully",
      description: "Come back ",
    });
  };

  // TODO: move this logic to auth-form, create a global store for user data object
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { isFetching, data: user } = useUser();

  return !user?.id ? (
    <Link href="/auth" className="appearance-none" aria-hidden>
      <Button variant="ghost" size="icon" className="rounded-full">
        <Icons.profile />
      </Button>
    </Link>
  ) : (
    <DropdownMenu>
      <DropdownMenuTrigger asChild aria-hidden>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Avatar>
            <AvatarImage src={user?.image_url ?? ""} />
            <AvatarFallback>{user?.display_name?.slice(0, 1)}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{user.display_name}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/profile">Profile</Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-not-allowed focus:bg-background">
          {/*TODO: Allow to navigate to dashboard if user has role of a seller */}
          Seller Dashboard
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="text-red-500 focus:text-red-600"
          onClick={handleLogOut}
        >
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
