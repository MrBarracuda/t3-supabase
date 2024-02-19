"use client";

import { useSearchParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { type HTMLAttributes, useState } from "react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Icons } from "@/components/icons";
import { supabaseBrowser } from "@/lib/supabase/browser";
import { getBaseUrl } from "@/trpc/shared";
import { toast } from "@/components/ui/use-toast";

const userAuthSchema = z.object({
  email: z.string().email(),
});

type UserAuthFormProps = HTMLAttributes<HTMLDivElement>;

type FormData = z.infer<typeof userAuthSchema>;

// type userData = {
//   session: any
//   user: any
// }

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(userAuthSchema),
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isGitHubLoading, setIsGitHubLoading] = useState<boolean>(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState<boolean>(false);
  const searchParams = useSearchParams();

  // const [userData, setUserData] = useState<unknown>();
  const handleLoginWithOAuth = (provider: "google" | "github") => {
    const supabase = supabaseBrowser();
    // with void operator
    // add + "/login/callback to location.origin"
    void supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: getBaseUrl() + "/login/callback",
      },
    });
  };

  // console.log(userData);

  async function onSubmit(formData: FormData) {
    setIsLoading(true);
    const supabase = supabaseBrowser();
    const { data, error } = await supabase.auth.signInWithOtp({
      email: formData.email.toLowerCase(),
      options: {
        emailRedirectTo: searchParams?.get("from") ?? getBaseUrl(),
        shouldCreateUser: false,
      },
    });
    // setUserData(res.data);
    setIsLoading(false);

    if (error) {
      return toast({
        title: "Something went wrong.",
        description: "Your sign in request failed. Please try again.",
        variant: "destructive",
      });
    }

    return toast({
      title: "Check your email",
      description: "We sent you a login link. Be sure to check your spam too.",
    });
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading || isGitHubLoading || isGoogleLoading}
              {...register("email")}
            />
            {errors?.email && (
              <p className="px-1 text-xs text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>
          <button className={cn(buttonVariants())} disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Sign In with Email
          </button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <button
        type="button"
        className={cn(buttonVariants({ variant: "outline" }))}
        onClick={() => {
          setIsGitHubLoading(true);
          handleLoginWithOAuth("github");
        }}
        disabled={isLoading || isGitHubLoading}
      >
        {isGitHubLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.gitHub className="mr-2 h-4 w-4" />
        )}
        Github
      </button>

      <button
        type="button"
        className={cn(buttonVariants({ variant: "outline" }))}
        onClick={() => {
          setIsGoogleLoading(true);
          handleLoginWithOAuth("google");
        }}
        disabled={isLoading || isGoogleLoading}
      >
        {isGoogleLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.google className="mr-2 h-4 w-4" />
        )}
        Google
      </button>
    </div>
  );
}
