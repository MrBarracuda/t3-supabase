"use client";
import Link from "next/link";
import { Icons } from "@/components/icons";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { NavItems } from "@/components/nav-items";
import { ModeToggle } from "@/components/mode-toggle";
import { Button, buttonVariants } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { Cart } from "@/components/cart";
import supabaseBrowser from "@/lib/supabase/browser";
import { useState } from "react";

export default function Navbar() {
  const user = {
    name: "Dmytro",
    src: "https://github.com/shadcn.png",
  };
  const signOut = async () => {
    const supabase = supabaseBrowser();
    const { error } = await supabase.auth.signOut();
    console.log(error);
    // setUser(false);
  };

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

              {Object.keys(user).length === 0 ? (
                <Link
                  href="/login"
                  className={cn(
                    buttonVariants({ variant: "ghost" }),
                    "rounded-full",
                  )}
                >
                  <Icons.profile />
                </Link>
              ) : (
                // <Button variant="ghost" size="icon" className="rounded-full">
                // </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full"
                    >
                      <Icons.profile aria-hidden="true" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>
                      <Avatar>
                        <AvatarImage src={user.src ?? ""} />
                        <AvatarFallback>DD</AvatarFallback>
                      </Avatar>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <Link href="/profile">Profile</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-not-allowed focus:bg-background">
                      {/*TODO: Add protected route to dashboard page*/}
                      Seller Dashboard
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-red-500 focus:text-red-600">
                      {/*TODO: implement log out feature*/}
                      <button className="appearance-none" onClick={signOut}>
                        Log out
                      </button>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
            </div>
            {/*!-----*/}
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
}
