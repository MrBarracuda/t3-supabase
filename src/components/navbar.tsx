"use client";

import Link from "next/link";
import { Icons } from "@/components/icons";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { NavItems } from "@/components/nav-items";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Cart } from "@/components/cart";
import { supabaseBrowser } from "@/lib/supabase/browser";
import { useUser } from "@/hook/useUser";
import { useQueryClient } from "@tanstack/react-query";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "@/components/ui/use-toast";
import { PROTECTED_PATH } from "@/config";

export default function Navbar() {
  // TODO: extract client logic to different compoentent
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
  const { isFetching, data } = useUser();

  return (
    <div className="sticky inset-x-0 top-0 z-50 h-16 border-b bg-background">
      <header className="relative">
        <MaxWidthWrapper>
          <div className="flex h-16 items-center justify-between">
            {/*TODO: implement mobile menu*/}
            <div className="ml-4 flex hover:text-muted-foreground lg:ml-0">
              <Link
                href="/"
                className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6"
              >
                <Icons.logo className="h-8 w-8" />
                <div className="text-md ml-2 hidden flex-none font-medium uppercase lg:block">
                  HYPESNEAKERS
                </div>
              </Link>
            </div>

            <div className="z-50 hidden lg:ml-8 lg:block lg:self-stretch">
              <NavItems />
            </div>

            <div className="flex items-center gap-2">
              <ModeToggle />

              <Button variant="ghost" size="icon" className="rounded-full">
                <Icons.search />
              </Button>

              <Cart />

              {!data?.id ? (
                <Link href="/auth" className="appearance-none" aria-hidden>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Icons.profile />
                  </Button>
                </Link>
              ) : (
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Avatar>
                      <AvatarImage src={data?.image_url ?? ""} />
                      <AvatarFallback>
                        {data?.display_name?.slice(0, 1)}
                      </AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>{data.display_name}</DropdownMenuLabel>
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
              )}
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
}
